<?php
/**
 * Upgrader API: Plugin_Installer_Skin class
 *
 * @package WordPress
 * @subpackage Upgrader
 * @since 4.6.0
 */

/**
 * Plugin Installer Skin for WordPress Plugin Installer.
 *
 * @since 2.8.0
 * @since 4.6.0 Moved to its own file from wp-admin/includes/class-wp-upgrader-skins.php.
 *
 * @see WP_Upgrader_Skin
 */
class Plugin_Installer_Skin extends WP_Upgrader_Skin {
	public $api;
	public $type;
	public $url;
	public $overwrite;

	private $is_downgrading = false;

	/**
	 * @param array $args
	 */
	public function __construct( $args = array() ) {
		$defaults = array(
			'type'      => 'web',
			'url'       => '',
			'plugin'    => '',
			'nonce'     => '',
			'title'     => '',
			'overwrite' => '',
		);
		$args     = wp_parse_args( $args, $defaults );

		$this->type      = $args['type'];
		$this->url       = $args['url'];
		$this->api       = isset( $args['api'] ) ? $args['api'] : array();
		$this->overwrite = $args['overwrite'];

		parent::__construct( $args );
	}

	/**
	 */
	public function before() {
		if ( ! empty( $this->api ) ) {
			$this->upgrader->strings['process_success'] = sprintf(
				$this->upgrader->strings['process_success_specific'],
				$this->api->name,
				$this->api->version
			);
		}
	}

	/**
	 * Hides the `process_failed` error when updating a plugin by uploading a zip file.
	 *
	 * @since 5.5.0
	 *
	 * @param $wp_error WP_Error.
	 * @return bool
	 */
	public function hide_process_failed( $wp_error ) {
		if (
			'upload' === $this->type &&
			'' === $this->overwrite &&
			$wp_error->get_error_code() === 'folder_exists'
		) {
			return true;
		}

		return false;
	}

	/**
	 */
	public function after() {
		// Check if the plugin can be overwritten and output the HTML.
		if ( $this->do_overwrite() ) {
			return;
		}

		$plugin_file = $this->upgrader->plugin_info();

		$install_actions = array();

		$from = isset( $_GET['from'] ) ? wp_unslash( $_GET['from'] ) : 'plugins';

		if ( 'import' === $from ) {
			$install_actions['activate_plugin'] = sprintf(
				'<a class="button button-primary" href="%s" target="_parent">%s</a>',
				wp_nonce_url( 'plugins.php?action=activate&amp;from=import&amp;plugin=' . urlencode( $plugin_file ), 'activate-plugin_' . $plugin_file ),
				__( 'Activate Plugin &amp; Run Importer' )
			);
		} elseif ( 'press-this' === $from ) {
			$install_actions['activate_plugin'] = sprintf(
				'<a class="button button-primary" href="%s" target="_parent">%s</a>',
				wp_nonce_url( 'plugins.php?action=activate&amp;from=press-this&amp;plugin=' . urlencode( $plugin_file ), 'activate-plugin_' . $plugin_file ),
				__( 'Activate Plugin &amp; Return to Press This' )
			);
		} else {
			$install_actions['activate_plugin'] = sprintf(
				'<a class="button button-primary" href="%s" target="_parent">%s</a>',
				wp_nonce_url( 'plugins.php?action=activate&amp;plugin=' . urlencode( $plugin_file ), 'activate-plugin_' . $plugin_file ),
				__( 'Activate Plugin' )
			);
		}

		if ( is_multisite() && current_user_can( 'manage_network_plugins' ) ) {
			$install_actions['network_activate'] = sprintf(
				'<a class="button button-primary" href="%s" target="_parent">%s</a>',
				wp_nonce_url( 'plugins.php?action=activate&amp;networkwide=1&amp;plugin=' . urlencode( $plugin_file ), 'activate-plugin_' . $plugin_file ),
				__( 'Network Activate' )
			);
			unset( $install_actions['activate_plugin'] );
		}

		if ( 'import' === $from ) {
			$install_actions['importers_page'] = sprintf(
				'<a href="%s" target="_parent">%s</a>',
				admin_url( 'import.php' ),
				__( 'Return to Importers' )
			);
		} elseif ( 'web' === $this->type ) {
			$install_actions['plugins_page'] = sprintf(
				'<a href="%s" target="_parent">%s</a>',
				self_admin_url( 'plugin-install.php' ),
				__( 'Return to Plugin Installer' )
			);
		} elseif ( 'upload' === $this->type && 'plugins' === $from ) {
			$install_actions['plugins_page'] = sprintf(
				'<a href="%s">%s</a>',
				self_admin_url( 'plugin-install.php' ),
				__( 'Return to Plugin Installer' )
			);
		} else {
			$install_actions['plugins_page'] = sprintf(
				'<a href="%s" target="_parent">%s</a>',
				self_admin_url( 'plugins.php' ),
				__( 'Return to Plugins page' )
			);
		}

		if ( ! $this->result || is_wp_error( $this->result ) ) {
			unset( $install_actions['activate_plugin'], $install_actions['network_activate'] );
		} elseif ( ! current_user_can( 'activate_plugin', $plugin_file ) || is_plugin_active( $plugin_file ) ) {
			unset( $install_actions['activate_plugin'] );
		}

		/**
		 * Filters the list of action links available following a single plugin installation.
		 *
		 * @since 2.7.0
		 *
		 * @param string[] $install_actions Array of plugin action links.
		 * @param object   $api             Object containing WordPress.org API plugin data. Empty
		 *                                  for non-API installs, such as when a plugin is installed
		 *                                  via upload.
		 * @param string   $plugin_file     Path to the plugin file relative to the plugins directory.
		 */
		$install_actions = apply_filters( 'install_plugin_complete_actions', $install_actions, $this->api, $plugin_file );

		if ( ! empty( $install_actions ) ) {
			$this->feedback( implode( ' ', (array) $install_actions ) );
		}
	}

	/**
	 * Check if the plugin can be overwritten and output the HTML for overwriting a plugin on upload.
	 *
	 * @since 5.5.0
	 *
	 * @return bool Whether the plugin can be overwritten and HTML was outputted.
	 */
	private function do_overwrite() {
		if ( 'upload' !== $this->type || ! is_wp_error( $this->result ) || 'folder_exists' !== $this->result->get_error_code() ) {
			return false;
		}

		$folder = $this->result->get_error_data( 'folder_exists' );
		$folder = ltrim( substr( $folder, strlen( WP_PLUGIN_DIR ) ), '/' );

		$current_plugin_data = false;
		foreach ( get_plugins() as $plugin => $plugin_data ) {
			if ( strrpos( $plugin, $folder ) !== 0 ) {
				continue;
			}

			$current_plugin_data = $plugin_data;
		}

		if ( empty( $current_plugin_data ) || empty( $this->upgrader->new_plugin_data ) ) {
			return false;
		}

		echo '<h2 class="update-from-upload-heading">' . esc_html( __( 'This plugin is already installed.' ) ) . '</h2>';

		$this->is_downgrading = version_compare( $current_plugin_data['Version'], $this->upgrader->new_plugin_data['Version'], '>' );

		$rows = array(
			'Name'        => __( 'Plugin name' ),
			'Version'     => __( 'Version' ),
			'Author'      => __( 'Author' ),
			'RequiresWP'  => __( 'Required WordPress version' ),
			'RequiresPHP' => __( 'Required PHP version' ),
		);

		$table  = '<table class="update-from-upload-comparison"><tbody>';
		$table .= '<tr><th></th><th>' . esc_html( __( 'Current' ) ) . '</th>';
		$table .= '<th>' . esc_html( __( 'Uploaded' ) ) . '</th></tr>';

		$is_same_plugin = true; // Let's consider only these rows
		foreach ( $rows as $field => $label ) {
			$old_value = ! empty( $current_plugin_data[ $field ] ) ? $current_plugin_data[ $field ] : '-';
			$new_value = ! empty( $this->upgrader->new_plugin_data[ $field ] ) ? $this->upgrader->new_plugin_data[ $field ] : '-';

			$is_same_plugin = $is_same_plugin && ( $old_value === $new_value );

			$diff_field   = ( 'Version' !== $field && $new_value !== $old_value );
			$diff_version = ( 'Version' === $field && $this->is_downgrading );

			$table .= '<tr><td class="name-label">' . $label . '</td><td>' . esc_html( $old_value ) . '</td>';
			$table .= ( $diff_field || $diff_version ) ? '<td class="warning">' : '<td>';
			$table .= esc_html( $new_value ) . '</td></tr>';
		}

		$table .= '</tbody></table>';

		/**
		 * Filters the compare table output for overwriting a plugin package on upload.
		 *
		 * @since 5.5.0
		 *
		 * @param string $table               The output table with Name, Version, Author, RequiresWP, and RequiresPHP info.
		 * @param array  $current_plugin_data Array with current plugin data.
		 * @param array  $new_plugin_data     Array with uploaded plugin data.
		 */
		echo apply_filters( 'install_plugin_ovewrite_comparison', $table, $current_plugin_data, $this->upgrader->new_plugin_data );

		$install_actions = array();
		$can_update      = true;

		$blocked_message  = '<p>' . esc_html( __( 'The plugin cannot be updated due to the following:' ) ) . '</p>';
		$blocked_message .= '<ul class="ul-disc">';

		if (
			! empty( $this->upgrader->new_plugin_data['RequiresPHP'] ) &&
			version_compare( phpversion(), $this->upgrader->new_plugin_data['RequiresPHP'], '<' )
		) {
			$error = sprintf(
				/* translators: 1: Current PHP version, 2: Version required by the uploaded plugin. */
				__( 'The PHP version on your server is %1$s, however the uploaded plugin requires %2$s.' ),
				phpversion(),
				$this->upgrader->new_plugin_data['RequiresPHP']
			);

			$blocked_message .= '<li>' . esc_html( $error ) . '</li>';
			$can_update       = false;
		}

		if (
			! empty( $this->upgrader->new_plugin_data['RequiresWP'] ) &&
			version_compare( $GLOBALS['wp_version'], $this->upgrader->new_plugin_data['RequiresWP'], '<' )
		) {
			$error = sprintf(
				/* translators: 1: Current WordPress version, 2: Version required by the uploaded plugin. */
				__( 'Your WordPress version is %1$s, however the uploaded plugin requires %2$s.' ),
				$GLOBALS['wp_version'],
				$this->upgrader->new_plugin_data['RequiresWP']
			);

			$blocked_message .= '<li>' . esc_html( $error ) . '</li>';
			$can_update       = false;
		}

		$blocked_message .= '</ul>';

		if ( $can_update ) {
			if ( $this->is_downgrading ) {
				$warning = __( 'You are uploading an older version of a current plugin. You can continue to install the older version, but be sure to <a href="https://wordpress.org/support/article/wordpress-backups/">backup your database and files</a> first.' );
			} else {
				$warning = __( 'You are updating a plugin. Be sure to <a href="https://wordpress.org/support/article/wordpress-backups/">backup your database and files</a> first.' );
			}

			echo '<p class="update-from-upload-notice">' . $warning . '</p>';

			$overwrite = $this->is_downgrading ? 'downgrade-plugin' : 'update-plugin';

			$install_actions['ovewrite_plugin'] = sprintf(
				'<a class="button button-primary update-from-upload-overwrite" href="%s" target="_parent">%s</a>',
				wp_nonce_url( add_query_arg( 'overwrite', $overwrite, $this->url ), 'plugin-upload' ),
				__( 'Replace current with uploaded' )
			);
		} else {
			echo $blocked_message;
		}

		$cancel_url = add_query_arg( 'action', 'upload-plugin-cancel-overwrite', $this->url );

		$install_actions['plugins_page'] = sprintf(
			'<a class="button" href="%s">%s</a>',
			wp_nonce_url( $cancel_url, 'plugin-upload-cancel-overwrite' ),
			__( 'Cancel and go back' )
		);

		/**
		 * Filters the list of action links available following a single plugin installation failed but ovewrite is allowed.
		 *
		 * @since 5.5.0
		 *
		 * @param string[] $install_actions Array of plugin action links.
		 * @param object   $api             Object containing WordPress.org API plugin data.
		 * @param array    $new_plugin_data Array with uploaded plugin data.
		 */
		$install_actions = apply_filters( 'install_plugin_ovewrite_actions', $install_actions, $this->api, $this->upgrader->new_plugin_data );

		if ( ! empty( $install_actions ) ) {
			printf(
				'<p class="update-from-upload-expired hidden">%s</p>',
				__( 'The uploaded file has expired. Please go back and upload it again.' )
			);
			echo '<p class="update-from-upload-actions">' . implode( ' ', (array) $install_actions ) . '</p>';
		}

		return true;
	}
}

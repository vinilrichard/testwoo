<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_One
 * @since Twenty Twenty-One 1.0
 */

get_header();

/* Start the Loop */
while ( have_posts() ) :
	the_post();

	get_template_part( 'template-parts/content/content-single' );

	if ( is_attachment() ) {
		// Parent post navigation.
		the_post_navigation(
			array(
				/* translators: %s: parent post link. */
				'prev_text' => sprintf( __( '<span class="meta-nav">Published in</span><span class="post-title">%s</span>', 'twentytwentyone' ), '%title' ),
			)
		);
	}

	// If comments are open or there is at least one comment, load up the comment template.
	if ( comments_open() || get_comments_number() ) {
		comments_template();
	}

	// Previous/next post navigation.
	$twentytwentyone_next = is_rtl() ? twenty_twenty_one_get_icon_svg( 'ui', 'arrow_left' ) : twenty_twenty_one_get_icon_svg( 'ui', 'arrow_right' );
	$twentytwentyone_prev = is_rtl() ? twenty_twenty_one_get_icon_svg( 'ui', 'arrow_right' ) : twenty_twenty_one_get_icon_svg( 'ui', 'arrow_left' );

	$twentytwentyone_post_type      = get_post_type_object( get_post_type() );
	$twentytwentyone_post_type_name = '';
	if (
		is_object( $twentytwentyone_post_type ) &&
		property_exists( $twentytwentyone_post_type, 'labels' ) &&
		is_object( $twentytwentyone_post_type->labels ) &&
		property_exists( $twentytwentyone_post_type->labels, 'singular_name' )
	) {
		$twentytwentyone_post_type_name = $twentytwentyone_post_type->labels->singular_name;
	}

	/* translators: %s: The post-type singular name (example: Post, Page, etc.) */
	$twentytwentyone_next_label = sprintf( esc_html__( 'Next %s', 'twentytwentyone' ), $twentytwentyone_post_type_name );
	/* translators: %s: The post-type singular name (example: Post, Page, etc.) */
	$twentytwentyone_previous_label = sprintf( esc_html__( 'Previous %s', 'twentytwentyone' ), $twentytwentyone_post_type_name );

	the_post_navigation(
		array(
			'next_text' => '<p class="meta-nav">' . $twentytwentyone_next_label . $twentytwentyone_next . '</p><p class="post-title">%title</p>',
			'prev_text' => '<p class="meta-nav">' . $twentytwentyone_prev . $twentytwentyone_previous_label . '</p><p class="post-title">%title</p>',
		)
	);
endwhile; // End of the loop.

get_footer();

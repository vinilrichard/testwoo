function fileDialogStart(){jQuery("#media-upload-error").empty()}function fileQueued(a){jQuery(".media-blank").remove();if(jQuery(".type-form #media-items>*").length==1&&jQuery("#media-items .hidden").length>0){jQuery(".describe-toggle-on").show();jQuery(".describe-toggle-off").hide();jQuery(".slidetoggle").slideUp(200).siblings().removeClass("hidden")}jQuery("#media-items").append('<div id="media-item-'+a.id+'" class="media-item child-of-'+post_id+'"><div class="progress"><div class="bar"></div></div><div class="filename original"><span class="percent"></span> '+a.name+"</div></div>");jQuery("#media-item-"+a.id+" .progress").show();jQuery("#insert-gallery").attr("disabled","disabled");jQuery("#cancel-upload").attr("disabled","")}function uploadStart(a){return true}function uploadProgress(d,b,c){var a=jQuery("#media-items").width()-2;jQuery("#media-item-"+d.id+" .bar").width(a*b/c);jQuery("#media-item-"+d.id+" .percent").html(Math.ceil(b/c*100)+"%");if(b==c){jQuery("#media-item-"+d.id+" .bar").html('<strong class="crunching">'+swfuploadL10n.crunching+"</strong>")}}function prepareMediaItem(b,a){jQuery("#media-item-"+b.id+" .bar").remove();jQuery("#media-item-"+b.id+" .progress").hide();var c=(typeof shortform=="undefined")?1:2;if(isNaN(a)||!a){jQuery("#media-item-"+b.id).append(a);prepareMediaItemInit(b)}else{jQuery("#media-item-"+b.id).load("async-upload.php",{attachment_id:a,fetch:c},function(){prepareMediaItemInit(b);updateMediaForm()})}}function prepareMediaItemInit(a){jQuery("#media-item-"+a.id+" .thumbnail").clone().attr("className","pinkynail toggle").prependTo("#media-item-"+a.id);jQuery("#media-item-"+a.id+" .filename.original").replaceWith(jQuery("#media-item-"+a.id+" .filename.new"));jQuery("#media-item-"+a.id+" a.toggle").click(function(){jQuery(this).siblings(".slidetoggle").slideToggle(150,function(){var b=jQuery(this).offset();window.scrollTo(0,b.top-36)});jQuery(this).parent().children(".toggle").toggle();jQuery(this).siblings("a.toggle").focus();return false});jQuery("#media-item-"+a.id+" a.delete").click(function(){jQuery.ajax({url:"admin-ajax.php",type:"post",success:deleteSuccess,error:deleteError,id:a.id,data:{id:this.id.replace(/[^0-9]/g,""),action:"trash-post",_ajax_nonce:this.href.replace(/^.*wpnonce=/,"")}});return false});jQuery("#media-item-"+a.id+".startopen").removeClass("startopen").slideToggle(500).parent().children(".toggle").toggle()}function itemAjaxError(c,b){var a=jQuery("#media-item-error"+c);a.html('<div class="file-error"><button type="button" id="dismiss-'+c+'" class="button dismiss">'+swfuploadL10n.dismiss+"</button>"+b+"</div>");jQuery("#dismiss-"+c).click(function(){jQuery(this).parents(".file-error").slideUp(200,function(){jQuery(this).empty()})})}function deleteSuccess(b,c){if(b=="-1"){return itemAjaxError(this.id,"You do not have permission. Has your session expired?")}if(b=="0"){return itemAjaxError(this.id,"Could not be deleted. Has it been deleted already?")}var a=jQuery("#media-item-"+this.id);if(type=jQuery("#type-of-"+this.id).val()){jQuery("#"+type+"-counter").text(jQuery("#"+type+"-counter").text()-1)}if(a.hasClass("child-of-"+post_id)){jQuery("#attachments-count").text(jQuery("#attachments-count").text()-1)}if(jQuery(".type-form #media-items>*").length==1&&jQuery("#media-items .hidden").length>0){jQuery(".toggle").toggle();jQuery(".slidetoggle").slideUp(200).siblings().removeClass("hidden")}jQuery("#media-item-"+this.id+" .filename:empty").remove();jQuery("#media-item-"+this.id+" .filename").append(' <span class="file-error">'+swfuploadL10n.deleted+"</span>").siblings("a.toggle").remove();jQuery("#media-item-"+this.id).children(".describe").css({backgroundColor:"#fff"}).end().animate({backgroundColor:"#ffc0c0"},{queue:false,duration:50}).animate({minHeight:0,height:36},400,null,function(){jQuery(this).children(".describe").remove()}).animate({backgroundColor:"#fff"},400).animate({height:0},800,null,function(){jQuery(this).remove();updateMediaForm()});return}function deleteError(c,b,a){}function updateMediaForm(){storeState();if(jQuery(".type-form #media-items>*").length==1){jQuery("#media-items .slidetoggle").slideDown(500).parent().eq(0).children(".toggle").toggle();jQuery(".type-form .slidetoggle").siblings().addClass("hidden")}if(jQuery("#media-items>*").not(".media-blank").length>0){jQuery(".savebutton").show()}else{jQuery(".savebutton").hide()}if(jQuery("#media-items>*").length>1){jQuery(".insert-gallery").show()}else{jQuery(".insert-gallery").hide()}}function uploadSuccess(b,a){if(a.match("media-upload-error")){jQuery("#media-item-"+b.id).html(a);return}prepareMediaItem(b,a);updateMediaForm();if(jQuery("#media-item-"+b.id).hasClass("child-of-"+post_id)){jQuery("#attachments-count").text(1*jQuery("#attachments-count").text()+1)}}function uploadComplete(a){if(swfu.getStats().files_queued==0){jQuery("#cancel-upload").attr("disabled","disabled");jQuery("#insert-gallery").attr("disabled","")}}function wpQueueError(a){jQuery("#media-upload-error").show().text(a)}function wpFileError(b,a){jQuery("#media-item-"+b.id+" .filename").after('<div class="file-error"><button type="button" id="dismiss-'+b.id+'" class="button dismiss">'+swfuploadL10n.dismiss+"</button>"+a+"</div>").siblings(".toggle").remove();jQuery("#dismiss-"+b.id).click(function(){jQuery(this).parents(".media-item").slideUp(200,function(){jQuery(this).remove()})})}function fileQueueError(c,a,b){if(a==SWFUpload.QUEUE_ERROR.QUEUE_LIMIT_EXCEEDED){wpQueueError(swfuploadL10n.queue_limit_exceeded)}else{if(a==SWFUpload.QUEUE_ERROR.FILE_EXCEEDS_SIZE_LIMIT){fileQueued(c);wpFileError(c,swfuploadL10n.file_exceeds_size_limit)}else{if(a==SWFUpload.QUEUE_ERROR.ZERO_BYTE_FILE){fileQueued(c);wpFileError(c,swfuploadL10n.zero_byte_file)}else{if(a==SWFUpload.QUEUE_ERROR.INVALID_FILETYPE){fileQueued(c);wpFileError(c,swfuploadL10n.invalid_filetype)}else{wpQueueError(swfuploadL10n.default_error)}}}}}function fileDialogComplete(b){try{if(b>0){this.startUpload()}}catch(a){this.debug(a)}}function switchUploader(b){var c=document.getElementById(swfu.customSettings.swfupload_element_id),a=document.getElementById(swfu.customSettings.degraded_element_id);if(b){c.style.display="block";a.style.display="none"}else{c.style.display="none";a.style.display="block"}}function swfuploadPreLoad(){if(!uploaderMode){switchUploader(1)}else{switchUploader(0)}}function swfuploadLoadFailed(){switchUploader(0);jQuery(".upload-html-bypass").hide()}function uploadError(b,c,a){switch(c){case SWFUpload.UPLOAD_ERROR.MISSING_UPLOAD_URL:wpFileError(b,swfuploadL10n.missing_upload_url);break;case SWFUpload.UPLOAD_ERROR.UPLOAD_LIMIT_EXCEEDED:wpFileError(b,swfuploadL10n.upload_limit_exceeded);break;case SWFUpload.UPLOAD_ERROR.HTTP_ERROR:wpQueueError(swfuploadL10n.http_error);break;case SWFUpload.UPLOAD_ERROR.UPLOAD_FAILED:wpQueueError(swfuploadL10n.upload_failed);break;case SWFUpload.UPLOAD_ERROR.IO_ERROR:wpQueueError(swfuploadL10n.io_error);break;case SWFUpload.UPLOAD_ERROR.SECURITY_ERROR:wpQueueError(swfuploadL10n.security_error);break;case SWFUpload.UPLOAD_ERROR.UPLOAD_STOPPED:case SWFUpload.UPLOAD_ERROR.FILE_CANCELLED:jQuery("#media-item-"+b.id).remove();break;default:wpFileError(b,swfuploadL10n.default_error)}}function cancelUpload(){swfu.cancelQueue()}var storeState;(function(a){storeState=function(){var c=getUserSetting("align")||"",b=getUserSetting("imgsize")||"";a('tr.align input[type="radio"]').click(function(){setUserSetting("align",a(this).val())}).filter(function(){if(a(this).val()==c){return true}return false}).attr("checked","checked");a('tr.image-size input[type="radio"]').click(function(){setUserSetting("imgsize",a(this).val())}).filter(function(){if(a(this).attr("disabled")||a(this).val()!=b){return false}return true}).attr("checked","checked");a("tr.url button").click(function(){var d=this.className||"";d=d.replace(/.*?(url[^ '"]+).*/,"$1");if(d){setUserSetting("urlbutton",d)}a(this).siblings(".urlfield").val(a(this).attr("title"))});a("tr.url .urlfield").each(function(){var d=getUserSetting("urlbutton");a(this).val(a(this).siblings("button."+d).attr("title"))})}})(jQuery);
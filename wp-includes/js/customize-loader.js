if(typeof wp==="undefined"){var wp={}}(function(a,c){var b=wp.customize,d;d={initialize:function(){this.body=c(document.body).addClass("customize-support");this.element=c('<div id="customize-container" class="wp-full-overlay" />').appendTo(this.body);c("#wpbody").on("click",".load-customize",function(e){e.preventDefault();d.open(c(this).attr("href"))})},open:function(e){this.iframe=c("<iframe />",{src:e}).appendTo(this.element);this.messenger=new b.Messenger(e,this.iframe[0].contentWindow);this.messenger.bind("ready",function(){d.messenger.send("back",wpCustomizeLoaderL10n.back)});this.messenger.bind("close",function(){d.close()});this.element.fadeIn(200,function(){d.body.addClass("customize-active full-overlay-active")})},close:function(){this.element.fadeOut(200,function(){d.iframe.remove();d.iframe=null;d.messenger=null;d.body.removeClass("customize-active full-overlay-active")})}};c(function(){if(!!window.postMessage){d.initialize()}});b.Loader=d})(wp,jQuery);
;(function($){window.console=window.console||(function(){var c={};c.log=c.warn=c.debug=c.info=c.error=c.time=c.dir=c.profile=c.clear=c.exception=c.trace=c.assert=function(){};return c;})();$.fn.extend($.easing,{def:"easeInOutExpo",easeInOutExpo:function(e,f,a,h,g){if(f===0){return a;}if(f===g){return a+h;}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a;}return h/2*(-Math.pow(2,-10*--f)+2)+a;}});$(document).keydown(function(e){var keycode=e.keyCode;var $current_gridder=$(".currentGridder");var $current_target=$current_gridder.find(".wpsm-gridder-show");if($current_gridder.length){if(keycode===37){$current_target.prev().prev().trigger("click");e.preventDefault();}
if(keycode===39){$current_target.next().trigger("click");e.preventDefault();}}else{}});$.fn.gridderExpander=function(options){var settings=$.extend({},$.fn.gridderExpander.defaults,options);return this.each(function(){var mybloc;var _this=$(this);var visible=false;settings.onStart(_this);function closeExpander(base){if(settings.scroll){$("html, body").animate({scrollTop:base.find(".selectedItem").offset().top-settings.scrollOffset},{duration:200,easing:settings.animationEasing});}
_this.removeClass("hasSelectedItem");visible=false;base.find(".selectedItem").removeClass("selectedItem");base.find(".wpsm-gridder-show").slideUp(settings.animationSpeed,settings.animationEasing,function(){base.find(".wpsm-gridder-show").remove();settings.onClosed(base);});$(".currentGridder").removeClass("currentGridder");}
function openExpander(myself){$(".currentGridder").removeClass("currentGridder");_this.addClass("currentGridder");if(!myself.hasClass("selectedItem")){_this.find(".selectedItem").removeClass("selectedItem");myself.addClass("selectedItem");}else{closeExpander(_this,settings);return;}
_this.find(".wpsm-gridder-show").remove();if(!_this.hasClass("hasSelectedItem")){_this.addClass("hasSelectedItem");}
var $htmlcontent=$("<div class=\"wpsm-gridder-show loading\"></div>");mybloc=$htmlcontent.insertAfter(myself);var thecontent="";if(myself.data("griddercontent").indexOf("#")===0){thecontent=$(myself.data("griddercontent")).html();processContent(myself,thecontent);}else{$.ajax({type:"GET",url:myself.data("griddercontent"),success:function(data){thecontent=data;processContent(myself,thecontent);},error:function(request){thecontent=request.responseText;processContent(myself,thecontent);}});}}
function processContent(myself,thecontent){var htmlcontent="<div class=\"wpsm-gridder-padding\">";if(settings.showNav){var prevItem=($(".selectedItem").prev());var nextItem=($(".selectedItem").next().next());htmlcontent+="<div class=\"wpsm-gridder-navigation\">";htmlcontent+="<a href=\"#\" class=\"gridder-nav prev "+(!prevItem.length?"disabled":"")+"\">"+settings.prevText+"</a>";htmlcontent+="<a href=\"#\" class=\"gridder-nav next "+(!nextItem.length?"disabled":"")+"\">"+settings.nextText+"</a>";htmlcontent+="<a href=\"#\" class=\"gridder-close\">"+settings.closeText+"</a>";htmlcontent+="</div>";}
htmlcontent+="<div class=\"wpsm-expanded-content\">";htmlcontent+=thecontent;htmlcontent+="</div>";htmlcontent+="</div>";if(!visible){mybloc.hide().append(htmlcontent).slideDown(settings.animationSpeed,settings.animationEasing,function(){visible=true;if($.isFunction(settings.onContent)){settings.onContent(mybloc);}});}else{mybloc.html(htmlcontent);mybloc.find(".wpsm-gridder-padding").fadeIn(settings.animationSpeed,settings.animationEasing,function(){visible=true;if($.isFunction(settings.onContent)){settings.onContent(mybloc);}});}
if(settings.scroll){var offset=(settings.scrollTo==="panel"?myself.offset().top+myself.height()-settings.scrollOffset:myself.offset().top-settings.scrollOffset);$("html, body").animate({scrollTop:offset},{duration:settings.animationSpeed,easing:settings.animationEasing});}
mybloc.removeClass("loading");}
_this.on("click",".gridder-list",function(e){e.preventDefault();var myself=$(this);openExpander(myself);});_this.on("click",".gridder-nav.next",function(e){e.preventDefault();$(this).parents(".wpsm-gridder-show").next().trigger("click");});_this.on("click",".gridder-nav.prev",function(e){e.preventDefault();$(this).parents(".wpsm-gridder-show").prev().prev().trigger("click");});_this.on("click",".gridder-close",function(e){e.preventDefault();closeExpander(_this);});});};$.fn.gridderExpander.defaults={scroll:true,scrollOffset:30,scrollTo:"panel",animationSpeed:400,animationEasing:"easeInOutExpo",showNav:true,nextText:"Next",prevText:"Previous",closeText:"Close",onStart:function(){},onContent:function(){},onClosed:function(){}};$('.gridder a').click(function(e){event.stopPropagation();});})(jQuery);
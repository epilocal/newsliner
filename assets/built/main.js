!function(a){"use strict";a.fn.fitVids=function(t){var e,i,o={customSelector:null,ignore:null};return document.getElementById("fit-vids-style")||(e=document.head||document.getElementsByTagName("head")[0],(i=document.createElement("div")).innerHTML='<p>x</p><style id="fit-vids-style">.fluid-width-video-container{flex-grow: 1;width:100%;}.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>',e.appendChild(i.childNodes[1])),t&&a.extend(o,t),this.each(function(){var t=['iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="kickstarter.com"][src*="video.html"]',"object","embed"];o.customSelector&&t.push(o.customSelector);var r=".fitvidsignore";o.ignore&&(r=r+", "+o.ignore);t=a(this).find(t.join(","));(t=(t=t.not("object object")).not(r)).each(function(){var t,e,i=a(this);0<i.parents(r).length||"embed"===this.tagName.toLowerCase()&&i.parent("object").length||i.parent(".fluid-width-video-wrapper").length||(i.css("height")||i.css("width")||!isNaN(i.attr("height"))&&!isNaN(i.attr("width"))||(i.attr("height",9),i.attr("width",16)),t=("object"===this.tagName.toLowerCase()||i.attr("height")&&!isNaN(parseInt(i.attr("height"),10))?parseInt(i.attr("height"),10):i.height())/(isNaN(parseInt(i.attr("width"),10))?i.width():parseInt(i.attr("width"),10)),i.attr("name")||(e="fitvid"+a.fn.fitVids._count,i.attr("name",e),a.fn.fitVids._count++),i.wrap('<div class="fluid-width-video-container"><div class="fluid-width-video-wrapper"></div></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*t+"%"),i.removeAttr("height").removeAttr("width"))})})},a.fn.fitVids._count=0}(window.jQuery||window.Zepto),function(t){t.addEventListener("DOMContentLoaded",function(){t.querySelectorAll(".kg-gallery-image img").forEach(function(t){var e=t.closest(".kg-gallery-image"),t=t.attributes.width.value/t.attributes.height.value;e.style.flex=t+" 1 0%"})})}((window,document)),function(n,d){n.Casper||(n.Casper={}),n.Casper.stickyNavTitle=function(t){var e=d.querySelector(t.navSelector),i=d.querySelector(t.titleSelector),r=n.scrollY,o=!1;function a(){i.getBoundingClientRect().top+n.scrollY+(i.offsetHeight+35)<=r?e.classList.add(t.activeClass):e.classList.remove(t.activeClass),o=!1}n.addEventListener("scroll",function(){r=n.scrollY,o||requestAnimationFrame(a),o=!0},{passive:!0}),a()}}(window,document);
//# sourceMappingURL=main.js.map
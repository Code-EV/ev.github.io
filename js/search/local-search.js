$(function(){let t=!1;$("a.social-icon.search").on("click",function(){var s;$("body").css({width:"100%",overflow:"hidden"}),$(".search-dialog").css("display","block"),$("#local-search-input input").focus(),$(".search-mask").fadeIn(),t||(s=GLOBAL_CONFIG.localSearch.path,$.ajax({url:GLOBAL_CONFIG.root+s,dataType:"xml",success:function(t){const e=$("entry",t).map(function(){return{title:$("title",this).text(),content:$("content",this).text(),url:$("url",this).text()}}).get(),s=$("#local-search-input input")[0],a=$("#local-hits")[0];s.addEventListener("input",function(){let t='<div class="search-result-list">';const s=this.value.trim().toLowerCase().split(/[\s]+/);if(a.innerHTML="",this.value.trim().length<=0)return void $(".local-search-stats__hr").hide();let c=0;e.forEach(function(e){let a=!0;e.title&&""!==e.title.trim()||(e.title="Untitled");let n=e.title.trim().toLowerCase();const i=e.content.trim().replace(/<[^>]+>/g,"").toLowerCase(),o=e.url;let l=-1,r=-1,h=-1;if(""!==n||""!==i?s.forEach(function(t,e){l=n.indexOf(t),r=i.indexOf(t),l<0&&r<0?a=!1:(r<0&&(r=0),0===e&&(h=r))}):a=!1,a){const a=e.content.trim().replace(/<[^>]+>/g,"");if(h>=0){let e=h-30,l=h+100;e<0&&(e=0),0===e&&(l=100),l>a.length&&(l=a.length);let r=a.substring(e,l);s.forEach(function(t){const e=new RegExp(t,"gi");r=r.replace(e,'<span class="search-keyword">'+t+"</span>"),n=n.replace(e,'<span class="search-keyword">'+t+"</span>")}),t+='<div class="local-search__hit-item"><a href="'+o+'" class="search-result-title">'+n+"</a>",c+=1,$(".local-search-stats__hr").show(),""!==i&&(t+='<p class="search-result">'+r+"...</p>")}t+="</div>"}}),0===c&&(t+='<div id="local-search__hits-empty">'+GLOBAL_CONFIG.localSearch.languages.hits_empty.replace(/\$\{query}/,this.value.trim())+"</div>"),t+="</div>",a.innerHTML=t})}}),t=!0),document.addEventListener("keydown",function t(s){"Escape"===s.code&&(e(),document.removeEventListener("keydown",t))})});const e=function(){$("body").css("width",""),$("body").css("overflow",""),$(".search-dialog").css({animation:"search_close .5s"}),$(".search-dialog").animate({},function(){setTimeout(function(){$(".search-dialog").css({animation:"",display:"none"})},500)}),$(".search-mask").fadeOut()};$(".search-mask, .search-close-button").on("click touchstart",e)});
var tns=function(){var t=window,qi=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.msRequestAnimationFrame||function(t){return setTimeout(t,16)},e=window,ji=e.cancelAnimationFrame||e.mozCancelAnimationFrame||function(t){clearTimeout(t)};function Fi(){for(var t,e,n,i=arguments[0]||{},a=1,r=arguments.length;a<r;a++)if(null!==(t=arguments[a]))for(e in t)i!==(n=t[e])&&void 0!==n&&(i[e]=n);return i}function Qi(t){return 0<=["true","false"].indexOf(t)?JSON.parse(t):t}function Vi(t,e,n,i){if(i)try{t.setItem(e,n)}catch(t){}return n}function Xi(){var t=document,e=t.body;return e||((e=t.createElement("body")).fake=!0),e}var n=document.documentElement;function Yi(t){var e="";return t.fake&&(e=n.style.overflow,t.style.background="",t.style.overflow=n.style.overflow="hidden",n.appendChild(t)),e}function Ki(t,e){t.fake&&(t.remove(),n.style.overflow=e,n.offsetHeight)}function Ui(t,e,n,i){"insertRule"in t?t.insertRule(e+"{"+n+"}",i):t.addRule(e,n,i)}function Gi(t){return("insertRule"in t?t.cssRules:t.rules).length}function Ji(t,e,n){for(var i=0,a=t.length;i<a;i++)e.call(n,t[i],i)}var i="classList"in document.createElement("_"),_i=i?function(t,e){return t.classList.contains(e)}:function(t,e){return 0<=t.className.indexOf(e)},Zi=i?function(t,e){_i(t,e)||t.classList.add(e)}:function(t,e){_i(t,e)||(t.className+=" "+e)},$i=i?function(t,e){_i(t,e)&&t.classList.remove(e)}:function(t,e){_i(t,e)&&(t.className=t.className.replace(e,""))};function ta(t,e){return t.hasAttribute(e)}function ea(t,e){return t.getAttribute(e)}function r(t){return void 0!==t.item}function na(t,e){if(t=r(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(e))for(var n=t.length;n--;)for(var i in e)t[n].setAttribute(i,e[i])}function ia(t,e){t=r(t)||t instanceof Array?t:[t];for(var n=(e=e instanceof Array?e:[e]).length,i=t.length;i--;)for(var a=n;a--;)t[i].removeAttribute(e[a])}function aa(t){for(var e=[],n=0,i=t.length;n<i;n++)e.push(t[n]);return e}function ra(t,e){"none"!==t.style.display&&(t.style.display="none")}function oa(t,e){"none"===t.style.display&&(t.style.display="")}function ua(t){return"none"!==window.getComputedStyle(t).display}function sa(e){if("string"==typeof e){var n=[e],i=e.charAt(0).toUpperCase()+e.substr(1);["Webkit","Moz","ms","O"].forEach(function(t){"ms"===t&&"transform"!==e||n.push(t+i)}),e=n}for(var t=document.createElement("fakeelement"),a=(e.length,0);a<e.length;a++){var r=e[a];if(void 0!==t.style[r])return r}return!1}function la(t,e){var n=!1;return/^Webkit/.test(t)?n="webkit"+e+"End":/^O/.test(t)?n="o"+e+"End":t&&(n=e.toLowerCase()+"end"),n}function ca(t,e){for(var n in e)t.addEventListener(n,e[n],!1)}var a=!1;try{var o=Object.defineProperty({},"passive",{get:function(){a=!0}});window.addEventListener("test",null,o)}catch(t){}var u=!!a&&{passive:!0};function fa(t,e){for(var n in e){var i=0<=["touchstart","touchmove"].indexOf(n)&&u;t.removeEventListener(n,e[n],i)}}function da(){return{topics:{},on:function(t,e){this.topics[t]=this.topics[t]||[],this.topics[t].push(e)},off:function(t,e){if(this.topics[t])for(var n=0;n<this.topics[t].length;n++)if(this.topics[t][n]===e){this.topics[t].splice(n,1);break}},emit:function(e,n){n.type=e,this.topics[e]&&this.topics[e].forEach(function(t){t(n,e)})}}}Object.keys||(Object.keys=function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}),"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)});var va=function(h){h=Fi({container:".slider",mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,autoWidth:!1,viewportMax:!1,slideBy:1,center:!1,controls:!0,controlsPosition:"top",controlsText:["prev","next"],controlsContainer:!1,prevButton:!1,nextButton:!1,nav:!0,navPosition:"top",navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayPosition:"top",autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,lazyloadSelector:".tns-lazy-img",touch:!0,mouseDrag:!1,swipeAngle:15,nested:!1,preventActionWhenRunning:!1,preventScrollOnTouch:"auto",freezable:!0,onInit:!1,useLocalStorage:!0},h||{});var S=document,m=window,a=13,r=32,o=33,u=34,s=35,l=36,c=37,e=38,f=39,n=40,i={},d=h.useLocalStorage;if(d){var t=navigator.userAgent,v=new Date;try{(i=m.localStorage)?(i.setItem(v,v),d=i.getItem(v)==v,i.removeItem(v)):d=!1,d||(i={})}catch(t){d=!1}d&&(i.tnsApp&&i.tnsApp!==t&&["tC","tPL","tMQ","tTf","t3D","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach(function(t){i.removeItem(t)}),localStorage.tnsApp=t)}var p,y,g,x,b,w,C,M=i.tC?Qi(i.tC):Vi(i,"tC",function(){var t=document,e=Xi(),n=Yi(e),i=t.createElement("div"),a=!1;e.appendChild(i);try{for(var r,o="(10px * 10)",u=["calc"+o,"-moz-calc"+o,"-webkit-calc"+o],s=0;s<3;s++)if(r=u[s],i.style.width=r,100===i.offsetWidth){a=r.replace(o,"");break}}catch(t){}return e.fake?Ki(e,n):i.remove(),a}(),d),A=i.tPL?Qi(i.tPL):Vi(i,"tPL",function(){var t,e=document,n=Xi(),i=Yi(n),a=e.createElement("div"),r=e.createElement("div"),o="";a.className="tns-t-subp2",r.className="tns-t-ct";for(var u=0;u<70;u++)o+="<div></div>";return r.innerHTML=o,a.appendChild(r),n.appendChild(a),t=Math.abs(a.getBoundingClientRect().left-r.children[67].getBoundingClientRect().left)<2,n.fake?Ki(n,i):a.remove(),t}(),d),D=i.tMQ?Qi(i.tMQ):Vi(i,"tMQ",(y=document,g=Xi(),x=Yi(g),b=y.createElement("div"),w=y.createElement("style"),C="@media all and (min-width:1px){.tns-mq-test{position:absolute}}",w.type="text/css",b.className="tns-mq-test",g.appendChild(w),g.appendChild(b),w.styleSheet?w.styleSheet.cssText=C:w.appendChild(y.createTextNode(C)),p=window.getComputedStyle?window.getComputedStyle(b).position:b.currentStyle.position,g.fake?Ki(g,x):b.remove(),"absolute"===p),d),T=i.tTf?Qi(i.tTf):Vi(i,"tTf",sa("transform"),d),E=i.t3D?Qi(i.t3D):Vi(i,"t3D",function(t){if(!t)return!1;if(!window.getComputedStyle)return!1;var e,n=document,i=Xi(),a=Yi(i),r=n.createElement("p"),o=9<t.length?"-"+t.slice(0,-9).toLowerCase()+"-":"";return o+="transform",i.insertBefore(r,null),r.style[t]="translate3d(1px,1px,1px)",e=window.getComputedStyle(r).getPropertyValue(o),i.fake?Ki(i,a):r.remove(),void 0!==e&&0<e.length&&"none"!==e}(T),d),B=i.tTDu?Qi(i.tTDu):Vi(i,"tTDu",sa("transitionDuration"),d),k=i.tTDe?Qi(i.tTDe):Vi(i,"tTDe",sa("transitionDelay"),d),L=i.tADu?Qi(i.tADu):Vi(i,"tADu",sa("animationDuration"),d),N=i.tADe?Qi(i.tADe):Vi(i,"tADe",sa("animationDelay"),d),I=i.tTE?Qi(i.tTE):Vi(i,"tTE",la(B,"Transition"),d),O=i.tAE?Qi(i.tAE):Vi(i,"tAE",la(L,"Animation"),d),H=m.console&&"function"==typeof m.console.warn,P=["container","controlsContainer","prevButton","nextButton","navContainer","autoplayButton"],R={};if(P.forEach(function(t){if("string"==typeof h[t]){var e=h[t],n=S.querySelector(e);if(R[t]=e,!n||!n.nodeName)return void(H&&console.warn("Can't find",h[t]));h[t]=n}}),!(h.container.children.length<1)){var W=h.responsive,z=h.nested,q="carousel"===h.mode;if(W){0 in W&&(h=Fi(h,W[0]),delete W[0]);var j={};for(var F in W){var Q=W[F];Q="number"==typeof Q?{items:Q}:Q,j[F]=Q}W=j,j=null}if(q||function t(e){for(var n in e)q||("slideBy"===n&&(e[n]="page"),"edgePadding"===n&&(e[n]=!1),"autoHeight"===n&&(e[n]=!1)),"responsive"===n&&t(e[n])}(h),!q){h.axis="horizontal",h.slideBy="page",h.edgePadding=!1;var V=h.animateIn,X=h.animateOut,Y=h.animateDelay,K=h.animateNormal}var U,G="horizontal"===h.axis,J=S.createElement("div"),_=S.createElement("div"),Z=h.container,$=Z.parentNode,tt=Z.outerHTML,et=Z.children,nt=et.length,it=yn(),at=!1;W&&Rn();var rt,ot,ut,st,lt,ct,ft,dt,vt=h.autoWidth,pt=wn("fixedWidth"),ht=wn("edgePadding"),mt=wn("gutter"),yt=xn(),gt=wn("center"),xt=vt?1:Math.floor(wn("items")),bt=wn("slideBy"),wt=h.viewportMax||h.fixedWidthViewportWidth,Ct=wn("arrowKeys"),Mt=wn("speed"),At=h.rewind,Tt=!At&&h.loop,Et=wn("autoHeight"),Bt=wn("controls"),kt=wn("controlsText"),Lt=wn("nav"),Nt=wn("touch"),St=wn("mouseDrag"),Dt=wn("autoplay"),It=wn("autoplayTimeout"),Ot=wn("autoplayText"),Ht=wn("autoplayHoverPause"),Pt=wn("autoplayResetOnVisibility"),Rt=(dt=document.createElement("style"),ft&&dt.setAttribute("media",ft),document.querySelector("head").appendChild(dt),dt.sheet?dt.sheet:dt.styleSheet),Wt=h.lazyload,zt=(h.lazyloadSelector,[]),qt=Tt?(lt=function(){{if(vt||pt&&!wt)return nt-1;var t=pt?"fixedWidth":"items",e=[];if((pt||h[t]<nt)&&e.push(h[t]),W)for(var n in W){var i=W[n][t];i&&(pt||i<nt)&&e.push(i)}return e.length||e.push(0),Math.ceil(pt?wt/Math.min.apply(null,e):Math.max.apply(null,e))}}(),ct=q?Math.ceil((5*lt-nt)/2):4*lt-nt,ct=Math.max(lt,ct),bn("edgePadding")?ct+1:ct):0,jt=q?nt+2*qt:nt+qt,Ft=!(!pt&&!vt||Tt),Qt=pt?fi():null,Vt=!q||!Tt,Xt=G?"left":"top",Yt="",Kt="",Ut=pt?function(){return gt&&!Tt?nt-1:Math.ceil(-Qt/(pt+mt))}:vt?function(){for(var t=jt;t--;)if(rt[t]>-Qt)return t}:function(){return gt&&q&&!Tt?nt-1:Tt||q?Math.max(0,jt-Math.ceil(xt)):jt-1},Gt=pn(wn("startIndex")),Jt=Gt,_t=(vn(),0),Zt=vt?null:Ut(),$t=h.preventActionWhenRunning,te=h.swipeAngle,ee=!te||"?",ne=!1,ie=h.onInit,ae=new da,re=" tns-slider tns-"+h.mode,oe=Z.id||(st=window.tnsId,window.tnsId=st?st+1:1,"tns"+window.tnsId),ue=wn("disable"),se=!1,le=h.freezable,ce=!(!le||vt)&&Pn(),fe=!1,de={click:bi,keydown:function(t){switch((t=ki(t)).keyCode){case c:case e:case o:Ie.disabled||bi(t,-1);break;case f:case n:case u:Oe.disabled||bi(t,1);break;case l:xi("first",t);break;case s:xi("last",t)}}},ve={click:function(t){if(ne){if($t)return;gi()}var e=Li(t=ki(t));for(;e!==We&&!ta(e,"data-nav");)e=e.parentNode;if(ta(e,"data-nav")){var n=Fe=Number(ea(e,"data-nav")),i=we?n:Math.min(Math.ceil(n*nt/qe),nt-1);xi(i,t),Qe===n&&(Ge&&Ti(),Fe=-1)}},keydown:function(t){t=ki(t);var e=S.activeElement;if(!ta(e,"data-nav"))return;var n=t.keyCode,i=Number(ea(e,"data-nav"));switch(n){case c:case o:0<i&&Bi(Re[i-1]);break;case l:0<i&&Bi(Re[0]);break;case f:case u:i<qe-1&&Bi(Re[i+1]);break;case s:i<qe-1&&Bi(Re[qe-1]);break;case a:case r:xi(Fe=i,t)}}},pe={mouseover:function(){Ge&&(Ci(),Je=!0)},mouseout:function(){Je&&(wi(),Je=!1)}},he={visibilitychange:function(){S.hidden?Ge&&(Ci(),Ze=!0):Ze&&(wi(),Ze=!1)}},me={keydown:function(t){switch((t=ki(t)).keyCode){case c:bi(t,-1);break;case f:bi(t,1)}}},ye={touchstart:Ii,touchmove:Oi,touchend:Hi,touchcancel:Hi},ge={mousedown:Ii,mousemove:Oi,mouseup:Hi,mouseleave:Hi},xe=bn("controls"),be=bn("nav"),we=!!vt||h.navAsThumbnails,Ce=bn("autoplay"),Me=bn("touch"),Ae=bn("mouseDrag"),Te="tns-slide-active",Ee="tns-complete",Be={load:function(t){Yn(Li(t))},error:function(t){Kn(Li(t))}},ke="force"===h.preventScrollOnTouch;if(xe)var Le,Ne,Se=h.controlsContainer,De=h.controlsContainer?h.controlsContainer.outerHTML:"",Ie=h.prevButton,Oe=h.nextButton,He=h.prevButton?h.prevButton.outerHTML:"",Pe=h.nextButton?h.nextButton.outerHTML:"";if(be)var Re,We=h.navContainer,ze=h.navContainer?h.navContainer.outerHTML:"",qe=vt?nt:Ri(),je=0,Fe=-1,Qe=mn(),Ve=Qe,Xe="tns-nav-active",Ye="Carousel Page ",Ke=" (Current Slide)";if(Ce)var Ue,Ge,Je,_e,Ze,$e="forward"===h.autoplayDirection?1:-1,tn=h.autoplayButton,en=h.autoplayButton?h.autoplayButton.outerHTML:"",nn=["<span class='tns-visually-hidden'>"," animation</span>"];if(Me||Ae)var an,rn,on={},un={},sn=!1,ln=G?function(t,e){return t.x-e.x}:function(t,e){return t.y-e.y};vt||dn(ue||ce),T&&(Xt=T,Yt="translate",E?(Yt+=G?"3d(":"3d(0px, ",Kt=G?", 0px, 0px)":", 0px)"):(Yt+=G?"X(":"Y(",Kt=")")),function(){W&&Rn();!function(){bn("gutter");J.className="tns-outer",_.className="tns-inner",J.id=oe+"-ow",_.id=oe+"-iw",Et&&(_.className+=" tns-ah");""===Z.id&&(Z.id=oe);re+=A||vt?" tns-subpixel":" tns-no-subpixel",re+=M?" tns-calc":" tns-no-calc",vt&&(re+=" tns-autowidth");if(re+=" tns-"+h.axis,Z.className+=re,q){var t=S.createElement("div");t.className="tns-ovh",J.appendChild(t),t.appendChild(_)}else J.appendChild(_);$.insertBefore(J,Z),_.appendChild(Z)}();for(var t=0;t<nt;t++){var e=et[t];e.id||(e.id=oe+"-item"+t),Zi(e,"tns-item"),!q&&K&&Zi(e,K),na(e,{"aria-hidden":"true",tabindex:"-1"})}if(qt){for(var n=S.createDocumentFragment(),i=S.createDocumentFragment(),a=qt;a--;){var r=a%nt,o=et[r].cloneNode(!0);if(ia(o,"id"),i.insertBefore(o,i.firstChild),q){var u=et[nt-1-r].cloneNode(!0);ia(u,"id"),n.appendChild(u)}}Z.insertBefore(n,Z.firstChild),Z.appendChild(i),et=Z.children}(function(){if(!q)for(var t=Gt,e=Gt+Math.min(nt,xt);t<e;t++){var n=et[t];n.style.left=100*(t-Gt)/xt+"%",Zi(n,V),$i(n,K)}G&&(A||vt?(Ui(Rt,"#"+oe+" > .tns-item","font-size:"+m.getComputedStyle(et[0]).fontSize+";",Gi(Rt)),Ui(Rt,"#"+oe,"font-size:0;",Gi(Rt))):q&&Ji(et,function(t,e){var n;t.style.marginLeft=(n=e,M?M+"("+100*n+"% / "+jt+")":100*n/jt+"%")}));if(D){var i=Cn(h.edgePadding,h.gutter,h.fixedWidth,h.speed,h.autoHeight);Ui(Rt,"#"+oe+"-iw",i,Gi(Rt)),q&&(i=G&&!vt?"width:"+Mn(h.fixedWidth,h.gutter,h.items)+";":"",B&&(i+=Bn(Mt)),Ui(Rt,"#"+oe,i,Gi(Rt))),i=G&&!vt?An(h.fixedWidth,h.gutter,h.items):"",h.gutter&&(i+=Tn(h.gutter)),q||(B&&(i+=Bn(Mt)),L&&(i+=kn(Mt))),i&&Ui(Rt,"#"+oe+" > .tns-item",i,Gi(Rt))}else{_.style.cssText=Cn(ht,mt,pt,Et),q&&G&&!vt&&(Z.style.width=Mn(pt,mt,xt));var i=G&&!vt?An(pt,mt,xt):"";mt&&(i+=Tn(mt)),i&&Ui(Rt,"#"+oe+" > .tns-item",i,Gi(Rt))}if(W&&D)for(var a in W){a=parseInt(a);var r=W[a],i="",o="",u="",s="",l=vt?null:wn("items",a),c=wn("fixedWidth",a),f=wn("speed",a),d=wn("edgePadding",a),v=wn("autoHeight",a),p=wn("gutter",a);("edgePadding"in r||"gutter"in r)&&(o="#"+oe+"-iw{"+Cn(d,p,c,f,v)+"}"),q&&G&&!vt&&("fixedWidth"in r||"items"in r||pt&&"gutter"in r)&&(u="width:"+Mn(c,p,l)+";"),B&&"speed"in r&&(u+=Bn(f)),u&&(u="#"+oe+"{"+u+"}"),("fixedWidth"in r||pt&&"gutter"in r||!q&&"items"in r)&&(s+=An(c,p,l)),"gutter"in r&&(s+=Tn(p)),!q&&"speed"in r&&(B&&(s+=Bn(f)),L&&(s+=kn(f))),s&&(s="#"+oe+" > .tns-item{"+s+"}"),(i=o+u+s)&&Rt.insertRule("@media (min-width: "+a/16+"em) {"+i+"}",Rt.cssRules.length)}})(),Ln()}();var cn=Tt?q?function(){var t=_t,e=Zt;t+=bt,e-=bt,ht?(t+=1,e-=1):pt&&(yt+mt)%(pt+mt)&&(e-=1),qt&&(e<Gt?Gt-=nt:Gt<t&&(Gt+=nt))}:function(){if(Zt<Gt)for(;_t+nt<=Gt;)Gt-=nt;else if(Gt<_t)for(;Gt<=Zt-nt;)Gt+=nt}:function(){Gt=Math.max(_t,Math.min(Zt,Gt))},fn=q?function(){var e,n,i,a,t,r,o,u,s,l,c;li(Z,""),B||!Mt?(pi(),Mt&&ua(Z)||gi()):(e=Z,n=Xt,i=Yt,a=Kt,t=di(),r=Mt,o=gi,u=Math.min(r,10),s=0<=t.indexOf("%")?"%":"px",t=t.replace(s,""),l=Number(e.style[n].replace(i,"").replace(a,"").replace(s,"")),c=(t-l)/r*u,setTimeout(function t(){r-=u,l+=c,e.style[n]=i+l+s+a,0<r?setTimeout(t,u):o()},u)),G||Pi()}:function(){zt=[];var t={};t[I]=t[O]=gi,fa(et[Jt],t),ca(et[Gt],t),hi(Jt,V,X,!0),hi(Gt,K,V),I&&O&&Mt&&ua(Z)||gi()};return{version:"2.8.8",getInfo:zi,events:ae,goTo:xi,play:function(){Dt&&!Ge&&(Ai(),_e=!1)},pause:function(){Ge&&(Ti(),_e=!0)},isOn:at,updateSliderHeight:ei,refresh:Ln,destroy:function(){if(Rt.disabled=!0,Rt.ownerNode&&Rt.ownerNode.remove(),fa(m,{resize:On}),Ct&&fa(S,me),Se&&fa(Se,de),We&&fa(We,ve),fa(Z,pe),fa(Z,he),tn&&fa(tn,{click:Ei}),Dt&&clearInterval(Ue),q&&I){var t={};t[I]=gi,fa(Z,t)}Nt&&fa(Z,ye),St&&fa(Z,ge);var r=[tt,De,He,Pe,ze,en];for(var e in P.forEach(function(t,e){var n="container"===t?J:h[t];if("object"==typeof n){var i=!!n.previousElementSibling&&n.previousElementSibling,a=n.parentNode;n.outerHTML=r[e],h[t]=i?i.nextElementSibling:a.firstElementChild}}),P=V=X=Y=K=G=J=_=Z=$=tt=et=nt=U=it=vt=pt=ht=mt=yt=xt=bt=wt=Ct=Mt=At=Tt=Et=Rt=Wt=rt=zt=qt=jt=Ft=Qt=Vt=Xt=Yt=Kt=Ut=Gt=Jt=_t=Zt=te=ee=ne=ie=ae=re=oe=ue=se=le=ce=fe=de=ve=pe=he=me=ye=ge=xe=be=we=Ce=Me=Ae=Te=Ee=Be=ot=Bt=kt=Se=De=Ie=Oe=Le=Ne=Lt=We=ze=Re=qe=je=Fe=Qe=Ve=Xe=Ye=Ke=Dt=It=$e=Ot=Ht=tn=en=Pt=nn=Ue=Ge=Je=_e=Ze=on=un=an=sn=rn=ln=Nt=St=null,this)"rebuild"!==e&&(this[e]=null);at=!1},rebuild:function(){return va(Fi(h,R))}}}function dn(t){t&&(Bt=Lt=Nt=St=Ct=Dt=Ht=Pt=!1)}function vn(){for(var t=q?Gt-qt:Gt;t<0;)t+=nt;return t%nt+1}function pn(t){return t=t?Math.max(0,Math.min(Tt?nt-1:nt-xt,t)):0,q?t+qt:t}function hn(t){for(null==t&&(t=Gt),q&&(t-=qt);t<0;)t+=nt;return Math.floor(t%nt)}function mn(){var t=hn();return we?t:Math.ceil((t+1)*qe/nt-1)}function yn(){return m.innerWidth||S.documentElement.clientWidth||S.body.clientWidth}function gn(t){return"top"===t?"afterbegin":"beforeend"}function xn(){var t=ht?2*ht-mt:0;return function t(e){var n,i,a=S.createElement("div");return e.appendChild(a),i=(n=a.getBoundingClientRect()).right-n.left,a.remove(),i||t(e.parentNode)}($)-t}function bn(t){if(h[t])return!0;if(W)for(var e in W)if(W[e][t])return!0;return!1}function wn(t,e){if(null==e&&(e=it),"items"===t&&pt)return Math.floor((yt+mt)/(pt+mt))||1;var n=h[t];if(W)for(var i in W)e>=parseInt(i)&&t in W[i]&&(n=W[i][t]);return"slideBy"===t&&"page"===n&&(n=wn("items")),q||"slideBy"!==t&&"items"!==t||(n=Math.floor(n)),n}function Cn(t,e,n,i,a){var r="";if(void 0!==t){var o=t;e&&(o-=e),r=G?"margin: 0 "+o+"px 0 "+t+"px;":"margin: "+t+"px 0 "+o+"px 0;"}else if(e&&!n){var u="-"+e+"px";r="margin: 0 "+(G?u+" 0 0":"0 "+u+" 0")+";"}return a&&B&&i&&(r+=Bn(i)),r}function Mn(t,e,n){return t?(t+e)*jt+"px":M?M+"("+100*jt+"% / "+n+")":100*jt/n+"%"}function An(t,e,n){var i;if(t)i=t+e+"px";else{q||(n=Math.floor(n));var a=q?jt:n;i=M?M+"(100% / "+a+")":100/a+"%"}return i="width:"+i,"inner"!==z?i+";":i+" !important;"}function Tn(t){var e="";!1!==t&&(e=(G?"padding-":"margin-")+(G?"right":"bottom")+": "+t+"px;");return e}function En(t,e){var n=t.substring(0,t.length-e).toLowerCase();return n&&(n="-"+n+"-"),n}function Bn(t){return En(B,18)+"transition-duration:"+t/1e3+"s;"}function kn(t){return En(L,17)+"animation-duration:"+t/1e3+"s;"}function Ln(){if(bn("autoHeight")||vt||!G){var t=Z.querySelectorAll("img");Ji(t,function(t){var e=t.src;e.indexOf("data:image")<0?(ca(t,Be),t.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",t.src=e,Zi(t,"loading"),Gn(t)):Wt||Yn(t)}),qi(function(){Zn(aa(t),function(){ot=!0})}),!vt&&G&&(t=Jn(Gt,Math.min(Gt+xt-1,jt-1))),Wt?Nn():qi(function(){Zn(aa(t),Nn)})}else q&&vi(),Dn(),In()}function Nn(){if(vt){var e=Tt?Gt:nt-1;!function t(){et[e-1].getBoundingClientRect().right.toFixed(2)===et[e].getBoundingClientRect().left.toFixed(2)?Sn():setTimeout(function(){t()},16)}()}else Sn()}function Sn(){G&&!vt||(ni(),vt?(Qt=fi(),le&&(ce=Pn()),Zt=Ut(),dn(ue||ce)):Pi()),q&&vi(),Dn(),In()}function Dn(){if(ii(),J.insertAdjacentHTML("afterbegin",'<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">'+Qn()+"</span>  of "+nt+"</div>"),ut=J.querySelector(".tns-liveregion .current"),Ce){var t=Dt?"stop":"start";tn?na(tn,{"data-action":t}):h.autoplayButtonOutput&&(J.insertAdjacentHTML(gn(h.autoplayPosition),'<button data-action="'+t+'">'+nn[0]+t+nn[1]+Ot[0]+"</button>"),tn=J.querySelector("[data-action]")),tn&&ca(tn,{click:Ei}),Dt&&(Ai(),Ht&&ca(Z,pe),Pt&&ca(Z,he))}if(be){if(We)na(We,{"aria-label":"Carousel Pagination"}),Ji(Re=We.children,function(t,e){na(t,{"data-nav":e,tabindex:"-1","aria-label":Ye+(e+1),"aria-controls":oe})});else{for(var e="",n=we?"":'style="display:none"',i=0;i<nt;i++)e+='<button data-nav="'+i+'" tabindex="-1" aria-controls="'+oe+'" '+n+' aria-label="'+Ye+(i+1)+'"></button>';e='<div class="tns-nav" aria-label="Carousel Pagination">'+e+"</div>",J.insertAdjacentHTML(gn(h.navPosition),e),We=J.querySelector(".tns-nav"),Re=We.children}if(Wi(),B){var a=B.substring(0,B.length-18).toLowerCase(),r="transition: all "+Mt/1e3+"s";a&&(r="-"+a+"-"+r),Ui(Rt,"[aria-controls^="+oe+"-item]",r,Gi(Rt))}na(Re[Qe],{"aria-label":Ye+(Qe+1)+Ke}),ia(Re[Qe],"tabindex"),Zi(Re[Qe],Xe),ca(We,ve)}xe&&(Se||Ie&&Oe||(J.insertAdjacentHTML(gn(h.controlsPosition),'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="'+oe+'">'+kt[0]+'</button><button data-controls="next" tabindex="-1" aria-controls="'+oe+'">'+kt[1]+"</button></div>"),Se=J.querySelector(".tns-controls")),Ie&&Oe||(Ie=Se.children[0],Oe=Se.children[1]),h.controlsContainer&&na(Se,{"aria-label":"Carousel Navigation",tabindex:"0"}),(h.controlsContainer||h.prevButton&&h.nextButton)&&na([Ie,Oe],{"aria-controls":oe,tabindex:"-1"}),(h.controlsContainer||h.prevButton&&h.nextButton)&&(na(Ie,{"data-controls":"prev"}),na(Oe,{"data-controls":"next"})),Le=ri(Ie),Ne=ri(Oe),si(),Se?ca(Se,de):(ca(Ie,de),ca(Oe,de))),Wn()}function In(){if(q&&I){var t={};t[I]=gi,ca(Z,t)}Nt&&ca(Z,ye),St&&ca(Z,ge),Ct&&ca(S,me),"inner"===z?ae.on("outerResized",function(){Hn(),ae.emit("innerLoaded",zi())}):(W||pt||vt||Et||!G)&&ca(m,{resize:On}),Et&&("outer"===z?ae.on("innerLoaded",_n):ue||_n()),Xn(),ue?jn():ce&&qn(),ae.on("indexChanged",$n),"inner"===z&&ae.emit("innerLoaded",zi()),"function"==typeof ie&&ie(zi()),at=!0}function On(t){qi(function(){Hn(ki(t))})}function Hn(t){if(at){"outer"===z&&ae.emit("outerResized",zi(t)),it=yn();var e,n=U,i=!1;W&&(Rn(),(e=n!==U)&&ae.emit("newBreakpointStart",zi(t)));var a,r,o,u,s=xt,l=ue,c=ce,f=Ct,d=Bt,v=Lt,p=Nt,h=St,m=Dt,y=Ht,g=Pt,x=Gt;if(e){var b=pt,w=Et,C=kt,M=gt,A=Ot;if(!D)var T=mt,E=ht}if(Ct=wn("arrowKeys"),Bt=wn("controls"),Lt=wn("nav"),Nt=wn("touch"),gt=wn("center"),St=wn("mouseDrag"),Dt=wn("autoplay"),Ht=wn("autoplayHoverPause"),Pt=wn("autoplayResetOnVisibility"),e&&(ue=wn("disable"),pt=wn("fixedWidth"),Mt=wn("speed"),Et=wn("autoHeight"),kt=wn("controlsText"),Ot=wn("autoplayText"),It=wn("autoplayTimeout"),D||(ht=wn("edgePadding"),mt=wn("gutter"))),dn(ue),yt=xn(),G&&!vt||ue||(ni(),G||(Pi(),i=!0)),(pt||vt)&&(Qt=fi(),Zt=Ut()),(e||pt)&&(xt=wn("items"),bt=wn("slideBy"),(r=xt!==s)&&(pt||vt||(Zt=Ut()),cn())),e&&ue!==l&&(ue?jn():function(){if(!se)return;if(Rt.disabled=!1,Z.className+=re,vi(),Tt)for(var t=qt;t--;)q&&oa(et[t]),oa(et[jt-t-1]);if(!q)for(var e=Gt,n=Gt+nt;e<n;e++){var i=et[e],a=e<Gt+xt?V:K;i.style.left=100*(e-Gt)/xt+"%",Zi(i,a)}zn(),se=!1}()),le&&(e||pt||vt)&&(ce=Pn())!==c&&(ce?(pi(di(pn(0))),qn()):(!function(){if(!fe)return;ht&&D&&(_.style.margin="");if(qt)for(var t="tns-transparent",e=qt;e--;)q&&$i(et[e],t),$i(et[jt-e-1],t);zn(),fe=!1}(),i=!0)),dn(ue||ce),Dt||(Ht=Pt=!1),Ct!==f&&(Ct?ca(S,me):fa(S,me)),Bt!==d&&(Bt?Se?oa(Se):(Ie&&oa(Ie),Oe&&oa(Oe)):Se?ra(Se):(Ie&&ra(Ie),Oe&&ra(Oe))),Lt!==v&&(Lt?oa(We):ra(We)),Nt!==p&&(Nt?ca(Z,ye):fa(Z,ye)),St!==h&&(St?ca(Z,ge):fa(Z,ge)),Dt!==m&&(Dt?(tn&&oa(tn),Ge||_e||Ai()):(tn&&ra(tn),Ge&&Ti())),Ht!==y&&(Ht?ca(Z,pe):fa(Z,pe)),Pt!==g&&(Pt?ca(S,he):fa(S,he)),e){if(pt===b&&gt===M||(i=!0),Et!==w&&(Et||(_.style.height="")),Bt&&kt!==C&&(Ie.innerHTML=kt[0],Oe.innerHTML=kt[1]),tn&&Ot!==A){var B=Dt?1:0,k=tn.innerHTML,L=k.length-A[B].length;k.substring(L)===A[B]&&(tn.innerHTML=k.substring(0,L)+Ot[B])}}else gt&&(pt||vt)&&(i=!0);if((r||pt&&!vt)&&(qe=Ri(),Wi()),(a=Gt!==x)?(ae.emit("indexChanged",zi()),i=!0):r?a||$n():(pt||vt)&&(Xn(),ii(),Fn()),!r&&q||function(){for(var t=Gt+Math.min(nt,xt),e=jt;e--;){var n=et[e];Gt<=e&&e<t?(Zi(n,"tns-moving"),n.style.left=100*(e-Gt)/xt+"%",Zi(n,V),$i(n,K)):n.style.left&&(n.style.left="",Zi(n,K),$i(n,V)),$i(n,X)}setTimeout(function(){Ji(et,function(t){$i(t,"tns-moving")})},300)}(),!ue&&!ce){if(e&&!D&&(ht===E&&mt===T||(_.style.cssText=Cn(ht,mt,pt,Mt,Et)),G)){q&&(Z.style.width=Mn(pt,mt,xt));var N=An(pt,mt,xt)+Tn(mt);u=Gi(o=Rt)-1,"deleteRule"in o?o.deleteRule(u):o.removeRule(u),Ui(Rt,"#"+oe+" > .tns-item",N,Gi(Rt))}Et&&_n(),i&&(vi(),Jt=Gt)}e&&ae.emit("newBreakpointEnd",zi(t))}}function Pn(){return pt||vt?(pt?(pt+mt)*nt:Tt?rt[nt]:ci())<=yt+2*ht:nt<=xt}function Rn(){for(var t in U=0,W)(t=parseInt(t))<=it&&(U=t)}function Wn(){!Dt&&tn&&ra(tn),!Lt&&We&&ra(We),Bt||(Se?ra(Se):(Ie&&ra(Ie),Oe&&ra(Oe)))}function zn(){Dt&&tn&&oa(tn),Lt&&We&&oa(We),Bt&&(Se?oa(Se):(Ie&&oa(Ie),Oe&&oa(Oe)))}function qn(){if(!fe){if(ht&&(_.style.margin="0px"),qt)for(var t="tns-transparent",e=qt;e--;)q&&Zi(et[e],t),Zi(et[jt-e-1],t);Wn(),fe=!0}}function jn(){if(!se){if(Rt.disabled=!0,Z.className=Z.className.replace(re.substring(1),""),ia(Z,["style"]),Tt)for(var t=qt;t--;)q&&ra(et[t]),ra(et[jt-t-1]);if(G&&q||ia(_,["style"]),!q)for(var e=Gt,n=Gt+nt;e<n;e++){var i=et[e];ia(i,["style"]),$i(i,V),$i(i,K)}Wn(),se=!0}}function Fn(){var t=Qn();ut.innerHTML!==t&&(ut.innerHTML=t)}function Qn(){var t=Vn(),e=t[0]+1,n=t[1]+1;return e===n?e+"":e+" to "+n}function Vn(t){null==t&&(t=di());var n,i,a,r=Gt;if(gt||ht?(vt||pt)&&(i=-(parseFloat(t.replace("px",""))+ht),a=i+yt+2*ht):vt&&(i=rt[Gt],a=i+yt),vt)rt.forEach(function(t,e){(gt||ht)&&t<=i+.5&&(r=e),.5<=a-t&&(n=e)});else{if(pt){var e=pt+mt;gt||ht?(r=Math.floor(i/e),n=Math.ceil(a/e-1)):n=r+Math.ceil(yt/e)-1}else if(gt||ht){var o=xt-1;if(gt?(r-=o/2,n=Gt+o/2):n=Gt+o,ht){var u=ht*xt/yt;r-=u,n+=u}r=Math.floor(r),n=Math.ceil(n)}else n=r+xt-1;r=Math.max(r,0),n=Math.min(n,jt-1)}return[r,n]}function Xn(){Wt&&!ue&&Jn.apply(null,Vn()).forEach(function(t){if(!_i(t,Ee)){var e={};e[I]=function(t){t.stopPropagation()},ca(t,e),ca(t,Be);var n=ea(t,"data-srcset");n&&(t.srcset=n),t.src=ea(t,"data-src"),Zi(t,"loading"),Gn(t)}})}function Yn(t){Zi(t,"loaded"),Un(t)}function Kn(t){Zi(t,"failed"),Un(t)}function Un(t){Zi(t,"tns-complete"),$i(t,"loading"),fa(t,Be)}function Gn(t){t.complete&&(0!==t.naturalWidth?Yn(t):Kn(t))}function Jn(t,e){for(var n=[];t<=e;)Ji(et[t].querySelectorAll("img"),function(t){n.push(t)}),t++;return n}function _n(){var t=Jn.apply(null,Vn());qi(function(){Zn(t,ei)})}function Zn(n,t){return ot?t():(n.forEach(function(t,e){_i(t,Ee)&&n.splice(e,1)}),n.length?void qi(function(){Zn(n,t)}):t())}function $n(){Xn(),ii(),Fn(),si(),function(){if(Lt&&(Qe=0<=Fe?Fe:mn(),Fe=-1,Qe!==Ve)){var t=Re[Ve],e=Re[Qe];na(t,{tabindex:"-1","aria-label":Ye+(Ve+1)}),$i(t,Xe),na(e,{"aria-label":Ye+(Qe+1)+Ke}),ia(e,"tabindex"),Zi(e,Xe),Ve=Qe}}()}function ti(t,e){for(var n=[],i=t,a=Math.min(t+e,jt);i<a;i++)n.push(et[i].offsetHeight);return Math.max.apply(null,n)}function ei(){var t=Et?ti(Gt,xt):ti(qt,nt);_.style.height!==t&&(_.style.height=t+"px")}function ni(){rt=[0];var n=G?"left":"top",i=et[0].getBoundingClientRect()[n];Ji(et,function(t,e){e&&rt.push(t.getBoundingClientRect()[n]-i)})}function ii(){var t=Vn(),n=t[0],i=t[1];Ji(et,function(t,e){n<=e&&e<=i?ta(t,"aria-hidden")&&(ia(t,["aria-hidden","tabindex"]),Zi(t,Te)):ta(t,"aria-hidden")||(na(t,{"aria-hidden":"true",tabindex:"-1"}),$i(t,Te))})}function ai(t){return t.nodeName.toLowerCase()}function ri(t){return"button"===ai(t)}function oi(t){return"true"===t.getAttribute("aria-disabled")}function ui(t,e,n){t?e.disabled=n:e.setAttribute("aria-disabled",n.toString())}function si(){if(Bt&&!At&&!Tt){var t=Le?Ie.disabled:oi(Ie),e=Ne?Oe.disabled:oi(Oe),n=Gt<=_t,i=!At&&Zt<=Gt;n&&!t&&ui(Le,Ie,!0),!n&&t&&ui(Le,Ie,!1),i&&!e&&ui(Ne,Oe,!0),!i&&e&&ui(Ne,Oe,!1)}}function li(t,e){B&&(t.style[B]=e)}function ci(){return pt?(pt+mt)*jt:rt[jt-1]+et[jt-1].getBoundingClientRect().width}function fi(){var t=yt+mt-ci();return gt&&!Tt&&(t=pt?t-(yt-pt)/2:t-(yt-(et[jt-1].clientWidth-mt))/2),0<t&&(t=0),t}function di(t){var e;(null==t&&(t=Gt),G&&!vt)?pt?(e=-(pt+mt)*t,gt&&(e+=(yt-pt)/2)):(gt&&(t-=(xt-1)/2),e=100*-t/(T?jt:xt)):(e=-rt[t],gt&&G&&(e+=(yt-(et[t].offsetWidth-mt))/2));return Ft&&(e=Math.max(e,Qt)),e+=!G||vt||pt?"px":"%"}function vi(t){li(Z,"0s"),pi(t)}function pi(t){null==t&&(t=di()),Z.style[Xt]=Yt+t+Kt}function hi(t,e,n,i){var a=t+xt;Tt||(a=Math.min(a,jt));for(var r=t;r<a;r++){var o=et[r];i||(o.style.left=100*(r-Gt)/xt+"%"),Y&&k&&(o.style[k]=o.style[N]=Y*(r-t)/1e3+"s"),$i(o,e),Zi(o,n),i&&zt.push(o)}}function mi(t,e){Vt&&cn(),(Gt!==Jt||e)&&(ae.emit("indexChanged",zi()),ae.emit("transitionStart",zi()),Et&&_n(),Ge&&t&&0<=["click","keydown"].indexOf(t.type)&&Ti(),ne=!0,fn())}function yi(t){return t.toLowerCase().replace(/-/g,"")}function gi(t){if(q||ne){if(ae.emit("transitionEnd",zi(t)),!q&&0<zt.length)for(var e=0;e<zt.length;e++){var n=zt[e];n.style.left="",N&&k&&(n.style[N]="",n.style[k]=""),$i(n,X),Zi(n,K)}if(!t||!q&&t.target.parentNode===Z||t.target===Z&&yi(t.propertyName)===yi(Xt)){if(!Vt){var i=Gt;cn(),Gt!==i&&(ae.emit("indexChanged",zi()),vi())}"inner"===z&&ae.emit("innerLoaded",zi()),ne=!1,Jt=Gt}}}function xi(t,e){if(!ce)if("prev"===t)bi(e,-1);else if("next"===t)bi(e,1);else{if(ne){if($t)return;gi()}var n=hn(),i=0;if("first"===t?i=-n:"last"===t?i=q?nt-xt-n:nt-1-n:("number"!=typeof t&&(t=parseInt(t)),isNaN(t)||(e||(t=Math.max(0,Math.min(nt-1,t))),i=t-n)),!q&&i&&Math.abs(i)<xt){var a=0<i?1:-1;i+=_t<=Gt+i-nt?nt*a:2*nt*a*-1}Gt+=i,q&&Tt&&(Gt<_t&&(Gt+=nt),Zt<Gt&&(Gt-=nt)),hn(Gt)!==hn(Jt)&&mi(e)}}function bi(t,e){if(ne){if($t)return;gi()}var n;if(!e){for(var i=Li(t=ki(t));i!==Se&&[Ie,Oe].indexOf(i)<0;)i=i.parentNode;var a=[Ie,Oe].indexOf(i);0<=a&&(n=!0,e=0===a?-1:1)}if(At){if(Gt===_t&&-1===e)return void xi("last",t);if(Gt===Zt&&1===e)return void xi("first",t)}e&&(Gt+=bt*e,vt&&(Gt=Math.floor(Gt)),mi(n||t&&"keydown"===t.type?t:null))}function wi(){Ue=setInterval(function(){bi(null,$e)},It),Ge=!0}function Ci(){clearInterval(Ue),Ge=!1}function Mi(t,e){na(tn,{"data-action":t}),tn.innerHTML=nn[0]+t+nn[1]+e}function Ai(){wi(),tn&&Mi("stop",Ot[1])}function Ti(){Ci(),tn&&Mi("start",Ot[0])}function Ei(){Ge?(Ti(),_e=!0):(Ai(),_e=!1)}function Bi(t){t.focus()}function ki(t){return Ni(t=t||m.event)?t.changedTouches[0]:t}function Li(t){return t.target||m.event.srcElement}function Ni(t){return 0<=t.type.indexOf("touch")}function Si(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function Di(){return a=un.y-on.y,r=un.x-on.x,t=Math.atan2(a,r)*(180/Math.PI),e=te,n=!1,i=Math.abs(90-Math.abs(t)),90-e<=i?n="horizontal":i<=e&&(n="vertical"),n===h.axis;var t,e,n,i,a,r}function Ii(t){if(ne){if($t)return;gi()}Dt&&Ge&&Ci(),sn=!0,rn&&(ji(rn),rn=null);var e=ki(t);ae.emit(Ni(t)?"touchStart":"dragStart",zi(t)),!Ni(t)&&0<=["img","a"].indexOf(ai(Li(t)))&&Si(t),un.x=on.x=parseInt(e.clientX),un.y=on.y=parseInt(e.clientY),q&&(an=parseFloat(Z.style[Xt].replace(Yt,"").replace(Kt,"")),li(Z,"0s"))}function Oi(t){if(sn){var e=ki(t);un.x=parseInt(e.clientX),un.y=parseInt(e.clientY),q?rn||(rn=qi(function(){!function t(e){if(!ee)return void(sn=!1);ji(rn);sn&&(rn=qi(function(){t(e)}));"?"===ee&&(ee=Di());if(ee){!ke&&Ni(e)&&(ke=!0);try{e.type&&ae.emit(Ni(e)?"touchMove":"dragMove",zi(e))}catch(t){}var n=an,i=ln(un,on);if(!G||pt||vt)n+=i,n+="px";else{var a=T?i*xt*100/((yt+mt)*jt):100*i/(yt+mt);n+=a,n+="%"}Z.style[Xt]=Yt+n+Kt}}(t)})):("?"===ee&&(ee=Di()),ee&&(ke=!0)),ke&&t.preventDefault()}}function Hi(i){if(sn){rn&&(ji(rn),rn=null),q&&li(Z,""),sn=!1;var t=ki(i);un.x=parseInt(t.clientX),un.y=parseInt(t.clientY);var a=ln(un,on);if(Math.abs(a)){if(!Ni(i)){var n=Li(i);ca(n,{click:function t(e){Si(e),fa(n,{click:t})}})}q?rn=qi(function(){if(G&&!vt){var t=-a*xt/(yt+mt);t=0<a?Math.floor(t):Math.ceil(t),Gt+=t}else{var e=-(an+a);if(e<=0)Gt=_t;else if(e>=rt[rt.length-1])Gt=Zt;else for(var n=0;n<jt&&e>=rt[n];)e>rt[Gt=n]&&a<0&&(Gt+=1),n++}mi(i,a),ae.emit(Ni(i)?"touchEnd":"dragEnd",zi(i))}):ee&&bi(i,0<a?-1:1)}}"auto"===h.preventScrollOnTouch&&(ke=!1),te&&(ee="?"),Dt&&!Ge&&wi()}function Pi(){_.style.height=rt[Gt+xt]-rt[Gt]+"px"}function Ri(){var t=pt?(pt+mt)*nt/yt:nt/xt;return Math.min(Math.ceil(t),nt)}function Wi(){if(Lt&&!we&&qe!==je){var t=je,e=qe,n=oa;for(qe<je&&(t=qe,e=je,n=ra);t<e;)n(Re[t]),t++;je=qe}}function zi(t){return{container:Z,slideItems:et,navContainer:We,navItems:Re,controlsContainer:Se,hasControls:xe,prevButton:Ie,nextButton:Oe,items:xt,slideBy:bt,cloneCount:qt,slideCount:nt,slideCountNew:jt,index:Gt,indexCached:Jt,displayIndex:vn(),navCurrentIndex:Qe,navCurrentIndexCached:Ve,pages:qe,pagesCached:je,sheet:Rt,isOn:at,event:t||{}}}H&&console.warn("No slides found in",h.container)};return va}();
//# sourceMappingURL=../sourcemaps/tiny-slider.js.map

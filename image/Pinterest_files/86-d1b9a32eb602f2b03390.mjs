(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[86],{"+lzj":function(e,t,n){n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return u})),n.d(t,"e",(function(){return d})),n.d(t,"d",(function(){return p})),n.d(t,"f",(function(){return m}));var r=n("fyR6"),o=n("vzKb");const a={cumulativeLayoutShiftScore:0,firstInputDelay:null,longTaskDurations:[],largestContentfulPaint:null,elementTimings:[]},i=()=>{a.longTaskDurations=[]},c=Object(r.a)(()=>a.elementTimings),s=()=>c.get(),u=e=>{e&&c.save(),a.elementTimings=[]},d=()=>a;let l=0;const p=()=>l,m=()=>{Object(o.a)({type:"element",buffered:!0},e=>{a.elementTimings=a.elementTimings.concat(e.getEntries().reduce((e,{identifier:t,loadTime:n,renderTime:r})=>e.concat("string"==typeof t&&"number"==typeof n&&"number"==typeof r?[{identifier:t,loadTime:n,renderTime:r}]:[]),[]))}),Object(o.a)({entryTypes:["longtask"]},e=>{e.getEntries().map(e=>a.longTaskDurations.push(e.duration))},()=>i()),Object(o.a)({type:"first-input",buffered:!0},(e,t)=>{const n=e.getEntries()[0];n&&n.startTime&&n.processingStart&&(a.firstInputDelay={startTime:n.startTime,endTime:n.processingStart}),t.disconnect()},()=>{a.firstInputDelay=null}),Object(o.a)({type:"largest-contentful-paint",buffered:!0},e=>{const t=e.getEntries(),n=t.length,r=t[n-1];r&&(l=n,a.largestContentfulPaint=r.renderTime||r.loadTime||null)}),Object(o.a)({type:"layout-shift",buffered:!0},e=>{e.getEntries().forEach(e=>{e.hadRecentInput||(a.cumulativeLayoutShiftScore+=e.value)})})}},"3R0Q":function(e,t,n){t.a=e=>{let t={};e.forEach(({label:e,timestamp:n})=>{t={...t,[e]:(t[e]||[]).concat([n])}});let n=Object.freeze({});return Object.keys(t).forEach(e=>{(t[e]||[]).forEach((t,r)=>{const o=r?`${e}_${r+1}`:e;n={...n,[o]:t}})}),n}},"44Ds":function(e,t,n){var r=n("e4Nc");function o(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],a=n.cache;if(a.has(o))return a.get(o);var i=e.apply(this,r);return n.cache=a.set(o,i)||a,i};return n.cache=new(o.Cache||r),n}o.Cache=r,e.exports=o},"4uTw":function(e,t,n){var r=n("Z0cm"),o=n("9ggG"),a=n("GNiM"),i=n("dt0z");e.exports=function(e,t){return r(e)?e:o(e,t)?[e]:a(i(e))}},"9Nap":function(e,t,n){var r=n("/9aa");e.exports=function(e){if("string"==typeof e||r(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t}},"9ggG":function(e,t,n){var r=n("Z0cm"),o=n("/9aa"),a=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,i=/^\w*$/;e.exports=function(e,t){if(r(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!o(e))||(i.test(e)||!a.test(e)||null!=t&&e in Object(t))}},EHyI:function(e,t,n){n.d(t,"a",(function(){return i}));var r=()=>{var e;return!(null===(e=window.performance)||void 0===e||!e.timing)},o=n("XtwW"),a=n("gg0E");function i(e){return!("desktop"===e&&!r())&&(!!o.a&&Object(a.a)())}},FZ8N:function(e,t,n){n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return a}));const r=window.location.search.includes("debug_tracing"),o=window.location.search.includes("debug_lab_tracing"),a=r||o},FylZ:function(e,t,n){function r(){let e="";for(let t=0;t<16;t+=1){e+="0123456789abcdef"[Math.floor(16*Math.random())]}return e}n.d(t,"a",(function(){return r}))},GNiM:function(e,t,n){var r=n("I01J"),o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,a=/\\(\\)?/g,i=r((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(o,(function(e,n,r,o){t.push(r?o.replace(a,"$1"):n||e)})),t}));e.exports=i},I01J:function(e,t,n){var r=n("44Ds");e.exports=function(e){var t=r(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}},JqDr:function(e,t,n){var r=n("gxu6"),o=n("mwIZ"),a=n.n(o),i=n("eOdZ"),c=n("QLqj"),s=n("28DW"),u=n("VL22"),d=n("RNo4"),l=n("OX7c"),p=n("J8m7"),m=n("yM2L");let _=0;const b=(e,t)=>{const n={...e},{onCorsHandshakeHost:o,registerUserContext:f,sendActiveUserPing:g,successWithoutTokenErrorMessage:O}=t,h=c.b.localStorage.getItem("visitedPages"),y=a()(window,["location","search"],null),w=Object(d.k)(y).utm_campaign;h&&(n.visited_pages=JSON.stringify(h)),w&&(n.utm_campaign=w);const v=c.b.localStorage.getItem("visitedPinLandingPagesBeforeLogin");if(v){const e=[];for(const t of v)t.is_shared_pin&&e.push({ts:t.ts,path:t.path,first_pin_image_signature:t.image_signature,is_shared:!0});e&&(n.visited_pages=JSON.stringify(e.concat(h||[])))}n.user_behavior_data=(()=>{const e={};return["signupTriedSkipInputName","signupTriedSkipGender","unauthTopicsFollowed"].forEach(t=>{const n=c.b.localStorage.getItem(t);n&&(e[t]=n)}),JSON.stringify(e)})();const j=e=>(Object(l.a)("signup"),r.c("galae"),r.c("fbalae"),g(),r.b("ujr","1"),((e,{logContextEventType:t,trackRegisterSuccess:n})=>{let r;switch(e.container){case"home_page":r=1750,Object(s.a)("signup_home_page");break;case"mweb_homepage":r=1750,Object(s.a)("signup_mweb_home_page");break;case"plain_signup_modal":r=1751,Object(s.a)("signup_plain_modal");break;case"closeup_signup_modal":r=1752,Object(s.a)("signup_closeup_modal");break;case"widescreen_signup_modal":r=1753,Object(s.a)("signup_widescreen_modal");break;case"pinit_button_landing":r=1755,Object(s.a)("signup_pinit_button_landing");break;case"inspired_banner":Object(s.a)("signup_inspired_banner");break;case"category_jump_banner":Object(s.a)("signup_category_jump_banner");break;case"send_pin_banner":r=1756,Object(s.a)("send_pin_banner");break;default:r=1754,Object(s.a)("signup_unknown_placement")}const o=e.container||"container_unknown";Object(s.a)("signup.container."+o);const a=e.signupSource||"signupSource_unknown";Object(s.a)("signup.source."+a),r&&t(r);const i=document.referrer;let c;c=i?i.indexOf("/t.co/")>-1?"twitter":i.indexOf("google.")>-1?"google":i.indexOf("bing.")>-1?"bing":i.indexOf("facebook.")>-1?"facebook":"other":"direct",Object(s.a)("signup_referrer."+c),n(),Object(s.a)(`web_signup.${Object(u.b)(e)}.success.${e.page||"page_unknown"}.${o}.${c}.${e.hybridTier||"tier_unknown"}`)})(n,t),e),k=e=>{e.api_error_code===p.c&&(Object(s.a)("multi_step_set_age_restrict_cookie"),r.b("r_r","1",87600),r.b("_pinterest_pfob","disabled"));if((!e.api_error_code||[p.g,p.f].includes(e.api_error_code))&&_<3)return Object(s.a)(`unauth_web.signup_retry_error.${String(e.api_error_code)}.${String(n.container)}`),_+=1,b(n,t);throw e};if(!n.facebook_id&&!n.gplus_code&&!n.gplus_id_token&&!n.google_open_id_token&&!n.line_id_token&&Boolean(n.email)&&o){Object(s.a)("unauth_cross_domain_register_debugging_counter");const e=e=>{Object(s.a)(`web_cross_domain_register.${e}.${Object(u.b)(n)}`)};return e("attempt"),Object(m.registerUser)(n,f).then(t=>{j(t);const n=t.data||"";if(n)return e("success_with_token"),Object(m.exchangeTokenAndSetSession)(n,!0).then(t=>{e("success_token_exchanged")},t=>{throw e("success_token_not_exchanged"),t});throw e("success_without_token"),new Error(O)},t=>{e("failure"),k(t)})}return i.a.create("UserRegisterResource",n).callCreate().then(e=>j(e),e=>k(e))};t.a=b},OCob:function(e,t,n){var r=n("+NLT");t.a=()=>({referrer:r.a.instance.referrer,facebookToken:r.a.instance.facebook_token,unauthId:r.a.instance.unauth_id,origin:r.a.instance.origin,appType:r.a.instance.app_type})},VL22:function(e,t,n){n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return a})),n.d(t,"d",(function(){return i})),n.d(t,"c",(function(){return c}));var r=n("kmwA");const o={FACEBOOK:"facebook",GOOGLE_ONE_TAP:"google_one_tap",GOOGLE:"google",LINE:"line",EMAIL:"email",OTHER:"other"},a=e=>e.facebook_id?o.FACEBOOK:e.google_open_id_token?o.GOOGLE_ONE_TAP:e.gplus_code||e.gplus_id_token?o.GOOGLE:e.line_id_token?o.LINE:e.email?o.EMAIL:o.OTHER,i=(e="")=>e in r.a.settings.MINIMUM_AGE_BY_EU_COUNTRY,c=e=>r.a.settings.EN_COUNTRIES_WITH_MANDATORY_AGE.includes(e)||r.a.settings.LATAM_AGE_COLLECTION.has(e)},ZWtO:function(e,t,n){var r=n("4uTw"),o=n("9Nap");e.exports=function(e,t){for(var n=0,a=(t=r(t,e)).length;null!=e&&n<a;)e=e[o(t[n++])];return n&&n==a?e:void 0}},dt0z:function(e,t,n){var r=n("zoYe");e.exports=function(e){return null==e?"":r(e)}},eUgh:function(e,t){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o}},fZG9:function(e,t,n){n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return O}));var r=n("bNC6"),o=n("HMdf"),a=n("+lzj"),i=n("SyXB"),c=n("nEAA");const s=(e,t)=>(e||[]).reduce((e,n)=>({...e,["experiment."+n]:Object(c.d)(t(n))}),{}),u=(e,t)=>"number"==typeof t?e(t):null,d=e=>e.reduce((e,t)=>e+t,0),l=(e,t)=>Object.keys(t).reduce((n,r)=>({...n,[`${e}${r}`]:t[r]}),{}),p=e=>{if(!e.length)return{};const t=e.map(({startTime:e,requestStart:t,responseStart:n,responseEnd:r})=>{const o=t||e;return{startTime:e,requestStart:o,responseStart:n||o,responseEnd:r}}),n=d(t.map(e=>e.requestStart-e.startTime)),r=d(t.map(e=>e.responseStart-e.requestStart)),o=d(t.map(e=>e.responseEnd-e.responseStart)),a=n+r+o,i=d(e.map(e=>e.decodedBodySize||0));return{decodedBodySize:Object(c.b)((s=i,Number(Number(s/1024).toFixed(3)))),"duration.all":Object(c.b)(a),"duration.requestStartToResponseStart":Object(c.b)(r),"duration.responseStartToResponseEnd":Object(c.b)(o),"duration.startToRequestStart":Object(c.b)(n)};var s},m=e=>{const t=e.filter(e=>!!e.responseEnd);return{...e.length?{...p(t),"count.completed":Object(c.b)(t.length)}:{},"count.all":Object(c.b)(e.length)}},_=e=>{const t=e.reduce((e,t)=>(e[t.category]=(e[t.category]||[]).concat([t]),e),{}),n={script:t.script,script_deferred:e.filter(e=>e.isDeferred),external:e.filter(e=>e.isExternal),css:t.css,image:t.image,video:t.video,xmlhttprequest:t.xmlhttprequest,visually_complete:e.filter(e=>e.isVisuallyCompleteRequired)};return Object.keys(n).reduce((e,t)=>({...e,...l(`resource.${t}.`,m((n[t]||[]).map(e=>e.timing)))}),{})},b=(e,t)=>{const{devicePixelRatio:n,navigator:o,innerWidth:a,innerHeight:i}=window,{deviceMemory:s,hardwareConcurrency:u,platform:d,userAgent:l}=o,{appType:p,appVersion:m,browserName:_,browserVersion:b,deviceType:f,isAppShell:g,isAuthenticated:O,isBot:h,isSocialBot:y,locale:w,osName:v,stageName:j}=t,k="desktop"===f?p||5:p||6;let T;const{navigationType:E}=e;return T="initial_app_load"===E?1:4,{"app.type":Object(c.c)(k),"app.version":Object(c.d)(m),"browser.name":Object(c.d)(_),"browser.version":Object(c.d)(b),"cpu.speed":Object(c.c)(u),"device.memory":Object(c.c)(s),"device.type":Object(c.c)(0),"device.typeName":Object(c.d)(f),"device.version":Object(c.d)("unknown"),"pwt.cause":Object(c.c)(T),"pwt.result":Object(c.c)(1),"view.type":Object(c.b)(0),"viewport.height":Object(c.b)(i||0),"viewport.width":Object(c.b)(a||0),devicePixelRatio:Object(c.b)(n||0),isAppShell:Object(c.a)(g),isAuthenticated:Object(c.a)(O),isBot:Object(c.a)(h),isSocialBot:Object(c.a)(y),locale:Object(c.d)(w),osName:Object(c.d)(v),platform:Object(c.d)(d||null),profilerVersion:Object(c.d)("3"),pwtActionName:Object(c.c)(Object(r.a)(e)),stageName:Object(c.d)(j),userAgent:Object(c.d)(l)}},f=({annotateExperiments:e,metricId:t,pwtStaticContext:n,binaryAnnotations:r={},performanceResourceTimings:a=[]})=>{let i={};{const{connection:e,hardwareConcurrency:t,deviceMemory:n}=window.navigator;i={"net.effectiveType":Object(c.d)((null==e?void 0:e.effectiveType)||null),"net.rtt":Object(c.b)(u(e=>10*Math.round(e/10),null==e?void 0:e.rtt)),"net.speed":Object(c.b)(Object(o.b)(a,!1)),"cpu.threads":Object(c.c)(t),"memory.size":Object(c.b)(n)}}return{...s(e,n.getExperimentGroup),...b(t,n),...r,...i,stopwatchVersion:Object(c.c)(1)}},g=(e,t,n)=>{var r;const{navigator:s}=window,{connection:l,serviceWorker:p}=s,{surface:m,navigationType:_,isAuthenticated:b}=e,{cumulativeLayoutShiftScore:f,longTaskDurations:g}=Object(a.e)();return{...g.length?{"longTask.count":Object(c.b)(g.length),"longTask.maxDuration":Object(c.b)(Math.max(...g)),"longTask.totalDuration":Object(c.b)(d(g))}:{},cumulativeLayoutShiftScore:Object(c.b)(100*f),"masonry.paginationMarkCount":Object(c.b)(Object(i.e)(i.a,t)),"metricId.isAuthenticated":Object(c.a)(b),"metricId.navigationType":Object(c.d)(_),"metricId.surface":Object(c.d)(m),"net.effectiveType":Object(c.d)((null==l?void 0:l.effectiveType)||null),"net.rtt":Object(c.b)(u(e=>10*Math.round(e/10),null==l?void 0:l.rtt)),"net.speed":Object(c.b)(Object(o.b)(n)),resourceBufferClearedCount:Object(c.c)(Object(i.e)("resourceBufferCleared",t)),scrollDuringLayout:Object(c.a)(Object(i.f)("scrollDuringLayout",t)),serviceWorker:Object(c.a)(p?!!p.controller:null),serviceWorkerState:Object(c.d)((null==p||null===(r=p.controller)||void 0===r?void 0:r.state)||null)}},O=({annotateExperiments:e,binaryAnnotations:t={},entries:n,metricId:r,performanceResources:o,pwtEndTime:a,pwtStaticContext:i})=>({...t,..._(o),...s(e,i.getExperimentGroup),...b(r,i),...g(r,a,n)})},h7e3:function(e,t,n){n.d(t,"c",(function(){return p})),n.d(t,"a",(function(){return _})),n.d(t,"b",(function(){return b})),n.d(t,"d",(function(){return f}));var r=n("3R0Q"),o=n("EHyI"),a=n("SyXB"),i=n("FylZ"),c=n("mRg4"),s=n("XtwW"),u=n("fZG9"),d=n("3/Bf");const l={},p=(e,t)=>{t.forEach(t=>{l[t]=(({name:e,pwtStaticContext:t})=>{if(!s.a||!Object(o.a)())return null;const n={type:"stopwatch",name:e},a=[];let d=!0;return{abort:e=>{d&&(d=!1,Object(c.a)({metricId:n,pwtStaticContext:t,result:{type:"ABORT",reason:e}}))},annotate:e=>{d&&a.push({label:e,timestamp:s.a.now()})},stop:()=>{if(!d)return;d=!1;const e={type:"COMPLETE",traceId:Object(i.a)(),startTime:0,endTime:s.a.now(),spans:[],annotationMap:Object(r.a)(a),binaryAnnotationMap:Object(u.a)({metricId:n,pwtStaticContext:t})};Object(c.a)({metricId:n,pwtStaticContext:t,result:e})}}})({name:t,pwtStaticContext:e})})},m=e=>l[e],_=(e,t)=>{const n=m(e);if(n)try{n.abort(t)}catch(r){Object(d.b)("app_load_stopwatch_error",{name:e,result:"abort"})}},b=(e,t)=>{const n=m(e);n&&(n.annotate(t),Object(a.c)(`stopwatch_${e}_${t}`))},f=e=>{const t=m(e);if(t)try{t.stop()}catch(n){Object(d.b)("app_load_stopwatch_error",{name:e,result:"complete"})}}},looy:function(e,t,n){n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return m}));var r=n("kmwA"),o=n("0G5S");const a="dpm_billing_event",i={web_login:"dpm_login_event",web_new_user:"dpm_new_user_event",web_billing_complete:a};async function c(e){if("undefined"==typeof TextEncoder)return"";const t=(new TextEncoder).encode(e),n=await window.crypto.subtle.digest("SHA-256",t);return Array.from(new Uint8Array(n)).map(e=>e.toString(16).padStart(2,"0")).join("")}function s(e,t){const n=document.createElement("img");return n.height=1,n.width=1,n.style.display="none",n.id=""+i[e],n.src=r.a.settings.DATA_PLUS_MATH_EVENT_PIXEL+e+"&url="+document.URL+"&refr="+document.referrer+"&uid="+t,n}async function u(e,t){const n=document.getElementById("dpm_pixel_auth"),a=document.getElementById("dpm_pixel_unauth");async function i(e,t){const n=document.getElementById("dpm_images")?document.getElementById("dpm_images"):document.createElement("noscript"),a=document.createElement("img"),i="undefined"!=typeof window&&window.crypto&&window.crypto.subtle?await c(t):"";a.height=1,a.width=1,a.style.display="none",a.id="dpm_pixel_auth",a.src=r.a.settings.DATA_PLUS_MATH_WEB_PIXEL+"&url="+document.URL+"&refr="+document.referrer+"&uid="+e+"*"+i,n&&(n.id="dpm_images",n.appendChild(a));for(const r of["web_login","web_new_user"])if(Object(o.a)(r)){const e=s(r,i);n&&n.appendChild(e),Object(o.b)(r)}var u;n&&(null===(u=document.body)||void 0===u||u.insertBefore(n,document.body.firstChild))}n||(a&&a.remove(),"complete"===document.readyState&&i(e,t),window.addEventListener("load",function e(t,n){return r=>{i(t,n),window.removeEventListener(r,e)}}(e,t)))}async function d(e){function t(e){const t=document.getElementById("dpm_images")?document.getElementById("dpm_images"):document.createElement("noscript"),n=document.createElement("img");var o;(n.height=1,n.width=1,n.style.display="none",n.id="dpm_pixel_unauth",n.src=r.a.settings.DATA_PLUS_MATH_WEB_PIXEL+"&url="+document.URL+"&refr="+document.referrer+"&uid="+e,t)&&(t.id="dpm_images",t.appendChild(n),null===(o=document.body)||void 0===o||o.insertBefore(t,document.body.firstChild))}document.getElementById("dpm_pixel_unauth")||("complete"===document.readyState&&t(e),window.addEventListener("load",function e(n){return r=>{t(n),window.removeEventListener(r,e)}}(e)))}async function l(e,t=""){if("web_login"===e||"web_new_user"===e)Object(o.a)(e)||Object(o.c)(e,i[e]);else if("web_billing_complete"===e){const o="undefined"!=typeof window&&window.crypto&&window.crypto.subtle?await c(t):"",i=document.getElementById("dpm_images")?document.getElementById("dpm_images"):document.createElement("noscript"),s=document.createElement("img");var n;if(s.height=1,s.width=1,s.style.display="none",s.id=a,s.src=r.a.settings.DATA_PLUS_MATH_EVENT_PIXEL+e+"&url="+document.URL+"&refr="+document.referrer+"&uid="+o,!document.getElementById("dpm_images"))if(i)i.id="dpm_images",i.appendChild(s),null===(n=document.body)||void 0===n||n.insertBefore(i,document.body.firstChild)}}function p(e,t){return n=>{l(e,t),window.removeEventListener(n,p)}}async function m(e,t=""){"complete"===document.readyState?l(e,t):window.addEventListener("load",p(e,t))}},mRg4:function(e,t,n){n.d(t,"a",(function(){return O}));let r=null;var o=(e,t)=>(r=r||{results:[],context:t},r.results.push(e),r),a=n("FZ8N"),i=n("LrH5"),c=n("bNC6"),s=n("3/Bf"),u=n("o9su"),d=n("FylZ");const l=(e,t)=>Object.keys(e).reduce((n,r)=>{const o=e[r];return o&&(n[r]={timestamp:t+o}),n},{}),p=({span:e,timeOrigin:t})=>{return{id:e.id,parent_id:e.parentId||null,result:1,name:e.name,timestamp:t+e.startTime,duration:e.endTime-e.startTime,annotations:l(e.annotationMap,t),binary_annotations:(n=e.binaryAnnotationMap,Object.keys(n).reduce((e,t)=>{const r=n[t];if(!r)return e;const{value:o,type:a}=r;return null==o?e:e.concat({name:t,value:o,annotation_type:a})},[]))};var n},m=(e,{startTime:t,endTime:n,annotationMap:r,binaryAnnotationMap:o,parentId:a,traceId:i})=>({name:"pwt/"+e,startTime:t,endTime:n,annotationMap:r,binaryAnnotationMap:o,parentId:a,id:i}),_=({annotations:e})=>e.reduce((e,{key:t,timestamp:n})=>({...e,["server_"+t]:{timestamp:n}}),{}),b=(e,t)=>({...e,annotations:{..._(t),...e.annotations},binary_annotations:[...t.binary_annotations,...e.binary_annotations]}),f=({traceId:e,actionName:t,result:n,timeOrigin:r,serverDataToJoin:o})=>{let a=p({span:m(t,n),timeOrigin:r}),i=null;return o&&(a=b(a,o),i=((e,t,n)=>{const r=Object(u.a)();return(null==r?void 0:r.responseEnd)?b(p({span:{name:"html",startTime:0,endTime:(null==r?void 0:r.responseEnd)||1,annotationMap:{},binaryAnnotationMap:{},id:e.server_span_id||Object(d.a)(),parentId:t},timeOrigin:n}),e):null})(o,e,r)),{trace_id:e,spans:[a,...i?[i]:[],...n.spans.map(e=>p({span:e,timeOrigin:r}))]}},g=Object(i.a)("reportResult");function O({metricId:e,pwtStaticContext:t,result:n,isAuth:r}){const{ajax:i,serverData:u}=t,d=Object(c.b)(e),l=`${n.type}.${d}`,p=void 0!==r&&{tags:{isAuth:r}}||void 0;if(Object(s.c)(n.reason?l.concat("."+n.reason):l,p),"COMPLETE"!==n.type)return void g("Abort metric "+d,n);const m=null!==(_=window.performance)&&void 0!==_&&_.now?Date.now()-window.performance.now():"unknown";var _,b;if("unknown"===m)return g(`Unable to convert to absolute times for ${d} due to missing time origin`),void Object(s.c)("missingTimeOrigin."+d,p);if(a.c&&(window.PWT_LAB_DATA=o(n,t)),n.spans.length&&(n.spans=n.spans.map(e=>(e.parentId||e.id===n.traceId||"network_resources"===e.name||(e.parentId=n.traceId),e))),!a.c){const r=e.navigationType&&"initial_app_load"===e.navigationType,o=n.traceId,c=f({traceId:o,actionName:d,result:n,timeOrigin:m,serverDataToJoin:r&&u||null});i({type:"POST",url:"/_/_/trace/trace/",data:{report_data:JSON.stringify(c),report_context:JSON.stringify((b=t,{debugTrace:a.a,locale:b.locale,stageName:b.stageName,userId:b.isAuthenticated?b.userId:null}))}}),g(`PinTrace ${d} will be available shortly: https://pintrace.pinadmin.com/zipkin/traces/${o}`,{duration:n.endTime-n.startTime,result:n,pwtStaticContext:t})}}},mwIZ:function(e,t,n){var r=n("ZWtO");e.exports=function(e,t,n){var o=null==e?void 0:r(e,t);return void 0===o?n:o}},nEAA:function(e,t,n){n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return a})),n.d(t,"d",(function(){return i})),n.d(t,"a",(function(){return c}));const r=e=>"number"==typeof e?Math.round(e):e,o=e=>({type:"I16",value:r(e)}),a=e=>({type:"I32",value:r(e)}),i=e=>({type:"STRING",value:e}),c=e=>({type:"BOOL",value:e})},o9su:function(e,t,n){var r=n("XtwW");t.a=()=>{const[e]=r.a?r.a.getEntriesByType("navigation"):[];return e}},qpbZ:function(e,t,n){function r(e,t,n){return e.split(n).map(e=>{if(e.match(n)){const n=e.replace(/[\{\}]/g,"").trim();if(Object.prototype.hasOwnProperty.call(t,n))return t[n]}return e})}n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return s}));const o=/(\{\{\s*\w+\s*\}\})/g;function a(e,t){return r(e,t,o)}function i(e,t){return r(e,t,o).join("")}const c=/(\{\s*\w+\s*\})/g;function s(e,t){return r(e,t,c)}},vjiL:function(e,t,n){var r=n("+NLT"),o=n("m2Wt"),a=n("h4v/");var i=n("zpPL");var c=n("Jr++"),s=n("Ye/N"),u=n("eqAH"),d=n("kmwA"),l=n("28DW"),p=n("looy"),m=n("JqDr");t.a=e=>{const{facebook_token:t,invite_code:n,locale:_,origin:b,referrer:f,unauth_id:g,user_agent_platform:O}=r.a.instance,h={logContextEventType:e=>{a.a.getInstance().addEvent(o.a.fromEventType(e))},sendActiveUserPing:u.a,registerUserContext:{facebookToken:t,inviteCode:n,locale:_,referrer:f,unauthId:g},onCorsHandshakeHost:d.a.settings.CORS_HANDSHAKE_DOMAINS.includes(b),successWithoutTokenErrorMessage:s.a._("We were able to create your account, but there was a problem logging you in. Try refreshing the page to continue."),trackRegisterSuccess:()=>{Object(l.a)("signup_referrer_module."+String(Object(c.a)().referrer||function(){const e=i.a.instance.getState().ui.mainComponent.initial;return e?e.replace(/([a-z])([A-Z])/g,"$1_$2").toLowerCase():null}())),"ios"===O?Object(l.a)("signup_mweb.iphone_web"):"ipad"===O?Object(l.a)("signup_mweb.ipad_web"):"android"===O&&Object(l.a)("signup_mweb.android_web")}};return Object(p.c)("web_new_user"),Object(m.a)(e,h)}},yM2L:function(e,t,n){n.r(t),n.d(t,"exchangeTokenAndSetSession",(function(){return d})),n.d(t,"verifyLoggedInStatus",(function(){return l})),n.d(t,"registerUser",(function(){return p})),n.d(t,"loginUser",(function(){return m}));var r=n("T0g9"),o=n("eOdZ"),a=n("kmwA"),i=n("28DW"),c=n("J8m7");const s=a.a.settings.ACCOUNTS_PINTEREST_URL,u=(e,t,n,r)=>{const o=e=>{const t=new Error(e.statusText);throw t.response=e,!t.api_error_code&&t.response&&(t.api_error_code=t.response.code,t.message=t.response.message),t},a={credentials:"include",mode:"cors"};return"POST"===n&&(a.method="POST",a.body=t,a.headers={"Content-type":"application/x-www-form-urlencoded; charset=UTF-8","X-Pinterest-InstallId":r},r||Object(i.a)("unauth.auth_handshake.cross_domain.no_unauth_id."+n)),fetch(e,a).then(e=>200===e.status||401===e.status||409===e.status?e:(o(e),{})).then(e=>e.json()).then(e=>"success"===e.status?Promise.resolve(e):e.code===c.t?(e.api_error_code=e.code,Promise.reject(e)):(o(e),{})).catch(e=>{throw e})},d=(e,t=!1)=>o.a.create("HandshakeSessionResource",{token:e,isRegistration:t}).callCreate(),l=e=>{u(s+"/v3/handshake/verify/","","GET",e).then(e=>{if(e&&e.data){const t=e.data;d(t).then(e=>{window.location.reload()},e=>{})}},e=>{})},p=(e,{facebookToken:t,inviteCode:n,locale:o,referrer:i,unauthId:c})=>{const s=(e.business_name?"partner/handshake":(e.gplus_code||e.gplus_id_token)&&"gplus/handshake")||e.facebook_id&&"facebook/handshake"||"email/handshake",d={};if(d.email=e.email||"",d.username=e.username||"",d.password=e.password||"",d.first_name=e.first_name||"",d.last_name=e.last_name||"",d.country=e.country||"",d.locale=o,d.referrer=i,e.age){const t=new Date;t.setFullYear(t.getFullYear()-e.age);const n=parseInt(t/1e3,10);d.birthday=n.toString()}if(e.custom_gender&&(d.custom_gender=e.custom_gender),e.gender&&(d.gender=e.gender),e.business_name&&(d.account_type=e.account_type,d.business_name=e.business_name,d.first_name=e.business_name),n&&(d.invite_code=n),e.facebook_id){const n=t||e.facebook_token||"";d.facebook_id=e.facebook_id,d.facebook_token=n,d.social_username=e.social_username||""}else(e.gplus_code||e.gplus_id_token)&&(d.password=e.password||"",d.one_time_code=e.gplus_code,d.id_token=e.gplus_id_token,d.redirect_uri=e.gplus_redirect_uri);return e.recaptchaV3Token&&(d.recaptcha_v3_token=e.recaptchaV3Token),u(`${a.a.settings.ACCOUNTS_PINTEREST_URL}/v3/register/${s}/`,Object(r.a)(d),"POST",c)},m=(e,{facebookToken:t,recaptchaV3Token:n,referrer:o,unauthId:i})=>{const c=(e.mfa_token?"mfa/handshake":e.gplus_id_token&&"gplus/handshake")||e.facebook_id&&"facebook/handshake"||"handshake",s={};if(e.username_or_email&&(s.username_or_email=e.username_or_email.trim(),s.password=e.password,s.referrer=o),e.facebook_id){const n=t||e.facebook_token||"";s.facebook_id=e.facebook_id,s.facebook_token=n,s.facebook_autologin=e.facebook_autologin||!1}return e.gplus_id_token&&(s.gplus_id_token=e.gplus_id_token,s.gplus_access_token=e.gplus_access_token,s.gplus_expires_at=e.gplus_expires_at,s.gplus_autologin=e.gplus_autologin||!1),e.mfa_token&&(s.mfa_token=e.mfa_token),n&&(s.token=n),u(`${a.a.settings.ACCOUNTS_PINTEREST_URL}/v3/login/${c}/`,Object(r.a)(s),"POST",i)}},zoYe:function(e,t,n){var r=n("nmnc"),o=n("eUgh"),a=n("Z0cm"),i=n("/9aa"),c=r?r.prototype:void 0,s=c?c.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(a(t))return o(t,e)+"";if(i(t))return s?s.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/86-d1b9a32eb602f2b03390.mjs.map
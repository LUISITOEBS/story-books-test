function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Button.stories-D8PdvdeS.js","./index-BASH1HpE.js","./Button-Cp5kmPgr.js","./jsx-runtime-BnIj46N_.js","./index-CsdIBAqE.js","./Button-BfyGbg8N.css","./Configure-7f440FhX.js","./index-DLsXyOuj.js","./index-D6J2IxwQ.js","./index-5f0m1pej.js","./index-B_J8iUie.js","./index-DmEeU3Of.js","./index-DrFu-skq.js","./Header.stories-Cka1x9op.js","./Header-C3yGVj0X.js","./Header-BjLH3naM.css","./MyLabel.stories-BSMbYabs.js","./MyLabel-y1YDYk2q.css","./Page.stories-BVdgt9e1.js","./Page-B9ntr4df.css","./entry-preview-D_EtyHKR.js","./react-18-Te5-Jngr.js","./entry-preview-docs-DzPshvZE.js","./preview-DzbRFJg_.js","./preview-CwqMn10d.js","./preview-BAz7FMXc.js","./preview-Bi_jGxxs.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import"../sb-preview/runtime.js";(function(){const _=document.createElement("link").relList;if(_&&_.supports&&_.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const O="modulepreload",p=function(i,_){return new URL(i,_).href},E={},o=function(_,n,l){let e=Promise.resolve();if(n&&n.length>0){const t=document.getElementsByTagName("link");e=Promise.all(n.map(r=>{if(r=p(r,l),r in E)return;E[r]=!0;const c=r.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(!!l)for(let a=t.length-1;a>=0;a--){const u=t[a];if(u.href===r&&(!c||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${d}`))return;const s=document.createElement("link");if(s.rel=c?"stylesheet":O,c||(s.as="script",s.crossOrigin=""),s.href=r,document.head.appendChild(s),c)return new Promise((a,u)=>{s.addEventListener("load",a),s.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${r}`)))})}))}return e.then(()=>_()).catch(t=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=t,window.dispatchEvent(r),!r.defaultPrevented)throw t})},{createBrowserChannel:f}=__STORYBOOK_MODULE_CHANNELS__,{addons:R}=__STORYBOOK_MODULE_PREVIEW_API__,m=f({page:"preview"});R.setChannel(m);window.__STORYBOOK_ADDONS_CHANNEL__=m;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=m);const P={"./src/stories/Button.stories.ts":async()=>o(()=>import("./Button.stories-D8PdvdeS.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url),"./src/stories/Configure.mdx":async()=>o(()=>import("./Configure-7f440FhX.js"),__vite__mapDeps([6,3,4,7,8,9,10,11,12]),import.meta.url),"./src/stories/Header.stories.ts":async()=>o(()=>import("./Header.stories-Cka1x9op.js"),__vite__mapDeps([13,1,14,3,4,2,5,15]),import.meta.url),"./src/stories/MyLabel.stories.ts":async()=>o(()=>import("./MyLabel.stories-BSMbYabs.js"),__vite__mapDeps([16,3,4,17]),import.meta.url),"./src/stories/Page.stories.ts":async()=>o(()=>import("./Page.stories-BVdgt9e1.js"),__vite__mapDeps([18,1,3,4,14,2,5,15,19]),import.meta.url)};async function L(i){return P[i]()}const{composeConfigs:T,PreviewWeb:v,ClientApi:I}=__STORYBOOK_MODULE_PREVIEW_API__,w=async()=>{const i=await Promise.all([o(()=>import("./entry-preview-D_EtyHKR.js"),__vite__mapDeps([20,4,21,9]),import.meta.url),o(()=>import("./entry-preview-docs-DzPshvZE.js"),__vite__mapDeps([22,11,4,12]),import.meta.url),o(()=>import("./preview-DzbRFJg_.js"),__vite__mapDeps([23,10]),import.meta.url),o(()=>import("./preview-C_No7Z3b.js"),__vite__mapDeps([]),import.meta.url),o(()=>import("./preview-DbT1mggi.js"),__vite__mapDeps([]),import.meta.url),o(()=>import("./preview-CwqMn10d.js"),__vite__mapDeps([24,12]),import.meta.url),o(()=>import("./preview-B4GcaC1c.js"),__vite__mapDeps([]),import.meta.url),o(()=>import("./preview-Db4Idchh.js"),__vite__mapDeps([]),import.meta.url),o(()=>import("./preview-BAz7FMXc.js"),__vite__mapDeps([25,12]),import.meta.url),o(()=>import("./preview-Cv3rAi2i.js"),__vite__mapDeps([]),import.meta.url),o(()=>import("./preview-Bi_jGxxs.js"),__vite__mapDeps([26,1]),import.meta.url),o(()=>import("./preview-CIRcjyVj.js"),__vite__mapDeps([]),import.meta.url)]);return T(i)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new v(L,w);window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;export{o as _};
if(!self.define){let e,i={};const c=(c,n)=>(c=new URL(c+".js",n).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(n,l)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(i[f])return;let o={};const r=e=>c(e,f),u={module:{uri:f},exports:o,require:r};i[f]=Promise.all(n.map((e=>u[e]||r(e)))).then((e=>(l(...e),o)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"09433718fffb67e30dd5.woff2",revision:null},{url:"094c69c0b8ba7739e058.woff2",revision:null},{url:"2226af6ba42c5c6a1600.woff2",revision:null},{url:"2621ec712bf05b5fc9e6.woff",revision:null},{url:"298e9331d96179b90f37.eot",revision:null},{url:"2a361185de096a6e3e99.eot",revision:null},{url:"3f7f2c80230f591f0231.woff2",revision:null},{url:"46f60d555e51ea1b1a10.eot",revision:null},{url:"4dd4c631024d4d6436d0.woff",revision:null},{url:"5f6b6a7ae0003bd6fe89.woff2",revision:null},{url:"653859786d3f3c0c5383.woff2",revision:null},{url:"6ba8d1c0fc6203880746.woff",revision:null},{url:"72196561b9ec276f7f74.woff",revision:null},{url:"966e1e1972c9e8cf7a97.woff",revision:null},{url:"ac2c608bf183bb6b3390.eot",revision:null},{url:"ad5e6573715d0da0f85a.woff2",revision:null},{url:"ae50787170c6ab4c85f8.eot",revision:null},{url:"c0099907ce57cbf0aef9.woff",revision:null},{url:"cafb87f71d0eb3b9240f.woff",revision:null},{url:"de82ac98f63ddbc503f6.eot",revision:null},{url:"eacd4ea838f1175de666.eot",revision:null},{url:"index.html",revision:"a379de19e45049c63239db99a2d2517d"},{url:"main.js",revision:"274f7919fc11c27c8deb482e27f01fc4"},{url:"public/icons/android-chrome-192x192.png",revision:"bf658a718ea6aae5f72e869c47bccfc0"},{url:"public/icons/android-chrome-512x512.png",revision:"dc8df145d2888e1f7dca9cdb5f1c0f92"},{url:"public/icons/apple-touch-icon.png",revision:"eedfc33227570e4056951a4db3031495"},{url:"public/icons/browserconfig.xml",revision:"8f30c1014e0aada2c78e225138435c08"},{url:"public/icons/favicon-16x16.png",revision:"aec2305254f206ba3861a0f9b14ee90a"},{url:"public/icons/favicon-32x32.png",revision:"e6e6c1c1b3fabc38730718d55ce34269"},{url:"public/icons/favicon.ico",revision:"65a589d10de9836fe86d6b69279b2a6b"},{url:"public/icons/favicon_package_v0.16.zip",revision:"5a9767cfdc394f1d930c9a70151edf10"},{url:"public/icons/mstile-150x150.png",revision:"d5187e25be765466634917259ee6068c"},{url:"public/icons/safari-pinned-tab.svg",revision:"26588026a50adaa7b285e1cc2a11527e"},{url:"public/img/The Venus News.png",revision:"755c88c40c03812c78abb25ffb4a8d8c"},{url:"public/img/The_Venus_News-removebg-preview.png",revision:"0fad5f8df51e55f0697bb9768ba32abe"},{url:"public/img/The_Venus_News_logo.png",revision:"19672d8ae6dd7c01d852c6960d022b44"},{url:"public/img/venus-removebg-preview.png",revision:"d4876d7fa9aa6cbc0eb3d21aee1b8292"},{url:"public/img/venus.jpg",revision:"fe6c9643fb4125635505e734ccf61320"},{url:"public/site.webmanifest",revision:"2b87af05b803623afafcf91c9d157526"}],{})}));

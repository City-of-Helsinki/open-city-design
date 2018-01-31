"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","657ce6c5ca136cff5b51ec3910fd4637"],["/static/css/main.4dcf7321.css","6362683e10c78931159213d19e91b549"],["/static/js/main.8b0cefd3.js","581f1b8e345e93dbf2aed54d02c7e23a"],["/static/media/1-open-files.fba38c39.png","fba38c3959fd7a8d4af3fa565f693338"],["/static/media/2-sketch-library.dcf26fbd.png","dcf26fbde22d216a974a2394cd720f1a"],["/static/media/3-open-resources.2c124503.png","2c124503569c241feb82359f2e338d38"],["/static/media/4-modify-symbol.1364e60d.png","1364e60dbb6d9b059377200affe03740"],["/static/media/5-accept-changes.283cacba.png","283cacbae22b574f3d666e4e0c4500fc"],["/static/media/brand-identity.d1472659.png","d14726591fcb50106008f76c8240e995"],["/static/media/brand.d959a0db.png","d959a0db6e92ba54d93e47a6c4728884"],["/static/media/button.6f7f73f1.png","6f7f73f121661197a594c7de768d07aa"],["/static/media/colors.a503de64.png","a503de64e770c83f1e0f20c3b4f05f3b"],["/static/media/eu-aluekehitys-color.600ae7d2.svg","600ae7d2639f88c834a5208df18d94ab"],["/static/media/eu-aluekehitys-white.3d445953.svg","3d44595348978049bd467d09acae8989"],["/static/media/fontawesome-webfont.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["/static/media/fontawesome-webfont.912ec66d.svg","912ec66d7572ff821749319396470bde"],["/static/media/fontawesome-webfont.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["/static/media/fontawesome-webfont.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["/static/media/fontawesome-webfont.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"],["/static/media/git.79696515.png","796965154ce745d279673cee527f92e5"],["/static/media/howTo.f359df5c.png","f359df5c31e37fc04a8ed9fefd758564"],["/static/media/logo.a68a20ce.png","a68a20cec94a3928d9d6ac1a9a0007bd"],["/static/media/sketch.9bd9c288.png","9bd9c28824bda3f46fb1ee3af1fcf365"],["/static/media/sketch_narrow.46526486.png","46526486a4779e25a887971c7c598ba7"],["/static/media/slack.77ae23c1.png","77ae23c1a23fb5b132ea6ea7512f2767"],["/static/media/type.2dc7ae0d.png","2dc7ae0d3b1e80b02ad9f630ab490706"],["/static/media/typography.f4b2a05f.png","f4b2a05fb40c0a631c47314f3b5ab72c"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});
importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js"
);

const { registerRoute } = workbox.routing;
const { NetworkFirst } = workbox.strategies;
const { CacheableResponse } = workbox.cacheableResponse;

registerRoute(new RegExp(".*"), new NetworkFirst());

// let CACHE_NAME = "krypt_V_1";
// let urlsToCache = ["/"];

// // Install a service worker
// self.addEventListener("install", (event) => {
//   // Perform install steps
//   console.log("install Start");
//   event.waitUntil(
//     caches.open(CACHE_NAME).then(function (cache) {
//       console.log("Opened cache");
//       return cache.addAll(urlsToCache);
//     })
//   );
// });

// // Cache and return requests
// self.addEventListener("fetch", (event) => {
//   event.respondWith(
//     caches.match(event.request).then(function (response) {
//       // Cache hit - return response
//       if (response) {
//         return response;
//       }
//       return fetch(event.request);
//     })
//   );
// });

// // Update a service worker
// self.addEventListener("activate", (event) => {
//   let cacheWhitelist = CACHE_NAME;
//   event.waitUntil(
//     caches.keys().then((cacheNames) => {
//       return Promise.all(
//         cacheNames.map((cacheName) => {
//           if (cacheWhitelist.indexOf(cacheName) === -1) {
//             return caches.delete(cacheName);
//           }
//         })
//       );
//     })
//   );
// });

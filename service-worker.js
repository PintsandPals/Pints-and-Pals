</> JaveScript

const CACHE_NAME = "pints-pals-cache-v1";

const urlsToCache = [
  "/",
  "/index.html",
  "/style.css",
  "/menu.js",
  "/subpage.html",
  "/Edi.html",
  "/about.html",
  "/contact.html"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
const CACHE_NAME = "salary-calculator-v1";

const FILES_TO_CACHE = [
  "/",
  "/Salary Calculator.html",
  "/Salary Calculator.css",
  "/Salary Calculator.js",
  "/Manifest.json"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(
      response => response || fetch(event.request)
    )
  );
});
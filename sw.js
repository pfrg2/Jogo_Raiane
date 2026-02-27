const cacheName = 'mantiqueira-v1';
const assets = [
  './',
  './index.html',
  './leaflet.js',
  './leaflet.css',
  './mapa_base.png',
  './fonts/playfair-display-v37-latin-700.woff2',
  './fonts/playfair-display-v37-latin-italic.woff2',
  './fonts/montserrat-v26-latin-regular.woff2',
  './fonts/montserrat-v26-latin-600.woff2'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(cacheName).then(cache => cache.addAll(assets)));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
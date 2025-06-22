const CACHE_NAME = 'kaneki-v1';
const urlsToCache = [
  './',
  './index.html',
  'https://kit.fontawesome.com/a076d05399.js',
  'https://i.pinimg.com/736x/a2/9a/e3/a29ae37cae647071d9b64fc162467af1.jpg',
  'https://concac1231231123.github.io/hmmmm/',
  'https://streamable.com/e/wjciv5?autoplay=1&muted=1',
  'https://lovechang.cn/wp-content/themes/lolimeow/assets/js/lib/sakura.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});

self.addEventListener('activate', event => {
  const whitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(names =>
      Promise.all(names.map(name => {
        if (!whitelist.includes(name)) return caches.delete(name);
      }))
    )
  );
});

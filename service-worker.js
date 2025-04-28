self.addEventListener('install', (e) => {
  console.log('Service Worker installed');
});

self.addEventListener('fetch', (e) => {
  // Optional: cache files or let all fetches pass through
  e.respondWith(fetch(e.request));
});

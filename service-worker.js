const CACHE_NAME = 'fleet-tracker-v1';
const urlsToCache = [
  '/FleetTracker1.0/',
  '/FleetTracker1.0/index.html',
  '/FleetTracker1.0/manifest.json',
  '/FleetTracker1.0/Black.svg',
  '/FleetTracker1.0/icon-192.png',
  '/FleetTracker1.0/icon-512.png',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
  // Add other important resources
];


self.addEventListener('install', (event) => {
  console.log('Service Worker installing');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Cache opened');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker activating');
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached response if found
        if (response) {
          return response;
        }
        // Otherwise fetch from network
        return fetch(event.request)
          .then((response) => {
            // Don't cache if not a valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            
            // Clone the response
            const responseToCache = response.clone();
            
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });
              
            return response;
          });
      })
  );
});

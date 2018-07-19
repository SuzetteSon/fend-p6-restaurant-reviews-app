self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open("rest-static-v1").then(function (cache) {
      cache.addAll([
        '/',
        'css/styles.css',
        'data/restaurants.json',
        'restaurant.html',
        'js/main.js',
        'js/restaurant_info.js',
        'js/dbhelper.js'
      ]);
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) return response;
      return fetch(event.request);
    })
  );
});
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('static')
            .then((cache) => {
                return cache.addAll([
                    './Carta/index.html',
                    './Carta/style.css',
                    './Carta/app.js',
                    './Carta/img/valete.png',
                    './Carta/img/dama.png',
                    './Carta/img/rei.png',
                    './Carta/img/icon-192x192.png',
                    './Carta/img/icon-512x512.png'
                ]);
            })
    );
});

self.addEventListener('activate', (event) => {
    console.log("Ativando o service worker...", event);
    return self.clients.claim();
});

// Interceptação de solicitações para servir do cache quando offline
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                return response || fetch(event.request);
            })
    );
});

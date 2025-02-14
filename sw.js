self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('static')
      .then ((cache) => {
          cache.add('./Carta/index.html')
           cache.add('./Carta/style.css')
           cache.add('./Carta/app.js')
           cache.add('./Carta/img/valete.png')
           cache.add('./Carta/img/dama.png')
           cache.add('./Carta/img/rei.png')
           cache.add('./Carta/img/icon-192x192.png')
           cache.add('./Carta/img/icon-512x512.png')
           ;
      })
    );
  });
 
  self.addEventListener('activate',(event) => {
    console.log("ativando o serviço worker...",event)
    return self.clients.claim()
})
 
//interceptação (solicitação https servindo em cache quando off-line)
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
        .then((response) => {
            if(response) {
                return response
            } else {
                return fetch(event.request)
            }
        })
    )
})
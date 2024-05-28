const CACHE_NAME = 'biblia-tetelestai-cache-v1';
const urlsToCache = [
  '/',
  '/biblia-tetelestai.html',
  '/acf.html',
  '/ara.html',
  '/dicio.html',
  '/english.html',
  '/english2.html',
  '/french.html',
  '/spanish.html',
  '/versododia.html',
  '/anotacoes.html',
  '/bible.html',
  '/1.png',
  '/2.png',
  '/3.png',
  '/4.png',
  '/5.png',
  '/6.png',
  '/cor.png',
  '/styles.css',  // Adicione aqui qualquer arquivo CSS usado pelo seu site
  '/app.js'  // Adicione aqui qualquer arquivo JS usado pelo seu site
];

// Instalando o Service Worker e cacheando recursos
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Interceptando requisições de rede
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});

// Atualizando o Service Worker
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

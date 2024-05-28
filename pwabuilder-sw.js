const CACHE_NAME = 'biblia-tetelestai-cache-v1';
const urlsToCache = [
  '/Biblia/',
  '/Biblia/biblia-tetelestai.html',
  '/Biblia/acf.html',
  '/Biblia/ara.html',
  '/Biblia/dicio.html',
  '/Biblia/english.html',
  '/Biblia/english2.html',
  '/Biblia/french.html',
  '/Biblia/spanish.html',
  '/Biblia/versododia.html',
  '/Biblia/anotacoes.html',
  '/Biblia/bible.html',
  '/Biblia/1.png',
  '/Biblia/2.png',
  '/Biblia/3.png',
  '/Biblia/4.png',
  '/Biblia/5.png',
  '/Biblia/6.png',
  '/Biblia/cor.png',
  '/Biblia/styles.css',  // Adicione aqui qualquer arquivo CSS usado pelo seu site
  '/Biblia/app.js'  // Adicione aqui qualquer arquivo JS usado pelo seu site
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

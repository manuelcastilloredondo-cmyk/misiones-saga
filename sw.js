/* Service worker de Luc Z: permite instalar la app y usarla sin conexión.
   Con conexión, siempre intenta traer la versión nueva; sin conexión, usa la guardada.
   Al añadir una misión nueva, súmala a ARCHIVOS y cambia VERSION. */
const VERSION = 'lucz-v3';
const ARCHIVOS = [
  './', 'index.html', 'mision.html', 'manifest.webmanifest',
  'css/estilo.css', 'js/motor.js', 'js/sagas.js',
  'img/logo-luc-z.png', 'img/favicon-32.png', 'img/favicon-64.png', 'img/apple-touch-icon.png',
  'img/icono-192.png', 'img/icono-512.png',
  'misiones/feudo-01.js', 'misiones/feudo-02.js', 'misiones/feudo-03.js', 'misiones/feudo-04.js', 'misiones/feudo-05.js',
  'misiones/feudo-06.js', 'misiones/feudo-07.js', 'misiones/feudo-08.js', 'misiones/feudo-09.js',
  'misiones/materia-01.js', 'misiones/materia-02.js', 'misiones/materia-03.js', 'misiones/materia-04.js',
  'misiones/materia-05.js', 'misiones/materia-06.js', 'misiones/materia-07.js',
  'misiones/verso-01.js', 'misiones/verso-02.js', 'misiones/verso-03.js', 'misiones/verso-04.js',
  'misiones/verso-05.js', 'misiones/verso-06.js', 'misiones/verso-07.js'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(ARCHIVOS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const propio = new URL(req.url).origin === self.location.origin;
  if (propio) {
    // Primero la red (versión nueva, comprobando siempre con el servidor); si no hay conexión, la copia guardada.
    e.respondWith(
      fetch(req, { cache: 'no-cache' }).then(r => {
        if (r.ok) { const copia = r.clone(); caches.open(VERSION).then(c => c.put(req, copia)); }
        return r;
      }).catch(() => caches.match(req, { ignoreSearch: true }).then(r => r || caches.match('index.html')))
    );
  } else {
    // Fuentes e imágenes de fuera: la copia guardada si existe; si no, red y se guarda.
    e.respondWith(
      caches.match(req).then(g => g || fetch(req).then(r => {
        const copia = r.clone(); caches.open(VERSION).then(c => c.put(req, copia)); return r;
      }).catch(() => g))
    );
  }
});

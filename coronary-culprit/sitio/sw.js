/* Offline support for the hosted copy (cliffreid.com/culprit/), so it works as an iPhone home-screen app with no signal. */
const CACHE = 'culprit-4dc071848e';
const FILES = ["./", "manifest.webmanifest", "fonts/Barlow-400-latin-ext.woff2", "fonts/Barlow-400-latin.woff2", "fonts/Barlow-500-latin-ext.woff2", "fonts/Barlow-500-latin.woff2", "fonts/Barlow-600-latin-ext.woff2", "fonts/Barlow-600-latin.woff2", "fonts/BarlowCondensed-500-latin-ext.woff2", "fonts/BarlowCondensed-500-latin.woff2", "fonts/BarlowCondensed-600-latin-ext.woff2", "fonts/BarlowCondensed-600-latin.woff2", "fonts/BarlowCondensed-700-latin-ext.woff2", "fonts/BarlowCondensed-700-latin.woff2", "fonts/IBMPlexMono-400-latin-ext.woff2", "fonts/IBMPlexMono-400-latin.woff2", "fonts/IBMPlexMono-500-latin-ext.woff2", "fonts/IBMPlexMono-500-latin.woff2", "fonts/fonts.css", "icons/apple-touch-icon.png", "icons/icon-192.png", "icons/icon-512.png", "icons/icon-maskable-512.png", "three.min.js"];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys()
    .then((keys) => Promise.all(keys.filter((k) => k.startsWith('culprit-') && k !== CACHE).map((k) => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', (e) => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== location.origin) return; // feedback and usage posts go straight to the network
  if (req.mode === 'navigate') {
    // The page: the latest version when the network answers within 4 s, otherwise the saved copy
    const saved = () => caches.match('./');
    const net = fetch(req).then((r) => {
      if (r.ok) { const copy = r.clone(); caches.open(CACHE).then((c) => c.put('./', copy)); }
      return r;
    });
    e.respondWith(new Promise((resolve) => {
      let done = false;
      const finish = (r) => { if (!done && r) { done = true; resolve(r); } };
      net.then(finish, () => saved().then((r) => finish(r || Response.error())));
      setTimeout(() => saved().then(finish), 4000);
    }));
    return;
  }
  e.respondWith(caches.match(req).then((hit) => hit || fetch(req)));
});

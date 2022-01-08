function broadcastMessage(msg) {
    self.clients.matchAll().then((clients) => {
        console.log(`Got (${msg}) ${clients.length} clients`);
        for (const c of clients) {
            console.log(`Sending ${msg} to client ` + JSON.stringify(c));
            c.postMessage({ txt: "Here is your worker" });
        }
    });
}
const staticResources = [
    '/',
    '/index.html',
    '/global.css',
    '/favicon.png',
    '/build/bundle.css',
    '/build/bundle.js'
];
const cacheName = "static-v1";
self.addEventListener('install', (evt) => {
    evt.waitUntil(caches.open(cacheName).then((cache) => {
        return cache.addAll(staticResources);
    }).then(() => console.log("Installation successful")));
});
self.addEventListener('activate', (evt) => {
    evt.waitUntil(caches.keys().then((keyList) => {
        return Promise.all(keyList.map((key) => {
            if (key.startsWith('static-') && key != cacheName) {
                return caches.delete(key);
            }
        })).then(() => console.log("Activation successful"));
    }));
});
self.addEventListener('message', (evt) => {
    console.log("Got message", evt.data, evt.source);
    broadcastMessage("as reply");
});
self.addEventListener('push', (evt) => {
    console.log("Got push", evt);
});
self.addEventListener('fetch', (evt) => {
    evt.respondWith(caches.match(evt.request).then((response) => {
        return response || fetch(evt.request);
    }));
});


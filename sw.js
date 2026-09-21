const PREFIX='filmoteka-'+new URL(self.registration.scope).pathname+'-';
const CACHE=PREFIX+'1b98fc838e93';
const ASSETS=['./','./index.html','./manifest.webmanifest','./favicon.svg','./apple-touch-icon.png','./icon-192.png','./icon-512.png'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)));});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith(PREFIX)&&key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',event=>{const request=event.request;if(request.method!=='GET'||!request.url.startsWith(self.registration.scope))return;
if(request.mode==='navigate'){event.respondWith(fetch(request).then(response=>response.ok?response:caches.match(new URL('./index.html',self.registration.scope).href).then(cached=>cached||response)).catch(()=>caches.match(new URL('./index.html',self.registration.scope).href)));return;}
event.respondWith(caches.match(request).then(cached=>cached||fetch(request)));});

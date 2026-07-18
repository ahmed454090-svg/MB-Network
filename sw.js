// PushAlert aur baaki assets ko handle karne ke liye optimized logic
self.addEventListener('fetch', (event) => {
    // PushAlert ki files ko cache mat karo, unhe seedha network se aane do
    if (event.request.url.includes('pushalert.co')) {
        return;
    }

    event.respondWith(
        fetch(event.request)
            .catch(() => {
                return caches.match(event.request);
            })
    );
});

// Service Worker Cleanup Script
// This unregisters any existing service workers and clears caches
// Run once to cleanup PWA from user devices

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then(function(registrations) {
    for(let registration of registrations) {
      console.log('[SW Cleanup] Unregistering service worker:', registration.scope)
      registration.unregister()
    }
  })
}

if ('caches' in window) {
  caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        console.log('[SW Cleanup] Deleting cache:', cacheName)
        return caches.delete(cacheName)
      })
    )
  }).then(function() {
    console.log('[SW Cleanup] All caches cleared')
  })
}

console.log('[SW Cleanup] Service worker cleanup complete')

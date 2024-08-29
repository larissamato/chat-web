export const clearCache = () => {
  window.caches
    ? window.caches.keys().then(names => {
        names.forEach(name => {
          caches.delete(name)
        })
      })
    : null
}

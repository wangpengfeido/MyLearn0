this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll(['/140dealFailRequest/index.html']);
    })
  );
});

this.addEventListener('fetch', function(event) {
  event.respondWith(
    // 首先匹配资源，匹配不到就请求网络，网络请求不到就返回错误页
    caches.match(event.request).then(function() {
      return resp || fetch(event.request).then(function(response) {
        // 当请求到没有缓存的资源时，将其缓存
        // 将response复制添加到缓存，再将原response返回
        return caches.open('v1').then(function(cache) {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    }).cache(function(){
      return caches.match('/140dealFailRequest/error.html');
    })
  );
});

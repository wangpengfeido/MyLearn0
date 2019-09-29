this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll(['/130fetch/index.html']);
    })
  );
});

// 缓存资源被请求时，会触发fetch事件
this.addEventListener('fetch', function(event) {
  // 使用respondWith方法劫持http响应
  event.respondWith(
    // caches.match可以对网络请求的资源和缓存资源进行匹配。匹配是通过url和vary header
    // caches.match(event.request),

    // Response可以创建自定义response。
    // new Response('hello', { headers: { 'Content-Type': 'text/html' } })

    // 直接fetch网络请求
    // fetch(event.request)

    // 可以组合使用。例如先进行网络请求，请求不到调用本地缓存,没有缓存自定义响应
    fetch(event.request)
      .then(success => success, error => caches.match(event.request))
      .then(success => success || new Response('nothing'), error => new Response('nothing'))
  );
});

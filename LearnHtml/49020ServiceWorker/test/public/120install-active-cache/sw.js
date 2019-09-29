this.addEventListener('install', function(event) {
  // waitUtil确保在其中的代码执行完之前不会安装完成
  event.waitUntil(
    // 使用caches.open创建一个版本的缓存
    caches.open('v1').then(function(cache) {
      // 版本缓存创建成功后添加缓存的资源
      return cache.addAll(['/120install-active-cache/index.html']);
    })
  );
  // 安装完成后，service worker就会被激活
});

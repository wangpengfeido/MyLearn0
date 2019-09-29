const currentVersion = 'v2';

this.addEventListener('install', function(event) {
  console.log('..................install');
  event.waitUntil(
    caches.open(currentVersion).then(function(cache) {
      return cache.addAll(['/150update/index.html']);
    }),
    // 在waiting阶段，等待正在运行sw停止。如果跳过它，则不再等待，直接activate
    this.skipWaiting(),
  );
});

this.addEventListener('fetch', function(event) {
  event.respondWith(
    caches
      .match(event.request)
      .then(function(resp) {
        return (
          resp ||
          fetch(event.request).then(function(response) {
            return caches.open(currentVersion).then(function(cache) {
              cache.put(event.request, response.clone());
              return response;
            });
          })
        );
      })
      .catch(function() {
        return caches.match('/150update/error.html');
      })
  );
});

// 安装完成后触发激活。可以在其中清理缓存
// 清理缓存不只可以在这里清理，也可以在其他地方，如安装时
// 需要注意的是，如果资源在清理前加载完成了，仍然还是加载的清理之前的资源，需要在下次刷新时生效。
// 所以最好可以保证能在加载资源之前清理完成（waitUntil可以做到这一点，因为它会阻塞其他事件）
self.addEventListener('activate', function(event) {
  console.log('..................active');
  var cacheWhitelist = [currentVersion];
  event.waitUntil(
    caches.keys().then(function(keyList) {
      console.log(keyList);
      return Promise.all(
        keyList.map(function(key) {
          if (cacheWhitelist.indexOf(key) === -1) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});

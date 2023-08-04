import { a } from './sw-export.js';

// 必须使用 self
self.addEventListener('install', function (event) {
  console.log('------------install', a);
  this.skipWaiting();
});

self.addEventListener('activate', function (event) {
  console.log('------------activate', a);
  this.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.url.includes('test-fetch')) {
    console.log('----------test-fetch', event);
  }
});

const oldFetch = self.fetch;
const newFetch = (...args) => {
  console.log("======================changed fetch");
  return oldFetch(...args);
};
self.fetch = newFetch;

this.addEventListener("install", function (event) {
  console.log("install");
});
this.addEventListener("activate", function (event) {
  console.log("activate");
  self.clients.claim();
});

// 错误
this.addEventListener("fetch", async function (event) {
  console.log("---sw fetch----", event.request.url);
  if (event.request.url.includes("/a")) {
    event.respondWith(fetch(event.request));
  }
});


this.addEventListener("install", function (event) {
  console.log("install");
});

this.addEventListener("fetch", function (event) {
  console.log("11111111111", event.request);
  event.respondWith(
    fetch("https://localhost:3111/a/index.html")
  );
});

this.addEventListener("install", function (event) {
  console.log("install");
});

this.addEventListener("fetch", function (event) {
  console.log("11111111111", event.request);
  event.respondWith(
    fetch("https://localhost:3011/910test/1210fetch-other-html/index2.html")
  );
});

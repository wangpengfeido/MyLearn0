this.addEventListener("install", function (event) {
  console.log("------------install");
});
this.addEventListener("activate", function (event) {
  console.log("------------activate");
  self.clients.claim();
});

this.addEventListener("fetch", async (event) => {
  const client = await this.clients.get(event.clientId);
  client.postMessage("hello from sw.");
});

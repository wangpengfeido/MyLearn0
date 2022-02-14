this.addEventListener("install", function (event) {
  console.log("------------install");
});
this.addEventListener("activate", function (event) {
  console.log("------------activate");
  self.clients.claim();
});

this.addEventListener("fetch", async (event) => {
  console.log("----------------", this.clients, event.clientId);
  const client = await this.clients.get(event.clientId);
  console.log("---------client", client);
});

const channel = new BroadcastChannel("test");

channel.onmessage = function (event) {
  console.log("index03 worker=========receive message", event);
};

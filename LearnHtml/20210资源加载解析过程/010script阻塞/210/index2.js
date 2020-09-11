const startTime = Date.now();
while (true) {
  if (Date.now() - startTime > 5 * 1000) {
    break;
  }
}
dom_text.innerHTML += "the first script run over...<br/>";
console.log("the first script run over...");

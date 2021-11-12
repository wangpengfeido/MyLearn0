let i = 1;

async function init() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
  i = 2;
}

document.querySelector('#do').addEventListener('click', async () => {
  console.log('-----------', i);
  await init();
  console.log('===============', i);
});

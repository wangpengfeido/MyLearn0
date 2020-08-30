new Promise(function (resolve, reject) {
  resolve(0);
})
  .then(undefined, function (params) {
    console.log("1:reject", params);
  })
  .then(
    function (params) {
      console.log("2:resolve", params);
    },
    function (params) {
      console.log("2:reject", params);
    }
  );

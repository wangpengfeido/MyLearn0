// function asyncAddValue(value, callback) {
//   setTimeout(() => {
//     callback(value + 1);
//   }, 1000);
// }

// class Task {
//   constructor(task) {
//     this.succeed = false;
//     this.maps = [];
//     task(() => {
//       this.succeed = true;
//     });
//   }

//   static of(task) {
//     return new Container(task);
//   }

//   fmap(f) {
//     return Container.of(f(this.__value));
//   }
// }

//在上例中，this的类型仍然是any，如果使用--noImplicitThis就会报错，此时可使用this参数
namespace N010040050030 {
  let a = {
    arr: ["x", "y", "z"],
    //指定this参数
    //this参数并非真正的参数，它出现在列表最前面
    createPicker: function (this, x) {
      console.log("x:", x);
      //此时这个this类型为typeof a
      return () => this.arr[1];
    },
  };

  let picker = a.createPicker("xxx");
  console.log(picker());
}

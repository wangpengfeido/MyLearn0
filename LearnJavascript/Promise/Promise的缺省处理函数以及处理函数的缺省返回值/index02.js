new Promise(function (resolve, reject) {
    reject(0)
}).then(function (params) {
    console.log('1:resolve',params)
    return 1
},function (params) {
    console.log('1:reject',params)
    return 2
}).then(function (params) {
    console.log('2:resolve',params)
},function (params) {
    console.log('2:reject',params)
})

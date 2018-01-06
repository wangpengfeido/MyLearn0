以下实验平台为node v8引擎
### 处理函数的缺省返回值
#### 实验1
````javascript
new Promise(function (resolve, reject) {
    resolve(0)
}).then(function (params) {
    console.log('1:resolve',params)
},function (params) {
    console.log('1:reject',params)
}).then(function (params) {
    console.log('2:resolve',params)
},function (params) {
    console.log('2:reject',params)
})
````
以上代码打印为
````
1:resolve 0
2:resolve undefined
````
#### 实验2
````javascript
new Promise(function (resolve, reject) {
    reject(0)
}).then(function (params) {
    console.log('1:resolve',params)
},function (params) {
    console.log('1:reject',params)
}).then(function (params) {
    console.log('2:resolve',params)
},function (params) {
    console.log('2:reject',params)
})
````
以上代码打印为
````
1:reject 0
2:resolve undefined
````
#### 结论
无论是resolve还是reject的处理函数，默认返回值都是Promise.resolve()
### 缺省处理函数
#### 试验1
````javascript
new Promise(function (resolve, reject) {
    reject(0)
}).then(function (params) {
    console.log('1:resolve',params)
}).then(function (params) {
    console.log('2:resolve',params)
},function (params) {
    console.log('2:reject',params)
})
````
以上代码打印为
````
2:reject 0
````
#### 试验2
````javascript
new Promise(function (resolve, reject) {
    resolve(0)
}).then(undefined,function (params) {
    console.log('1:reject',params)
}).then(function (params) {
    console.log('2:resolve',params)
},function (params) {
    console.log('2:reject',params)
})
````
以上代码打印为
````
2:resolve 0
````
#### 结论
缺省resolve处理函数时，其处理函数相当于
````javascript
function handleResolve(params) {
  return Promise.resolve(params)
}
````
缺省reject处理函数时，其处理函数相当于
````javascript
function handleResolve(params) {
  return Promise.reject(params)
}
````
### 返回其他值
#### 试验1
````javascript
new Promise(function (resolve, reject) {
    resolve(0)
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
````
以上代码打印为
````
1:resolve 0
2:resolve 1
````
#### 试验2
````javascript
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
````
以上代码打印为
````
1:resolve 0
2:resolve 2
````
#### 结论
无论是resolve还是reject的处理函数，`return value`都相当于是`return Promise.resolve(value)`

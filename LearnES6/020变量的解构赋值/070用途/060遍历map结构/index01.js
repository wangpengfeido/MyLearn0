/**
 * Created by w1036_000 on 2016/11/30.
 */
var map=new Map();
map.set('first','hello');
map.set('second','world');
////////////////////
for(let [key,value] of map){
    console.log(key,value);
}
////////////////////////////////
for(let [key] of map){
    console.log(key);
}
//////////////////////////////////
for(let [,value] of map){
    console.log(value);
}
const array = [2,4,6,7,8];
const newArray = array.map(Math.sqrt);
console.log("my array: ",...newArray);

function myFun(array){
   return array*2;
}

const res = array.map(myFun);
console.log("with Function:",...res);


let ans = 0;
const arr = [10,10,10];
arr.forEach(sum);

function sum(item){
    ans += item;
}

console.log(ans);
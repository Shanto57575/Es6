const arr = [1,2,3,4,5,6,7,8,9,10];

const arr3 = arr.filter(x => x%2 ===0);
console.log(...arr3);

const arr4 = arr.filter(x => x<=5);
console.log(...arr4);
const arr5 = arr.filter(x => x<=10)
console.log(...arr5);

const arr6 = arr.find(x => x<10);
console.log(arr6)

const arr7 = arr.find(x=> x%10===0);
console.log(arr7);

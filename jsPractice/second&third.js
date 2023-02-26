const arr = [33, 50, 79, 78, 90, 101, 30 ];
//filter method
const newArr = arr.filter(num => num%10===0);
const newArr2 = arr.find(num2 => num2%10===0);
console.log(newArr);
console.log(newArr2);
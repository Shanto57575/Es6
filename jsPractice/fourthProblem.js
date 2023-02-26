const arr = [1, 9, 17, 22];
//using loops
let sum = 0;
for(num of arr){
    sum += num;
}
console.log(sum);

//using reduce()
// In reduce function ...there will be two parameter and the two initialization 
// and in first initialization first one will be operation and the second one will be initial value;

const newArr = arr.reduce((previous,current) => previous+current, 0);
console.log(newArr);
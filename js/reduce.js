const arr = [1,2,3,4,5,6,7,8,9,10];

const allTotal = arr.reduce((previous,current) => previous+current, 0);

console.log(allTotal);

const arr2 = [1,2,3,4,5];

const multiplication = arr2.reduce((previous,current) => previous*current,1);
console.log(multiplication);

const all = arr2.reduce((prev,curr) => prev * curr,1);
console.log(all);
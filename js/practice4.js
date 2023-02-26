const firstArray = [1,2,3,7,8,9,4,5];
const secondArray = [6,10,43,1,2,5,10];

const newArray = (firstArray,secondArray) =>{
    const arr3 = firstArray.concat(secondArray);
    return Math.max(...arr3);
}

console.log(newArray(firstArray,secondArray));
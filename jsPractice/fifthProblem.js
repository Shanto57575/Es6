const people = [
    { name : "Mina", age : 20 },
    { name : "Rina", age : 15 },
    { name : "Tina", age : 22 }
];

//using loop
let sum = 0;
for(let i=0; i<people.length; i++){
   sum += people[i].age;
}
console.log(sum);

//using reduce() function

//1
let newArr = people.reduce((total,item) => {
    return total + item.age;
},0);
//2
const newArr2 = people.reduce((total,item) => total+ item, 0);
console.log(newArr);
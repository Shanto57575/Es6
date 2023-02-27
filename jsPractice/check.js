//......1.......
let x = 5;
x = 10;
const y = 15;
//.......2.......
let z = `the value of x is ${x} 
          and 
the value of y is ${y}`;
//.......3.1.......
const val = x => (x / 5);
console.log(val(10));
//.......3.2.......
const val2 = (x, y) => ((x + 2) * (y + 2));
console.log(val2(2,3));
//.......3.3.......
const val3 = (x, y, z) => {
    return x * y * z;
}
console.log(val3(1,2,3));
//.......3.4.......
const val4 = (a, b) => {
    a += 2;//4
    b += 2;//5
    return a * b;
}
console.log(val4(2,3));

//..........5........
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArr = arr.map(x => x * 5);
console.log(newArr);

//........6..........
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArray = array.filter(x => x % 2);
console.log(newArray);
//..........7...........
const obj = [
    { name: "shanto", age: 22, profession: "software Engineer", salary: 2000000 },
    { name: "Mamia", age: 21, profession: "Commercial Pilot", salary: 1200000 },
    { name: "shakib", age: 17, profession: "Chemist", salary: 1000000 },
]

const find = obj.find(x => x.salary === 1000000);
console.log(find);

//..........8..........
const newObj = {
    name: "shanto",
    age: 22,
    profession: "software Engineer",
    salary: 2000000,
};

const { name, age, ...rest } = newObj;
console.log(name,age,rest);

//...........9...........
const Arr = [3, 4, 6, 1, 2, 3, 10];
const [one, two, three, ...rest1] = Arr;
console.log(three);
//............10...........
const threePar = (x, y, z = 7) => x + y + z;
console.log(threePar(1, 2, 3));

//.........11..........
const object = {
    name : "shanto & mamia",
    age : 21.5,
    salary : {
       mySalary : 20000000,
       herSalary : 12000000,
    },
}
console.log(object.salary?.mySalary);//optional chaining
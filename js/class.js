// // class Instructor {
// //    name;
// //    designation = "web course Instructor";
// //    team = "web team";
// //    location;
   
// //    constructor(name,location){
// //      this.name = name;
// //      this.location = location;
// //    }
// //    startSession(time){
// //      console.log(`suppot session will start at ${time}`)
// //    }
// //    quiz(module){
// //     console.log(`please create quiz for module ${module}`)
// //    }
// // }

// // const amir = new Instructor('shanto','ctg');
// // console.log(amir);
// // console.log(amir.startSession('9.00'));
// // console.log(amir.quiz(32));  

// class Intro{
//     name;
//     address = "NewYork";
//     phone = "0000000000000001";
//     husband = "Shanto";
//     age;
    
//     constructor(name,age){
//         this.name = "Mamia";
//         this.age = 22;
//     }
//     study(time){
//        console.log(`I read books at ${time} o clock`);
//     }
//     exercise(gym){
//         console.log(`i will go to ${gym}`);
//     }
// }

// const all = new Intro('mamia',22);
// all.study('9');
// all.exercise('ctg');
// console.log(all);


const product = {
    name: 'Laptop',
    model:'Yoga 3',
    price:49000,
    dusk: '512SSD'
};
const {price} = product;
console.log(price)
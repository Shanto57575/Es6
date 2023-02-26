//2
const arrayFriends = ["Mamia","Rafayet","sanoar","afsar","shanto","shakib"];
const checkEven = (arrayFriends) =>{
    arrayFriends.push("saif")
    for(const friend of arrayFriends){
        if(friend.length%2==0){
            console.log(friend ,"Is even");
        }
        else console.log(friend ,"Is Odd");
    }
    return arrayFriends;
}
const result = checkEven(arrayFriends);
console.log(...result);//spread operator
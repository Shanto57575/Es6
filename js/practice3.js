const numbers = [5,10,2,3,4];//25+100+4+9+16

const square = (numbers) =>{
    const newNumbers = [];
    for(number of numbers){
        newNumbers.push(Math.pow(number,2));
        console.log(...newNumbers);
    }
    let sum = 0;
    for(number of newNumbers){
       sum += number;
    }
    console.log(sum);
    return sum/numbers.length;
}

console.log(square(numbers));
// Write a function called fizzbuzz that takes in one number and returns the following: 
// 	If the number is a multiple of 3, return Fizz
// 	If the number is a multiple of 5, return Buzz
// 	If the number is a multiple of both, return FizzBuzz
// 	Otherwise, just return the number.

//take in a number , return a string
/*
const fizzbuzz = (number) => {
    if(number % 5 === 0 && number % 3 === 0){
        return 'FizzBuzz';
    } else if (number % 5 === 0){
        return 'Buzz'
    } else if (number % 3 === 0){
        return 'Fizz'
    } else {
        return number.toString();
    }
}

console.log(fizzbuzz(1));
console.log(fizzbuzz(3));
console.log(fizzbuzz(5));
console.log(fizzbuzz(15));
*/

class FizzBuzz {
    constructor(upperLimit){
        this.upperLimit = upperLimit;
    }

    convertAll(){
        let numbersArray = [];
        for(let i = 0; i <= this.upperLimit; i++){
            numbersArray.push(this.convert(i));
        }
        return numbersArray;
    }

    convert(number){
        if(number % 5 === 0 && number % 3 === 0){
            return 'FizzBuzz';
        } else if (number % 5 === 0){
            return 'Buzz'
        } else if (number % 3 === 0){
            return 'Fizz'
        } else {
            return number.toString();
        }
    }
}

const fizzbuzz = new FizzBuzz(72);
//fizzbuzz.convert(1);
console.log(fizzbuzz.convertAll());
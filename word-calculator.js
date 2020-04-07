/*
# Word Calculator
## Part 1
Using Object-oriented programming, write a calculator that takes in a string sentence and returns the mathematical result it describes. For example: 
​
1. "What is 5?" should return 5.
2. "What is 5 plus 19?" should return 24.
3. "What is 18 divided by 6?" should return 3. 
​
## Part 2 - Extension
Enable the calculator to do multiple operations, for example: 
​
1. "What is 5 plus 7 plus 2?" should return 16.
2. "What is 3 plus 2 divided by 5?" should return 1.
3. "What is 4 plus 6 multiplied by 4?" should return 40.
​
## Part 3 - Extension ++
Allow the calculator to handle powers, for example: 
​
1. "What is 3 to the power of 4?" should return 81. (**)
​
## Part 4 - Extension +++
Add in error throwing for when incorrect inputs are entered. The following are examples of what should throw an error: 
​
1. "What is 7 cubed?"
2. "Who framed Roger Rabbit?"
3. "What is 3 plus plus 8?"
*/

//take the string and make it into an array
//take the first two items off the array and also the question mark (last)
//take out the 'by' - just replace all of these by empty string
//convert the operator to the operator
//put back into string
//run

const unimportantWords = ['What', 'is', 'the' , 'to' , 'by'];

class Calculation {
    constructor(question){
        this.question = question,
        this.deconstructed = this.deconstructQuestion();
    }

    deconstructQuestion(){
        let deconstructed = this.question
        deconstructed = deconstructed
                            .replace("?", "")
                            .replace("What","")
                            .replace("is", "")
                            .replace("by","")
                            .replace("multiplied","*")
                            //this needs to loop through to find several things to replace
                            .split(" ")
        return deconstructed;
    }

    //if array includes "word" replace (loop through array)

    doTheMath(){
        let answer = this.deconstructed.join('');
        return eval(answer);
    }
}

//try with add, minus etc

const questionOne = new Calculation("What is 5?");
console.log(questionOne.question);
console.log(questionOne.deconstructed);
console.log(questionOne.doTheMath());

const questionTwo = new Calculation("What is 5 multiplied by 6 multiplied by 7?");
console.log(questionTwo.question);
console.log(questionTwo.deconstructed);
console.log(questionTwo.doTheMath());


//console.log(5+3+4);
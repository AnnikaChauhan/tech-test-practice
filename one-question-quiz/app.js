const question = document.getElementById('question');
const answer = document.getElementById('answer');
const submit = document.getElementById('submit');
const correctOrNot = document.getElementById('correctOrNot');

//set the question and it's correct answer here!!
question.innerText = "Do you like puppies?";
const correctResponse = "Yes";

const evaluateIfAnswerIsCorrect = (result) => {
    if(result.toLowerCase() === correctResponse.toLowerCase()){
        correctOrNot.innerText = "That is the right answer!"
    } else {
        correctOrNot.innerText = "Wrong Answer, try again."
    }
}

submit.onclick = (event) => {
    event.preventDefault();
    evaluateIfAnswerIsCorrect(answer.value);
}
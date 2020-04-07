//write a function called wordsearch that takes in two arguments: a sentence and a word
//the function returns the number of times that word is found in the sentence

//e.g. "the cat in the hat" and "the" returns 2

    //this uses regex
const wordsearchAnnika = (sentence, word) => {
    const count = (sentence.match(new RegExp(word,"g"))).length;
    return count;
}
//console.log(wordsearchAnnika("the cat in the hat","the"));

//Ollie Solution:
const wordSearch = (sentence,word) => {
    let numberOfTimes = 0;
    const sentenceArray = sentence.split(" ");
    for(let sentenceWord of sentenceArray){
        if (sentenceWord === word) numberOfTimes ++;
    }
    return numberOfTimes;
}

//console.log(wordSearch("the cat in the hat","the"));

class Sentence {
    constructor(sentence){
        this.sentence = sentence;
        this.array = this.sentence.split(" ");
    }

    searchAll(){
        let searchObject = {};
        //could also do a for loop
        //the set would not allow for duplicates, but the search object set does this anyway, the new set is pushing the array of words into the set and weeding out the duplicates
        console.log(this.array);
        const uniqueWords = [...new Set(this.array)];
        console.log(uniqueWords);
        uniqueWords.forEach(wordInSentence => {
            searchObject[wordInSentence] = this.search(wordInSentence);
        })
        return searchObject;
    }

    search = (word) => (this.sentence.match(new RegExp(word,"g"))).length;
}

const search = new Sentence("the cat in the hat");
console.log(search.search("the"));
console.log(search.searchAll());
//console.log(search.search("cat"));
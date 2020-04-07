// 09: How do you check if two strings are anagrams of each other?
CheckIfTwoStringsAreAnagrams = (string1, string2) => {
    if( typeof string1 === "string" && typeof string2 === "string") {
        const charArray1 = string1.split('').sort();
        const charArray2 = string2.split('').sort();
        let truthyArray = [];
        if(charArray1.length === charArray2.length){
            for(i = 0; i < charArray1.length - 1; i++){
                if(charArray1[i] === charArray2[i]){
                    truthyArray.push(true);
                } else {
                    truthyArray.push(false);
                }
            }
        } else {
            return false;
        }
        if(truthyArray.includes(false)){
            return false;
        } else {
            return true;
        }
    } else {
        console.log("Invalid Input");
    }
}

console.log(CheckIfTwoStringsAreAnagrams('bobo', 'obob'), 'true');
console.log(CheckIfTwoStringsAreAnagrams('bobo', 'boo4b'), 'false');
console.log(CheckIfTwoStringsAreAnagrams('dog', 'god'), 'true');
// This test case fails
console.log(CheckIfTwoStringsAreAnagrams('gabety', 'gabmen'), 'false');

//Annika's extra tests to be extra cautious
console.log(CheckIfTwoStringsAreAnagrams('anagram', 'gramana'), 'true');
console.log(CheckIfTwoStringsAreAnagrams('anagram', 'grmana'), 'false');
console.log(CheckIfTwoStringsAreAnagrams('abcdefghijklmnop', 'mnopjklghidefabc'), 'true');
console.log(CheckIfTwoStringsAreAnagrams('abcdefghijklmnop', 'mnopjklhidefabc'), 'false');
console.log(CheckIfTwoStringsAreAnagrams(321, 123));
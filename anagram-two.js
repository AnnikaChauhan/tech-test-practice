// 09: How do you check if two strings are anagrams of each other?
checkIfTwoStringsAreAnagrams = (string1, string2) => {
    if( typeof string1 === "string" && typeof string2 === "string") {
        const charArray1 = string1.split('').sort().join();
        const charArray2 = string2.split('').sort().join();
        if(charArray1 === charArray2){
            return true;
        } else {
            return false;
        }
    } else {
        console.log("Invalid Input");
    }
}

console.log(checkIfTwoStringsAreAnagrams('bobo', 'obob'), 'true');
console.log(checkIfTwoStringsAreAnagrams('bobo', 'boo4b'), 'false');
console.log(checkIfTwoStringsAreAnagrams('dog', 'god'), 'true');
// This test case fails
console.log(checkIfTwoStringsAreAnagrams('gabety', 'gabmen'), 'false');

//Annika's extra tests to be extra cautious
console.log(checkIfTwoStringsAreAnagrams('anagram', 'gramana'), 'true');
console.log(checkIfTwoStringsAreAnagrams('anagram', 'grmana'), 'false');
console.log(checkIfTwoStringsAreAnagrams('abcdefghijklmnop', 'mnopjklghidefabc'), 'true');
console.log(checkIfTwoStringsAreAnagrams('abcdefghijklmnop', 'mnopjklhidefabc'), 'false');
console.log(checkIfTwoStringsAreAnagrams(321, 123));
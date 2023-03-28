/*
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/

// solution 

function reverseWords(str) {
    let arr = []
    let reWord
    let strToArr = str.split(" ")

    for (let i = 0; i < strToArr.length; i++) {
        reWord = strToArr[i].split("").reverse().join("")
        arr.push(reWord)
    }
    return arr.join(" ")
}
console.log(reverseWords("ibrahim elsawy"))
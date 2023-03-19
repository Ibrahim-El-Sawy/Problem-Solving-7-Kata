/*
DESCRIPTION:
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

// solution 1
function XO(str) {

    let o = 0;
    let x = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === "o") {
            o++
        } else {
            x++
        }
    }

    if (x == o) {
        return true
    } else {
        return false
    }
}
console.log(XO("oooxxx"))
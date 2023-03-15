/*
DESCRIPTION:
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/


// solution 1
function getCount(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === "a" || str[i].toLowerCase() === "e" || str[i].toLowerCase() == "i" || str[i].toLowerCase() === "o" || str[i].toLowerCase() === "u") {
            count += 1;
        }
    }
    return count;
}
console.log(getCount("slfjwoeiafdfneoao"))
/*
Task
Given a string str, reverse it and omit all non-alphabetic characters.

Example
For str = "krishan", the output should be "nahsirk".

For str = "ultr53o?n", the output should be "nortlu".

Input/Output
[input] string str
A string consists of lowercase latin letters, digits and symbols.

[output] a string
*/


// solution 


function reverseLetter(str) {
    let newStr = []
    for (let i = 0; i < str.length; i++) {
        if (Number.isInteger(parseInt(str[i])) || str[i] == "?") {} else { newStr.push(str[i]) }
    }
    return newStr.reverse().join("")
}
console.log(6 + 6)
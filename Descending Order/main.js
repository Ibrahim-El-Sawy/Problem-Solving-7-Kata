/*
DESCRIPTION:
Your task is to make a function that can take any 
non-negative integer as an argument and return it with 
its digits in descending order. Essentially, 
rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
*/

// sulotion 1

function descendingOrder(n) {
    let num = n.toString().split("").sort()
    let arr = []
    for (let i = num.length - 1; i >= 0; i--) {
        arr.push(num[i])
    }
    return Number(arr.join(""));
}
console.log(descendingOrder(334564641564))
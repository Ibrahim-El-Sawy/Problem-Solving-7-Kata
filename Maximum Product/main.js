/*
Task
Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

Notes
Array/list size is at least 2.

Array/list numbers could be a mixture of positives, negatives also zeroes .

Input >> Output Examples
adjacentElementsProduct([1, 2, 3]); ==> return 6
Explanation:
The maximum product obtained from multiplying 2 * 3 = 6, and they're adjacent numbers in the array.
*/

// solution 
function adjacentElementsProduct(arr) {

    let sum = 1
    let ar = []
    for (let i = 0; i < arr.length; i++) {
        sum = arr[i] * arr[i + 1]
        ar.push(sum)
    }
    return Math.max(...ar.slice(0, ar.length - 1))
}
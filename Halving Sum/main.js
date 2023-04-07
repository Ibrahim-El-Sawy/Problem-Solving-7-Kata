/*
Task
Given a positive integer n, calculate the following sum:

n + n/2 + n/4 + n/8 + ...
All elements of the sum are the results of integer division.

Example
25  =>  25 + 12 + 6 + 3 + 1 = 47
 */

// solution

function halvingSum(n) {
    let ar = [];
    let sum = 2
    ar.push(n)
    for (let i = 0; i <= n; i++) {

        ar.push(Math.trunc(n / sum))
        if (Math.trunc(n / sum) === 1) { break }
        sum += sum

    }
    return ar.reduce((a, b) => a + b)
}
console.log(halvingSum(30))
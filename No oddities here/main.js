/*
Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.
*/

// solution 


function noOdds(values) {
    return values.filter(a => a % 2 == 0)
}
console.log(noOdds([0, 3, 4, 6]))
/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

// solution 1

function findShort(str) {
    let arr = str.toString().split(" ")
    let wordShortest = arr[0]
    let mini = arr[0].length
    let max = arr[0].length
    for (let i = 0; i < arr.length; i++) {
        if (mini >= arr[i].length) {
            mini = arr[i].length
        }
    }
    return mini;
}

console.log(findShort("sgfg ghfds"))
/*
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.
*/
// solution 1

function highAndLow(numbers) {
    let n = numbers.trim().split(" ").sort();
    console.log(n)
    let max = n[0]
    let min = n[0]
    for (let i = 0; i < n.length; i++) {
        if (Number(max) <= Number(n[i])) {
            max = n[i];
        } else if (Number(min) >= Number(n[i])) {
            min = n[i];
        }
    }
    return `${max} ${min}`
}
console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))
console.log(highAndLow("2 -1 60 70"))

// solution 2

function highAndLow(numbers) {
    let n = numbers.trim().split(" ").map((e) => Number(e));
    console.log(n)
    let max = Math.max(...n)
    let min = Math.min(...n)
    return `${max} ${min}`
}
console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))
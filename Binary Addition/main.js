/*
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
*/


// solution 
function addBinary(num1, num2) {
    let sum = num1 + num2
    let arr = []
    for (let i = 0; i < 20; i++) {
        arr.push(`[${Math.trunc(sum % 2)}]`)
        sum = (sum / 2)
        if (Math.trunc(sum) === 0) {
            break
        }
    }
    return arr.reverse().join("")
}
console.log(addBinary(20, 10))
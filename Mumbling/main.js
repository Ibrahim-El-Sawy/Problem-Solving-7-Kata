/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/


// solution 1
function accum(s) {
    let arr = []
    for (let i = 0; i <= s.length; i++) {

        for (let r = 1; r <= i; r++) {
            if (r === 1) {
                arr.push(s[i - 1].toUpperCase())
            } else {
                arr.push(s[i - 1].toLowerCase())
            }
        }
        if (i != 0 && i != s.length) {
            arr.push("-")
        }
    }
    return arr.join("")
}
console.log(accum("ZpglnRxqenU"))
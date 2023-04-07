/*
Description:

We want to generate a function that computes the series starting from 0 and ending until the given number.

Example:
Input:

> 6
Output:

0+1+2+3+4+5+6 = 21

Input:

> -15
Output:

-15<0

Input:

> 0
*/

// solution

var SequenceSum = (function() {
    function SequenceSum() {}

    SequenceSum.showSequence = function(count) {
        let ar = []
        let sum = 0
        for (let i = 0; i <= count; i++) {
            sum += i
            ar.push(i)
            if (i === count) {
                break
            }
            ar.push("+")
        }
        return `${ar.join("")} = ${sum}`
    };

    return SequenceSum;

})();

console.log(SequenceSum.showSequence(6))
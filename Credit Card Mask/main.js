/*
Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples
"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""

// "What was the name of your first pet?"

"Skippy" --> "##ippy"

"Nananananananananananananananana Batman!"
-->
"####################################man!"
*/

// solution 

function maskify(num) {
    let nu = num.toString().split("")
    console.log(nu)
    let arr = []
    for (let i = 0; i <= nu.length; i++) {
        if (i === nu.length - 1) {
            arr.push(nu[i])
            break;
        }
        if (i != nu.length - 4) {
            arr.push("#")
        } else {
            arr.push(nu[nu.length - 4])
            arr.push(nu[nu.length - 3])
            arr.push(nu[nu.length - 2])
            arr.push(nu[nu.length - 1])
            break;
        }
    }
    return arr.join("").toString()
}
console.log(maskify(2121616116))
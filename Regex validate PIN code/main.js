/*
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false
*/

// solution 

function validatePIN(pin) {
    let pass = pin.split("").filter((a) => parseInt(a) || a === "0")
    if ((pin.length - pass.length) === 0 && pin.length === 4 || pass.length === 6) {
        return true
    } else {
        return false
    }
}

console.log(validatePIN("0000"))
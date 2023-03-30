/*
Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"

*/


// solution 
function removeUrlAnchor(url) {

    let arr = []
    for (let i = 0; i < url.length; i++) {
        if (url[i] === "#") {
            break
        } else {
            arr.push(url[i])
        }
    }
    return arr.join("")
}
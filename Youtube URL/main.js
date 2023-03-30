/*
https://www.youtube.com/embed/UN8oLGBNXpE - is correct for iframe

https://www.youtube.com/watch?v=UN8oLGBNXpE

http://www.youtube.com/watch?v=UN8oLGBNXpE

https://youtu.be/UN8oLGBNXpE
If we insert the first link in the iframe, it works, but another do not work.

Task:
Please write a function that converts the string in the correct format for the iframe.
 */

// solution 

function makeYoutubeLink(url) {
    mark = url.indexOf("=")
    let l = "https://www.youtube.com/embed/"
    mark = url.indexOf("=")
    if (mark != -1) {
        return l + url.substring(url.lastIndexOf("=") + 1, url.length)
    }

    return l + url.substring(url.lastIndexOf("/") + 1, url.length)
}
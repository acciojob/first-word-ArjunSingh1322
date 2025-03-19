function firstWord(s) {
    let arr = s.split(" "); // Split the string into an array of words
    return arr[0]; // Return the first word
}

// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));


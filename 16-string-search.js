// INDEX OF
/*
    Return the position of the first ocurrence or return -1 if not found
*/
let text = "Please locate where 'locate' occurrs!";
let index = text.indexOf("locate");


// LAST INDEX OF
/*
    The last ocurrence of a specified text in a string
*/
let text1 = "Please locate where 'locate' occurrs!";
let index1 = text1.lastIndexOf("locate");

// Both methods accept a second parameter as the startign position for the search


// search()
/*
    Accept regular expression for search
*/

let text2 = "Please locate where 'locate' occurrs!";
let index2 = text2.search("locate");

// Cannot take a second start position argument

// match
/*
    Returns an array containig the results of matching a string against a string
*/
let text3 = "The rain in SPAIN stays mainly in the plain";
text.match("ain");

// match all
// returns an iterator of all matches


// includes
let text4 = "hello world, welcome to the universe";
text.includes("world"); // return true
// starts at position 12
text.includes("world", 12); // false
// is case sensititve
// es6

// starts with
// return true if a string begins with a specified value
let text5 = "Hello world, welcome to the universe";
text5.startsWith("hello");
// is case sensitive
// es6
// second parameter is where position start ("hello", 12)

// ends with, the same as starts with
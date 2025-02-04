
// JS STRING METHODS

// charAt() - Return a character at a given position in a string
var text = "HELLO WORLD";
text.charAt(2); // return L

// charCodeAt() - RETURN THE CODE OF CHARACTER AT A SPECIFIED INDEX
let text = "HELLO WORLD";
let char = text.charCodeAt(0);

// at() - ECMA2022 - Return a character at a given position in a string
const name = "W3 Schools";
name.at(-1); // return l
// Allow use of negative indexes while chartAt() do not


// PROPERTY ACCESS []
let text = "Hello World";
let char = text[0]; // return H


// EXTRACT STRING PARTS

// slice() 
let text = "Banana, maçã, Kiwi";
let part = text.slice(7, 13);

// substr()
let str = "Apple, Banana, Kiwi";
let part = str.substr(7, 6);
// The difference is that the second parameter specifies the length of the extracted part.


// Convert to upper case and lower case

// toUpperCase() - UPPERCASE
let text = text.toUpperCase;

// LOWECASE
let textLow = textLow.toLowerCase();

// CONCAT
// Join two or more strings
let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat("", text2); // Hello World

// All the strings methods returna a new string - They dont modify the original string
// Strings are immutable

// trim() - Remove whitespace from both sids of a string
let text1 = " Hello World ";
let text2 = text1.trim();

// ECMA 2019
// trimStart() - Remove whitespace only from the start of a string
text2.trimStart();

// trimEnd() - Remove whitespace only from the end of a string
text2.trimEnd();


// ECMA 2017
// PADDING

// PADSTART 
let text = "5";
let padded = text.padStart(4, "x"); // 0005

// PADEND
let text = "5";
let padded = text.padEnd(4, "x"); // 0005

// REPEAT
// ECMA 6
let text = "Hello Wolrd";
let result = text.repeat(2); // Hello World Hello World


// REPLACE
/* 
    Does not change the string
    Returns a new string
*/
let text = "Please, visit Cachoeira do Sul";
let newText = text.replace("Cachoeira do Sul", "Porto Alegre");

// REPLACE ALL
/* 
    Allow specify a regular expression instead of a string
    Doenst work with ie
*/
text = text.replaceAll(/Cats/g, "dogs");

// SPLIT
// Convert string to array
text.split(","); // return [please, visit cachoeira do sul]
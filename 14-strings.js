// THERE IS NO DIFFERENCE BETWEEN SINGLE OR DOUBLE QUOTES

// TEMPLATE STRINGS
let text = `template's "strings"`;
// Are not supported in internet explorar

// STRING LENGTH
let text = 'DOIAWJDWIOAJDWAIODJWAIDJASOIDJA';
let length = text.length;

// ESCAPE CHARACTERS
let text = "We are so called "Vikings" from the north.";
// The string will be chopped to "we are the so called"

/// TO SOLVE THIS, YOU CAN USE AN BACKLASH ESCAPE CHARACTER

let text = "we are the so called \"Vikings\" from the north";

/*
    \' => ' => single quote
    \" => " => double quote
    \\ => \ => backslash

    originally designed to contro typewriters, not html
    \b => backspace
    \f => form feed
    \n => new line
    \r => carriage return
    \t => horizontal tabulator
    \v => vertical tabulator
 */


// JS STRINGS AS OBJECTS
let y = new String("Mat");

// DO NOT CREATE STRINGS OBJECTS. SLOW DOWN EXECUTION SPEED

// Comparing two js objects always returns false
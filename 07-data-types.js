/*
    JavaScript has 8 datatypes

    String
    Number
    Bigint
    Boolean
    Undefined
    Null
    Symbol
    Object

    The object datatype
        objects
        arrays
        dates
        maps
        sets
        intarrays
        floatarrays
        promises
*/

// JS evaluates expressions from left to right

let x = 16 + 4 + "Volvo"; // 20Volvo

let x = "Volvo" + 16 + 4; // Volvo164

// TYPES ARE DYNAMIC
let x;
x = 5;
x = "Jhon";

// JS STRINGS

// Can use single ou double quotes

let carName = "Volvo XC60";

let answer = "He is called 'Jhonny'";

let answer2 = 'He is called "Jhonny"';


// JS NUMBERS 

// Are store as decimal numbers (floating point)

let x1 = 34.00;
let x2 = 34;


// EXPONENTIAL NOTATION (SCIENTIFIC)

let y = 123e5;
let z = 123e-5;

// JS NUMBERS ARE ALWAYS ONE TYPE: DOUBLE (FLOATING POINT) 64bit


// JS BIGINT
let x = BigInt("12312312312321312312321312321312");


// JS BOOLEANS
let x = 5;
let y = 5;
let z = 6
(x == y)
(x == z)


// JS Arrays
const cars = ["Saab", "Volvo", "BMW"];


// JS Objects 
const person = { firstName: "Mateus", lastName: "Fortes", age: 32 }


// TYPEOF - Find the type of a variable
typeof ""; // returns "string"
typeof 0; // returns "number"


// UNDEFINED
let car; // value is undefined, type is undefined
car = undefined; // value is undefined, type is undefined


// EMPTY VALUES
let car = ""; // the value is "", the typeof is "string" 
 
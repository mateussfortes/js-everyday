// 4 ways
 // automatically, var, let and const

 // automatically
 x = 5;
 y = 6;
 z = x + y;

// always declare variables before use

// var
var x = 5;

// var was used in all js code from 1995 to 2015
// let and const were add to js in 2015
// var keyword should be used in code written for old browsers

// let
let x = 5;

// const 
const x = 5;

/* 
    when use var, let or const?
        always delcare variables
        always use const if the value should not be change
        always use const if the thype should not changed (Arrays and Objects)
        only use let if you cant use const
        Only use var if you MUST support old browsers

    variables are containers to store data
*/

/*
    JAVASCRIPT IDENTIFIERS
    All js variables must be identified with unique names
    These unique names are called identifiers
    The general rules for constructing names for variables are:
        - Names can contain letters, digits, underscores and dollar signs
        - Names must begin with a letter
        - Names can also begin with $ and _ 
        - Names are case sensitive (y and Y are different variables)
        - Reserved words (like js keyords) cannot be used as names   
*/

// JS identifiers are case-sensitive

// The equal sign (=) is an "assignment", not an equal to operator
// The "equal to" operator is writen like ==

// IF YOU PUT A NUMBER IN QUOTES, IT WILL BE TREATED AS A TEXT STRING

const pi = 3.14;
let person = "Jhon Doe";
let answer = 'Yes i am!';

// DECLARING A JAVASCRIPT VARIABLE

let carName;


// ONE STATEMENT, MANY VARIABLES

let person = "John Doe", carName = "Volvo", price = 200;


// VALUE = UNDEFINED

var carName; // undefined


// REDECLARING JS VARIABLES
var carName = "Volvo";
var carName; // sill volvo value


// You cannot re-declare a variable with let or const
// This will not work
let carName = "Volvo";
let carName;


// JAVASCRIPT ARITHMETIC 

let x = 5 + 2 + 3;

// Strings wil be concatenated

let x = "Jhon" + " " + "Doe";

let x = "5" + 2 + 3; // this will result 523

// if you put a number in quotes, the rest of the numbers will be 
// treated as strings, and concatenated

let x = 5 + 2 + "3"; // this will result 73


// JAVASCRIPT DOLLAR SIGN $
// Is trat like a normal letter

let $ = "Hello World";
let $$$ = 2;
let $myMoney = 5;

// Is not very common but professional programmers use it as an alias
// for the main ffuncitno in a JavaScript library


// THE SAME IS VALID FOR UNDERSCORE _

// Is not very common in js, but a convention among professional
// programmers is to use it as an alias for "private (hidden)" variables




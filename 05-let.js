/*
    The let keyword was introduced in ES6(2015)
    Variables declared with let have block scope
    Variables declared with let must be declared before use
    Variables declared with let cannot be redeclared in the same scope
*/

// INTRODUCED IN ECS6

// Variables declared inside {} block cannot be accessed from outside
{
    let x = 2;
}
// x cannot be used here

// GLOBAL SCOPE
{
    var x = 2
}
// x can be used here


// CANNOT BE REDECLARED
let x = "Jhon Doe"
let x = 0;
// With var you can do this


// REDECLARING VARIABLES
// Redeclaring a variable inside a block will also redeclare the variable inside a block

var x = 10;
// x = 10
{
    var x = 2;
    // x = 2
}
// x = 2

// Using let
let x = 10;
{
    let x = 2;
    // here x is 2
}
// here x is 10

// REDECLARING
let x = 3;
{
    let x = 2;
}
{
    let x = 3
}
// All alowed


// LET HOISTING
carName = "Veloster";
var carName;
// This is ok

// This is error
carName = "Veloster";
let carName;
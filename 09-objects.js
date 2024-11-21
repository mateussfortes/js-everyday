/*

    Na vida real, objetos são coisas como: casas, pessoas, animais ou otras coisas

*/

// PROPRIEDADES DO OBJETO
// car.name = fiat

// MÉTODOS DO OBJETVO
// car.start()

// JS OBJECTS
const car = {type:"Hyundai", model:"Veloster", color: "White"};

// Its commom practice to declare objects with const

/*
    How to define a js object
    - Using an object literal
    - Uusin the new keyword
    - Using an object constructor
*/

// object literals are also called object initializers
// name:value pairs are also called key: value pairs

// CREATING A JS OBJECT
const person = {
    name: "Mateus",
    lastName: "Fortes",
    age: 32
};


// USING THE KEYWORD new Object()
const person = new Object();
person.firstName = "Jhon";


/*
    Para melhor leitura, simplicidade e performance, use literal
*/


// Accesing object properties
person.lastName;
person["lastName"];


// JS OBJECT METHODS

const person2 = {
    name: "Mateus",
    lastName: "Fortes",
    fullName: function() {
        this.name + " " + this.lastName;
    }
}

// IN JS, OBJECTS ARE KING

/*
    Almost everything is a objct
    Objectrs are objects
    Maths are objects
    Functions are objects
    Dates are objects
    Array are objects
    Maps are objects
    Sets are objects
    All values, except primitives are objcts
*/


// JS PRIMITIVES

/*
    String
    number
    boolean
    null
    undefined
    symbol
    bigint
*/

// Primitive values are imutable


// JS OBJECTS ARE MUTABLE

// If person is object, the following statement will not create
// a copy of person

const x = person;

// the object x is not a copy of person, the object x is person


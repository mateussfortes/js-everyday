/*
    CONST CANNOT BE REDECLARED
    CONST CANNOT BE REASIGNED
    CONST HAVE BLOCK SCOPES
*/

// CANNOT BE REASSIGNED

const PI = 3.1415;
PI = 3.14;
PI = PI + 3.14;

// MUST BE ASSIGNED

const PI;
PI = 3.14;
// THIS WILL GENEGERATE AN ERROR

/*
    WHEN TO USE JS CONST?
    When you know that the value will not change
    Use const when you declare
    - A new array
    - A new object
    - A new function
    - A new regexp
*/

/*
    CONSTANT OBJECT AND ARRAYS

    The keyword const is a little misleading
    It does not define a constant value. It defines a constant reference to a value
    Because of this you can not:
        Reassign a constant value
        Reassign a constant array
        Reassign a constant object

    But you can:
        Change the elements of a const array
        Change the properties of a const object
*/

// CONSTANT ARRAYS

// You can change the elements of a constant array

const cars = ["Veloster", "New Beatle", "Honda 2000"];

// you can cahnge an element
cars[2] = "Myura";

// you can add an element
cars.push("Audi");

// BUT YOU CANNOT REASSIGN THE ARRAY 
const cars = ["Saab", "Volvo", "BMW"];

cars = ["Toyota", "Volvo", "Audi"];


// CONSTANT OBJECTS

const car = {type: "Hyundai", year: "2012", color: "black"};

// you can change a property
car.color = "white";

// you can add a property
car.owner = "Mateus";

// BUT YOU CAN NOT REASSIGN A OBJECT
const car = {type: "Hyundai", year: "2012", color: "black"};

car = {type: "Hyundai", year: "2012", color: "black"};


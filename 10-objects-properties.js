/*

    An object is an unordered collection of properties
    Properties are the most important parts of js objects
    Properties can be changed, added, deleted, and some
    are read only

*/

// ADD NEW PROPERTIES
person.nationality = "English";

// DELETE PROPERTIES
// The delete keyword deletes a property from an object

const person = {
    firstName: "Jhon",
    lastName: "Doe",
    age: 50
};

delete person.age;

// this will delete both property and value


// NESTED OBJECTS
myObject = {
    name: "John",
    myCars: {
        car1: "Ford"
    }
};

// access
myObject.myCars.name;
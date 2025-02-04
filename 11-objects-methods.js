/*

    Are actions that can be performed on objects
    A method is a function definition stored as a property value

*/

const person = {
    firstName: "Mateus",
    lastName: "Fortes",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

// If you invoke the function without (), i will execute as a funcion
name = person.fullName();

// if you invoke without (), it will return the function definition
name = person.fullName;

// ADD A NEW METHOD TO AN OBJECT
person.name = function () {
    return this.firstName + " " + this.lastName;
}

// TO UPPERCASE
person.name = function () {
    return (this.firstName + " " + this.lastName).toUpperCase();
}
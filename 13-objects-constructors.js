// It is considered a good practice to name constructor functions
// with uppercases

function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
}
// In the constructor function, this has no value
// The value of this will become the new object

const myMother = new Person('Rosane', 'Silveira', 60);

// PROPERTY DEFAULT VALUES
function Person2(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.nationality = 'English';
}

// ADD A PROPERTY TO AN OBJECT
myMother.nationality = "Brazilian";
// The new property will be added to myMother

// ADD A PROPERTY TO A CONSTRUCTOR
// You can NOT add a new property to an object construct
Person.nationality = "English";

// To add a new property, add prototype
Person.prototype.nationality = "English";

// CONSTRUCTOR FUNCTION METHODS
// PROPERTY DEFAULT VALUES
function Person3(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.fullName = function() {
        return this.firstName + " " + this.lastName;
    }
}

// ADDING A METHOD TO AN OBJECT
myMother.changeName = function(name) {
    this.lastName = name;
}

// ADDING A METHODO TO AN CONSTRUCTOR
// you CANNOT add a new method to an object construc
// You must use the function prototype

// ADDING A METHOD TO AN OBJECT
myMother.prototype.changeName = function(name) {
    this.lastName = name;
}


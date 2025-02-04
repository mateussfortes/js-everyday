// DISPLAY A JVASCRIPT OBJCT WILL DISPLAY [object Object]
const person = {
    name: "Mat",
    age: 33
};

document.getElementById("demo").innerHtml = person;
// [object Object]

// AS A STRING
person.name + " " + person.age;

// IN A LOOP
let text = "";
for(let x in person) {
    text += person[x] + " ";
}
// text wil be: Mat 33


// USING Object.values()
const myArray = Object.values(person);
// myArray will output: mat, 33


// OBJECT ENTRIES - Object.entries()

const fruits = {Bananas:20, Oranges:20, Apples: 500};
var text = "";
for(let [fruit, value] in Object.entries(fruits)) {
    text += fruit + ": " + value + "<br>";
}
// will output Bananas: 20 Oranges: 20 Apples: 500

// USING JSON.stringfy()
// JS objects can be converted to a string with JSON method
let jsonStringfy = JSON.stringify(person);
// will display: {"name": "Mat", "age": 33}
/**
 * *************
 * Comience aqui
 * *************
 */
//Call Modules
 const math = require("./math");
const greet = require("./greetings/"); //call index.js
const hello = require("./greetings/hello");

//Use Functions from Modules
console.log(math.add(4, 5));
console.log(math.divide(4, 5));
console.log(math.multiply(4, 5));
console.log(math.substract(4, 5));
console.log(greet.greet("Joe"));
console.log(hello.sayHello("Carlos"));
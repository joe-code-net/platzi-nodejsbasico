/**
 * 
 * *************
 * Comience aqui
 * *************
 * 
 */
const greet = require("./src/greet");

greet.emit("clap");
greet.emit("shout", "Hello");
greet.emit("call", "Joe", (name) => {
    console.log("Estamos llamdo a: ", name);
})

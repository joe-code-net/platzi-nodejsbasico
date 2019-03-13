/**
 * 
 * *************
 * Comience aqui
 * *************
 * 
 */
const fs = require("fs");
const ops = require("./src/fileops");

let incValue;

fs.readFile("./resources/number.txt", "utf8", (err, text)=>{
    if (err) throw err;
    const numbers = text.split("\n").map(n=>Number(n));
    console.log(numbers);
    incValue = ops.incrementValues(numbers);
    console.log(incValue);
    fs.writeFile("./resources/numbernew.txt", incValue.join("\n"), (err, result)=>{
        if(err) throw err;
    });
})


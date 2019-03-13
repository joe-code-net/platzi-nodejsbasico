/**
 * 
 * *************
 * Comience aqui
 * *************
 * 
 */
 const call = require("./src/call");

//console.log(call.sync("Joe"));
//call.withCallback("Joe", call.sync);

//console.log(call.withPromise("Joe"));
call.withPromise("Joe").then(name => { console.log(name) });


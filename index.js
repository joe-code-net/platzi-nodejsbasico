/**
 * 
 * *************
 * Comience aqui
 * *************
 * 
 */
const call = require("./src/call");

//call.greet("Joe");
//call.withPromise("Joe", "Net")
//        .then(n=>console.log(n));

async function callWithPromise() {
    const fullName0 = await call.withPromise("Joe", "Net")
    console.log(fullName0);

    fullName1 = call.withPromise("Carlos", "Net")
    console.log(fullName1);

    fullName2 = await call.withPromise("Emir", "Net")
    console.log(fullName2);
}

callWithPromise();
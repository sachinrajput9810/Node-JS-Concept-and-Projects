const first_module = require("./first-module")

// console.log("Sum of 3 and 4 is " + first_module.sum(3, 4));

// console.log("Subtraction of 5 and 2 is " + first_module.sub(5, 2));
// console.log("Multiplication of 6 and 7 is " + first_module.mul(6, 7));

// console.log("Hello from the Node module system example!");

try {
    const divResult = first_module.div(10, 2);
    console.log("Division result: " + divResult);
} catch (error) {
    console.error("Error: " + error.message);
}
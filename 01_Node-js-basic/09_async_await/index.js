// function delayTime(time){
//     return new Promise(  (resolve ) =>  {
//         setTimeout(resolve, time)
//         console.log(`Waiting for ${time} milliseconds...`);
//     })  
// } 

// async function main(name){
//     await delayTime(2000)
//     console.log(`Hello ${name}`);
// }

// main('Async World');

console.log('------------------starting------------------------------------');
async function division(a , b) {
    try {
        if (b === 0) {
            throw new Error('Division by zero is not allowed');
        }
        const result = a / b;
        console.log(`The result of ${a} / ${b} is: ${result}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }

}

async function mainDivision() {
    console.log('Starting division operation...');
    await division(10, 2);
    await division(10, 0);
    console.log('Division operation completed');
}
mainDivision();
console.log('-------------------ending-----------------------------------');
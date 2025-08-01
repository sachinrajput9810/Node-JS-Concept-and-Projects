function delayTime(time){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(time);
        }, time);
    })
}

// console.log('Starting promises...');
// delayTime(1)
//     .then(  () => {
//         console.log('2 seconds have passed');
//     })
//     .catch(err => {
//         console.error('An error occurred:', err);
//     })
//     .finally(() => {
//         console.log('Promise completed');
//     });



console.log("------------------------------------")
function divide(a , b){
     return new Promise((resolve , reject) => {
        if(b === 0){
            reject('Division by zero is not allowed');
        }
        resolve(a / b);
    } )
} 


console.log('Starting division promise...');
divide(10,0)
    .then(  (result ) => {
        console.log(`Result of division: ${result}`);
    })
    .catch(err => {
        console.error('An error occurred:', err);
    })
    .finally(() => {
        console.log('Division promise completed');
    });
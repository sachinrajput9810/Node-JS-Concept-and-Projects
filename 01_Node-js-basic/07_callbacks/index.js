const fs = require('fs');
function person(name , callbackFunction) {
    console.log("Person's name is: " + name);
    callbackFunction();
}

function sayHello(){
    console.log("Hello! how are you?");
}

person("John", sayHello);



fs.readFile('input.txt' , 'utf-8' , (err , data) => {
    if(err){
        console.error("Error reading file:", err);
        return
    }
    console.log("File content:", data);
})
const path = require('path')

console.log("Directory name : " , path.dirname(__filename))
console.log("File name :: "  , path.basename(__filename))

console.log("File ext :: " , path.extname(__filename))
 
const joinedPath = path.join(__dirname , "text" , "myText.txt")
console.log("Joined path : " , joinedPath)
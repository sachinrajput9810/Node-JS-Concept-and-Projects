const fs = require('fs')
const path = require('path')

const dataFolder = path.join(__dirname , "data")
if(!fs.existsSync(dataFolder)){
    fs.mkdirSync(dataFolder)
    console.log("Data folder created")
}

// sync way of creating a file
// and writing to it

const filePath = path.join(dataFolder , "text.txt")
fs.writeFileSync(filePath , "My first file in Node.js")
console.log("File created") 

const readFileContent = fs.readFileSync(filePath , "utf-8")
console.log("File content:", readFileContent)

fs.appendFileSync(filePath , "\nThis is appended text.")
console.log("File appended")

console.log("Updated file content:\n", fs.readFileSync(filePath, "utf-8"))

// Asynchronous way of file operations
const asyncFilePath = path.join(dataFolder , "async.txt")
fs.writeFile(asyncFilePath , "Async file data is here" , (err) => {
    if(err){
        throw err
    }else{
        console.log("Async file created")
    }


    fs.readFile(asyncFilePath , "utf-8", (err, data) => {
        if(err){
            throw err
        }else{
            console.log("Async file content:", data)
        }
    
    fs.appendFile(asyncFilePath , "\nThis is appended text in async file" , (err) => {
        if(err){
            throw err
        }else{
            console.log("Async file appended")
        }
        fs.readFile(asyncFilePath, "utf-8", (err, updatedData) => {
            if(err){
                throw err
            }else{
                console.log("Updated async file content:\n", updatedData)
            }
        }) 
    })
})
})
const fs = require('fs');

fs.readFile('input.txt' , 'utf-8' , (err , data) => {
    if(err){
        console.error("Error reading file:", err);
        return
    }
    console.log("File content:", data);
    const modifiedData = data.toUpperCase();

    fs.writeFile('output.txt' , modifiedData , (err) => {
        if(err){
            console.error("Error writing file:", err);
            return;
        }
        console.log("File written successfully with modified content." );

        fs.readFile('output.txt', 'utf-8', (err, outputData) => {
            if(err){
                console.error("Error reading output file:", err);
                return;
            }
            console.log("Output file content:", outputData);
        });

    })

})


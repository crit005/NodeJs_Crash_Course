const fs = require('fs');
const path = require('path');
const colors = require('colors');

// * Create Folder

// fs.mkdir(path.join(__dirname,"/test"),{},err=>{
//     if(err) throw err;
//     console.log('Folder created...');
// })

//* Create and write to file
// fs.writeFile(
//     path.join(__dirname, "test", "hello.text"),
//     "Hello World",
//     err => {
//         if (err) throw err;
//         console.log("File written to...".green);
//     }
// )

//* Append File
// fs.appendFile(
//     path.join(__dirname, "test", "hello.text"),
//     "\nHello World",
//     err => {
//         if (err) throw err;
//         console.log("File written to...".green);
//     }
// )

//* Read File
// fs.readFile(path.join(__dirname, "test",'hello.text'), 'utf8', (err,data) => {
//     if (err) throw err;
//     console.log(data.green);
// })
//* Rename file
fs.rename(path.join(__dirname, "test", 'hello.text'),
    path.join(__dirname, "test", 'hello_rename.text'), (err) => {
        if (err) throw err;
        console.log("File renamed...");
    })
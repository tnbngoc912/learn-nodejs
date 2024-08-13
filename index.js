const fs = require('fs')

//Blocking
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8')
// console.log(textIn);

// const textOut = `this is: ${textIn}`;
// fs.writeFileSync('./txt/output.txt', textOut);
// console.log('File written')

//Non-blocking
fs.readFile('./txt/start.txt','utf-8',(err, data) => {
     console.log(data);
})
console.log('Will read file')

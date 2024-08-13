// fs stands for file system (fs is a library)
const fs = require('fs');  //this is how we import file library

const data = fs.readFileSync('a.txt', 'utf8');
console.log(data);

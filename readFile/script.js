// fs stands for file system (fs is a library)
const fs = require('fs');  //this is how we import file library


// this is synchornously:- means all code executing one-by-one ---------------------------
const data = fs.readFileSync('a.txt', 'utf8');
const data1 = fs.readFileSync('b.txt', 'utf8');
console.log(data);
console.log(data1);




//Asynchornously code:- means all code executing simuntaniously----------------------------
//here done print first because while  functions calling "done" is loged .
function print(err,data){
    if(err){
        console.log("File not Found");
        
    }else{
        console.log(data);

    }
    
}
fs.readFile('a.txt', 'utf8', print);
 fs.readFile('b.txt', 'utf8', print);

console.log('done!');

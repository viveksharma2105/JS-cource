// dates
 let mydate = new Date()
 console.log(mydate.toString());
 console.log(mydate.toJSON());
 console.log(mydate.toLocaleDateString()); // only date
 console.log(mydate.toTimeString()); // only for time
 console.log(mydate.toDateString()); // only for date & day
 console.log(mydate.toLocaleString()); // best format

 //let myCurrrentDate = new Date(2005 , 0 , 21) // months are start with 0 in js
 //let myCurrrentDate = new Date(2005 , 0 , 21 , 5 , 3) // 5,3 is time
//let myCurrrentDate = new Date("21-01-2005") //another way 
let myCurrrentDate = new Date("2005-01-21") // another way
console.log(myCurrrentDate.toLocaleString());

//  let myTimeStamp = Date.now() //date.now()= give the current date
//  console.log(myTimeStamp); 
// console.log(myCurrrentDate.getTime());// time in milisec 

console.log((Math.floor)(Date.now()/1000)); //time im sec

let newDate = new Date()
console.log(newDate.getFullYear());
console.log(newDate.getDay());
console.log(newDate.toLocaleString('default',{
    hourCycle:"h11",
    weekday:"long",
}));



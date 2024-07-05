const num = 1000;
console.log(num); //default  number datatype

const num1 = new Number(100)
console.log(num1); //specific number datatype

console.log(num1.toFixed(2));  //decial value
console.log(num1.toLocaleString());  //convert number to string

const newval = 123.873
console.log(newval.toPrecision(3));

const thousands =1000000;
console.log(thousands.toLocaleString()); // for in indian we can use ('en-In')

//------------------------------------------MATHS-----------------------------------------
// console.log(Math);
// console.log(Math.abs(-500));  //absolute value
// console.log(Math.round(57.6)); // round off
// console.log(Math.ceil(4.6));  // if the number is like 4.(something) it give the upper value means 5
// console.log(Math.floor(4.6)); //if the number is like 4.(something) it give the  lower value means 4
// console.log(Math.min(3,34,12,34,12,1));   //lowest value in array
// console.log(Math.max(34,341,3,468,945)); //highest value

const min = 10;
const max = 40;
console.log(Math.floor(Math.random() *(max-min +1))+min);
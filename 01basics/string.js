//-------------------------------COMPARISION-----------------------------

// console.log(2!=1);
// console.log(2<1);
// console.log(2>1);
// console.log(2==1);
// console.log(2>=1);
// console.log(2<=1);
console.log(null >= 0); // only this will give true rest'll give false always (null is treated as 0 in most of the case)
console.log(null == 0);
console.log(null > 0);

console.log(undefined > 0);  // we should avoid comparision with nulland undefine always
console.log(undefined == 0 ); // it'll always give false when we compare with undefine

console.log( "2" === 2); // === use to check the number as well as datatype  ( known as strick check)

//-----------------------------------STRING---------------------------

let name = "vivek";
let repoCount =  50;

console.log(`my name is ${name} my repo count is ${repoCount}`); //best way 


//another way

let gameName = new String('KnightMoon');
console.log(gameName[0]);  //[0] = 0 is the key position of the string

console.log(gameName.length); //no. of elements
console.log(gameName.toUpperCase()); //make all the alphabet capital
console.log(gameName.charAt(6)); // position specifier by number
console.log(gameName.indexOf('o')); //position specifier by element
console.log(gameName.substring(0,5)); // print value of specific given range

let newStr = gameName.slice(-8,5)
console.log(newStr);
 
let trimfun = "    vivek    "
console.log(`WithoutTrim= ${trimfun}`);
console.log(`trim = ${trimfun.trim()}`) //useless space triming

const url = "https://google.com/google%20crome"
 console.log(url.replace('%20','-')); //replace character in string with another character
  
 console.log(url.includes('google')); //find the elements in string
 
 const newstr2 = "website-google-crome"
 console.log(newstr2.split('-')); // split and make the arrey of the string
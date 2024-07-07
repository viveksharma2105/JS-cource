const arr = [2,3,4,5,6];
console.log(arr[3]);

const newarr1 = ["ironman", "spiderman", "batman"]

const newarr = new Array(5,31,32,33);
console.log(newarr);

newarr.push(31,32,"add") //add element
console.log(newarr);

newarr.pop() //remove last element
console.log(newarr);

newarr.unshift(21) //add element in 0th index and shift all the elent by +1 index
console.log(newarr);

newarr.shift() //remove first element 
console.log(newarr);

console.log(newarr.includes(21)); //is 21 exist ?
console.log(newarr.indexOf(21));  //index of 21  (if it is not exist then it will give -1)

const arr1 = newarr.join();  //converts elements of arr in string
console.log(arr1);

//slice splice
const myar = [0,1,2,3,4];
const myar1 = myar.slice(1,3)
console.log(myar1);

const myar2 = myar.splice(0,2)
console.log(myar2); // splice

console.log(myar); //original array  ::: interview que = splice affect  the original array ,slice doesn't

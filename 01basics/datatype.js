"use strict"; //treat all js code in new version

// alert("hello")  // not run beacuse we are using node js not browser
console.log(3+3);

let istrue = false
let name = "javaScript"


// -------------primitive datatypes in js -------------
//number = 2 power 52
//boolean = true/false
//bigInt 
//String = ""
//null = standalone value
//undefined 
//symbol

const score = 33
const score1 = 33.5

const isLoggin = false

const outSideTemp = null
let email;

const id = Symbol('123')
const id1 = Symbol('123') //although they have same value but in result they have unique value

console.log(id === id1 ); //check

console.log( typeof null);



//----------------non primitive----------------------
//array
//objects
//functions

const heros = ["Ironman" , "Shaktiman"]; //array

let myobj = {
    name: "vivek",
    age: 19,
}

const myfun =  function(){
    console.log("hellow");
}
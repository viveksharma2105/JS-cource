const user= {
    username: "vivek",
    price: 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
        //console.log(this); //show all current context    . use in current scope
    }
}

console.log(user.welcomeMessage());
user.username ="Sam"  // second user
console.log(user.welcomeMessage());
console.log(this ); // this will print the empaty "{}" because current context is empty

//++++++++++++++++++++++++ ARROW FUNCTION ++++++++++++++++++++
 
//  function chai(){
//      const userName = "vivek"
//    console.log(this );  // gives all the in formation like performance , timeout , time in etc
//console.log(this.userName); //undefine  (no run)

 // }
 //chai()


//() => {} //arrow function syntex;

const add1 = (num1,num2) => {   // syntex1
    return num1+num2
}
console.log(add1(3 ,4));



const add2 = (num1 , num2) => {return num1+num2}     //syntex2   . If we use paranthesis then we must have to use return 
console.log(add2(21,21));


const add3 = (num1 , num2) => (num1+num2)             //syntex3
console.log(add3(12,12));


const add4 = (num1 , num2) => (num1+num2)             //syntex4
console.log(add4(12,12));


// const add5 = () => {username: "vivek"}               // return object syntex but this is wrong
// console.log(add5);

const add5 = () => ({username: "vivek"})               // return object syntex but this is wrong
console.log(add5());


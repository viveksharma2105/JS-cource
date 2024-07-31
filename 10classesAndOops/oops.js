// const User = {
//     name:'vivek',
//     loginCount:8,
//     signIn:true,
//     getUserDetails: function(){
//         console.log("get all user Details");
//     }
// }


// console.log(User.getUserDetails());


// function Userone(name, loginCount, signIn){
//     this.name = name;
//     this.loginCount = loginCount;
//     this.signIn = signIn;
//     return this
// }

// // const usone = Userone("Vivek", 21, true);     
// // const usertwo = Usertwo("Sharma", 05, true);  ////this is wromg syntex because 
// // console.log(usone);            ////this line print second value by overwrite the first even the call is od first one

// const usone = new usone("Vivek", 21, true);     
// const usertwo = new usertwo("Sharma", 509, true);  
// console.log(usone);


const User = {
    name: 'vivek',
    loginCount: 8,
    signIn: true,
    getUserDetails: function(){
        console.log("get all user Details");
    }
}

User.getUserDetails(); // Correct usage of the method

function Userone(name, loginCount, signIn){
    this.name = name;
    this.loginCount = loginCount;
    this.signIn = signIn;
}

// Correct usage of new keyword with constructor functions
const usone = new Userone("Vivek", 21, true);     
const usertwo = new Userone("Sharma", 509, true);

console.log(usone);
//console.log(usone.name, usone.loginCount, usone.signIn);
console.log(usertwo);
//console.log(usertwo.name, usertwo.loginCount, usertwo.signIn);

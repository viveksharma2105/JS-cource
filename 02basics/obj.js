//singleton

//obj literal
const mysymbol = Symbol("key21")
const Jsuser = {

    name: "vivek",
    age: 19,
    location: "hassanpur",
    isloggin:false,
    email:"v@google.com",
    lastloggin: ["mon", "tue"],
    "full name" : "Vivek Sharma",
    [mysymbol] : "key05"

}

console.log(Jsuser.email);
console.log(Jsuser["email"]);          //best way to call objvalue
//console.log(Jsuser.fullname);       // this is wrong because undefault objvalue are call by sq brackets
console.log(Jsuser["full name"]);     // this is how we call the objvalue
console.log(Jsuser[mysymbol]);        //most important syntex for interview

Jsuser.email = "vsh@google.com";     // override
console.log(Jsuser.email);

//Object.freeze(Jsuser)          // to freeez the value or to protect it from override

//Jsuser.email = "sharma@google.com";     // the value will not override
//console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("hello JS-user");
}
console.log(Jsuser.greeting());
 
 

 Jsuser.greetingtwo = function(){
    console.log(`hello JS-user ,${this.name}`);
 }
console.log(Jsuser.greetingtwo());


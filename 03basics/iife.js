//+++++++++++++++++++++++IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IFFE)++++++++++++++++++++++++
// WE USE THIS FOR IMMEDIATE FUNCTION EXECUTION AND TO REMOVE THE GLOBLE SCOPE POLLUTION
//                SYNTEX--   (function)();           ---  2 paranthesis use and semi colen is must use while we use iife

//SIMPLE FUNCTION-------------
function cricket(){
    console.log(`Hitman , Run Machine`);
}
 cricket();

 //+++++++++++ IIFE Function +++++++++++

 (function iife(){
    //named iife
    console.log(`This is IIFE Function `);
 })();                                                        //semi colen must use because iife don't know where it have to end the function 


 

 ( (name) => {
    //simple iife
    console.log(`This is arrow function, ${name}`);
 })(`vivek`);


















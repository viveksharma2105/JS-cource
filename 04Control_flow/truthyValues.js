//In this we only check wether email is exist or not , we are not comparing the mail with string that the email is correct or incorrect
const userEmail = []   // here  empty aray is default true , empty string is default false value

if (userEmail) {
    console.log("Have Email");
    
}
else{
    console.log("Don't have Email");
}

//+++++++++++ FALSEY VALUES =   false , Bigint On , "" , 0 , -0 , undefine , null , NaN

//+++++++++++ TRUTHY VALUES =   true , " " , "0" , function(){} , []



if (userEmail.length==0) {
    console.log("Array is empty");
    
}


const emptyObj = {}
if (Object.keys(emptyObj).length==0) {
    console.log("Object is empty");
    
}


// Nullish coalescing operator (??) : null undefine
let val1;
//  val1 = 5 ?? 10
 //val1 = null ?? 10
 //val1 = 15 ?? undefined

 console.log(val1);

 // Ternatory operator

const teaPrice = 100
teaPrice <= 80 ? console.log("teaPrice is more than 80") : console.log("less than 80");
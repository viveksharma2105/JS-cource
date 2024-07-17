// if statements
 const temp = 21

if(temp === 21){
    console.log(`Temp is 21`);
}


if(temp < 50){
    let power = `fly`
    console.log(`The power : ${power}`);
}



const bal = 1000
if(bal < 500){
    console.log(`Balance is less than 500`);
}
else if(bal < 700){
    console.log(`Balance is less than 700`);
}
else{
    console.log(`Balance is greater than 700`);
}




const userloggin = true
const debitCard = true

if(userloggin && debitCard){
    console.log("Allow to buy Course");
}


const logginFromGoogle = true
const logginFromGmail = false
if(logginFromGmail || logginFromGoogle){
    console.log("User is loggin");
}
//FOR

for (let index = 0; index <= 10; index++) {
    const element = index;
    if (element==5) {
        //console.log("5 , is best number");
    }
   // console.log(element);
    
}




// Table print
for (let i = 0; i <= 10; i++) {
    //console.log(`Outer loop begain : ${i}`);
    for (let j = 1; j <= 10; j++) {
       // console.log(i + " * " + j + " " + " = " + i*j); ;
        
    }    
}




const arr = ["flash", "batman", "superman"]

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    
    //console.log(element);
}



//Break abd Continue
for (let i = 1; i <= 20; i++) {
    if(i==5){
        console.log(`5 is detected`);
        break;
    }
    console.log(i);   
}



for (let i = 1; i <= 20; i++) {
    if(i==5){
        console.log(`5 is detected`);
continue
    }
    console.log(i);   
}
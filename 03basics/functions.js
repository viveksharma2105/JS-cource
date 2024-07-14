// functions

// function addTwoNumbers(number1, number2) {           //this functionomly print not define the value
//     // let result = number1+number2;
//     console.log(result);

// }
//  addTwoNumbers(5,4)
 
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function addTwoNumbers(number1, number2) {
    // let result = number1+number2;
    // return result;

    return number1 + number2; //anotherway 
}

const result =addTwoNumbers(5,4)
 //console.log("result: ", result);  // check result value is given or undefined



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function userlogginMessage  (username){
    if(!username){
        console.log("please enter your username")
        return                                         
    }

    return `Welcome ${username}!`
}

//console.log(userlogginMessage("vivek")); 


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function userlogginMessage  (username = "Sam"){  // in this we have a default value sam  so no need to write if condition
//     return `Welcome ${username}!`
// }

// console.log(userlogginMessage()); 


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// most important oprator
 function addCartItem(...num1){ // use in case of unknown multiple parameters . // this will print the array of all the items  //...num1 will convert all arguments into array  
    

    return num1
 }

 console.log(addCartItem(100,200,300,400,500))



 //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//   function addCartItem(val1, val2,...num1) {    // it only prints val1 & val2 rest of the items goes in array and not printed
//     return num1 
//   }

//   console.log(addCartItem(100,200,300,400,500));


const user ={
    username: "Cheetah",
    price: 100,

}

function handleobject(anyobject){
    console.log(`hello ${anyobject.username} , price ${anyobject.price}`);
}

handleobject(user)

// handleobject({                      // we  can override this
//     username : "vansh",
//     price:344
// })


const myArr = [100,200,300,400,500]

function returnArrValue(getArr){
    return myArr[3];
}

console.log(returnArrValue(myArr))
//console.log(returnArrValue([100,200,300,400,500]));   //another way

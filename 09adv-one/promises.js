//+++++++++++++++++++ PROMISE +++++++++++++++++++++++++++++++
//do an async task
    //DB calls , cryptography

const promiseOne = new Promise(function(resolve , reject){
    
    setTimeout(function(){
       // console.log("Async task is complete");
        resolve();
    },1000)
    
})

 promiseOne.then(function(){
    //console.log('Promise consume');
 })



 //without any variable simple promise
new Promise(function(resolve,reject){
    setTimeout(function(){
        //console.log("Async-2 is complete");
        resolve()
    },1000)
}).then(function(){
   // console.log("Promise-2 is consume");
})  




//user information
const PromiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){

  resolve({userName: 'vivek', userMail: 'vivek@gmail.com'});
    },100)
})

PromiseThree.then(function(user){
    //console.log(user);
})


//ERROR

const promiseFour = new Promise(function(resolve, reject){
setTimeout(function(){
    const error = true;  // write true to get error
    if(!error){
        resolve({username: 'cheetah', userPwd:'123'})
    }else{
        reject('Something went wrong')
    }
},1000)

})

// promiseFour.then(function(user){
//     console.log(user.username);
    
//  }).catch(function(error){
//     console.log(error);
//  })


 ////we can also do chaining 
 promiseFour.then(function(user){
    console.log(user);
    return user.username
 }).then(function(username){
    console.log(username);
 }).catch(function(error){
    console.log(error);
 }).finally(()=> console.log('The promise is either resolved or rejected'))





 //new syntex by async await:-
 const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        const error = false;  //write true for getting error 
        if(!error){
            resolve({username:'Sam' , userid : 'sam@gmail.com'})
        }else{
            reject('ERROR: JS went wrong')
        }
    },1000)
   
 })

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()




//getting fetch with api

// async function gettingAllUsers(){
// try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//      const data = await response.json();
//      console.log(data);
// } catch (error) {
//     console.log(error);
    
// }

// }
// gettingAllUsers()



//By .then & .catch
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()

}).then((data)=>{
    console.log(data);
})
.catch(function(error){
    console.log(error);
})
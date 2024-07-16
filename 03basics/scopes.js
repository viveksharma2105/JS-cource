function one(){
    const username = "vivek"
    function two(){
        console.log(username);
    }
    two() // it is necessory to run inner function for outer function
}
one()

if(true){
 const username = "vivek"
 if(username === "vivek"){
    const website = " youtube"
    console.log(username+website);
 }
 //console.log(website);  //error out of scope
}
//console.log(username);    //error out of scope

//+++++++++++++++++++++++++ INTERESTING ++++++++++++++++++++++++++++++++++++++++++++++++

function addone(num){  // simple function . In this we can call function before initialisation
    return num + 1;
}

addone(5)  // this can be writen before "function addone(num){""


const addtwo = function(num){   // function hold in variable . in this we cannot call function before initialization
    return num+2
}

addtwo(5)  //this can't
//que 1---------------------------------------------------------------------
function sum( a,b){
    return a+b;
}

//console.log(sum(21,5));




//que 2-------------------------------------------------------------------------
function canVote(age){
    return age > 18
}

//console.log(canVote(19));




// que 3 create a function take arr of obj and return whose age is >18,male------------
function solve(arr){
    let arr2 =[];
    for (let i = 0; i < arr.length; i++) {  
if(arr[i].gender === "male" && arr[i].age > 18){
   arr2.push(arr[i])
}
}
return arr2;
}


const users =[{
    name:'vasu',
    age : 76,
    gender: "female",
},
{
    name:"sujal",
    age : 17,
    gender: "male",
},
{
    name:"vinay",
    age : 35,
    gender: "male",
}]
//console.log(solve(users));




//que 4  sum of digits from 1 to nth digit-----------------------------------------
function sum(n){
    //return n* (n+1)/2    // or we can also do this
    let add = 0
    for (let i = 0; i <= n; i++) {
        add = add + i;
        
    }
    return add
}

console.log(sum(10));




//que 5 ----------------------------
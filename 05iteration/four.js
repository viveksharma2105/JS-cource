//++++++++++++++++++++ FOR EACH LOOP ++++++++++++++++++++++++++++++++
// foreach loop is execute by callBackFunction 
//callbackfun does not contain the name of the function, also we can pass any parametre in this 

const myarr = ["js", "java", "cpp", "rust"]

//By simple function 
myarr.forEach(function (item){
    //console.log(item);
})



// By Arrow function
myarr.forEach((item) => {
    //console.log(item);
})



//By without using call Back Function
function lang(item){
   // console.log(item);
}
myarr.forEach(lang)


//we can also get the value, index , array
myarr.forEach((item, index, array) =>{
    //console.log(item, index, array);
})


//array contain objects
const arr = [
    {
        langName: "javascript",
        langFileName: "js"
    },
    {
        langName: "java",
        langFileName: "java"
    },
    {
        langName: "cpp",
        langFileName: "c++"
    }
]

arr.forEach(function (langs){
console.log(langs);
})
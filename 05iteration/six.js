//+++++++++++++++ MAP +++++++++++++++++++++++++++++++++++
// BETTER THAN FOR-EACH BECAUSE IT'S RETURN AUTOMATICLY
//FOR-EACH LOOP CANNOT RETURN VALUE

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const num = arr.map((mynums) => mynums+10)
// console.log(num);


// by for-each 
arr.forEach((i) => {
    i+=10 ;
    //console.log(i);
})


//++++++++++++++++++++++++++++++++++++++= CHAINING +++++++++++++++++++++++++++++


//this is like map().map().filter()
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const chain = nums.map((item) => item*10).map((item) => item-5).filter((item) => item > 30)
console.log(chain);
const accountId = 144553
let accountEmale = "viv@gmail.com"
var accountPassword = "1234" //prefer not to use
accountCity = "gurugram" // run but not 
let accountState; // empty varialbe is undefine

//lets give the another value and check which variable is correct
//accountId = 2  (not allowed bec it's constant)
accountEmale = "vi@gmail.com"
accountPassword = "213"
accountCity = "sohna"

/*
prefer not to use var only use let and cost 
because of issue in block scope and finctional scope
*/
console.log(accountId);//for run or print 1 variable
console.table([ accountId, accountEmale , accountPassword, accountCity, accountState]);//for multiple variable

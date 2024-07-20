//reduce method
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//by arrow function
const initialVal = 0
const sum = myNums.reduce((acc , currentval) => acc +currentval, initialVal );
console.log(sum);


//by simple function (in this ,0 is the acc start value )
// const initialval = 0
//  const total = myNums.reduce(function(acc , cv) {
//     return acc +cv
//  },0)
// console.log(total);

const shoppingCart = [
    {
        itemName: "js cource",
        price:999
    },
    {
        itemName: "java cource",
        price:599
    },
    {
        itemName: "react cource",
        price:2999
    },
    {
        itemName: "mobile dev cource",
        price:3999
    }
]

const  netTotal = shoppingCart.reduce((acc,cv) => acc + cv.price ,0)
console.log(netTotal);



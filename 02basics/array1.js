const marvelHeros = ["ironman", "spiderman ", "thor"]
const dcHeros = ["superman", "flash", "batman"]
// marvelHeros.push(dcHeros)                    // this will add whole seconnd array as a single element
// console.log(marvelHeros);

// const all  = marvelHeros.concat(dcHeros)
// console.log(all);                           //correct way 

const all1 = [...marvelHeros,...dcHeros]
console.log(all1);                            //easiest way



const arr2 = [1,2,3,[1,2,3,43],4,5,6,[1,2,3,[3,1,1]]]  // use to convert the nested array into single arr
const real_arr2 = arr2.flat(3)                         // 3 is the depth of array we can also use (infinity) in place of 3
console.log(real_arr2);

console.log(Array.isArray("vivek")); //this is not a array
 console.log(Array.from("vivek"));   // convert into arrayarr
 console.log(Array.from({name :"vivek"}));   // not convert (either we have to pass key or value)

 let s1 = 100
 let s2 = 200
 let s3 = 300
 console.log(Array.of(s1,s2,s3)) // converted into array
// For-of loop  (applicable on array and map not for objects)
const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    //console.log(num);    
}



const str = "Hello world"
for (const chr of str) {
    if (chr == " ") {
        break
        
    }
    //console.log(chr);
    
}


//Map

const map = new Map()
    map.set('IN', "India")
    map.set('USA', "united states of America")
    map.set('FR', "France")
     //console.log(map);

     for (const [key, value] of map) {
       // console.log(key , value);
        }



     // itrate objects
     const obj = {
        'game1' : 'NFS',
        'game2' : 'Spiderman'

     }

    //  for (const [key , value] of obj) {    // this is not be itrated by forof loop
    //     console.log(key , value);
        
    //  }




//++++++++++++++++++++ OBJECT ITRATION (forin loop)+++++++++++
// for in loop applicable on array and objects, not iterate on Map


const myobj = {
    js : "javaScript",
    cpp : "C++",
    rb : "ruby",
    swift : "swift by apple"
}

for (const  key in myobj) {
    //console.log(`${key} : shortcut is used for : ${myobj[key]}`);
}
    




//apply on array
const myarr = ["js", "java", "c++", "react"]

for (const key in myarr) {
    console.log(myarr[key]);
    
}
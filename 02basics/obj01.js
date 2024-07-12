const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isloggedin = false

//xconsole.log(tinderUser);

const regularUser ={
    email:"v@google.com",
    fullname :{
        userfullName:{
            firstName : "Vivek",
            lastName: "Sharma"
        }

    }
}
//console.log(regularUser.fullname.userfullName.firstName); //nested obj open
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

//const all = {...obj1,...obj2}   //best way
const all = Object.assign({},obj1,obj2)          // another way to merge the obj
console.log(all);


//++++++++++++++++++   MOST IMPORTANT IN OBJECTS
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

//++++++++++++++ OBJECT DE-STRUCTURING +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const course = {
    coursename: "JS-course",
    price: "999",
    courseinstructor: "vivek"

}

//console.log(course.courseinstructor);

/*
as courseinst... is a very big name herwe can do a easiest way . This way replace course.courseinstructor
 */

const {courseinstructor} = course // no need to write --> console.log(course.courseinstructor). Simply write,,
const {courseinstructor:instructor} = course // here we give new name 
console.log(courseinstructor); // we can also write instructor

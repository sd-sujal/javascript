// Declaration using constructor 
// const tinderUser = new Object()// This is a singleton object (one of its kind )

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "uday"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Sujal",
            lastname: "Dwivedi"
        }
    }
}

// console.log(regularUser);
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);

//optional chaining console.log(regularUser.fullname.?userfullname);

const obj1 = {1: "a", 2: "b"}
const obj1 = {1: "a", 2: "b"}

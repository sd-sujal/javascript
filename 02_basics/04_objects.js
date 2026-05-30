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
const obj4 = {99: "a", 22: "b"}
const obj5 = {6: "a", 21: "b"}
const obj2 = {3: "c", 4: "d"}
// const obj3 = { obj1, obj2}// { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// const obj3 = Object.assign({}, obj1, obj2, obj4, obj5)// see the documentation 
// Object.assign() static method copies all enumerable own properties frm one ore source objects to a 
// target objects. It returns the modified target object.

const obj3 = {...obj1, ...obj2, ...obj4} //cmost commonly used (using spread operator)
// console.log(obj3);

const user = [
    {
        id: 1,
        email: "abc@gmail.com"
    },
     {
        id: 2,
        email: "xyz@gmail.com"
    }, {
        id: 3,
        email: "kbc@gmail.com"
    }
]

user[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// Object can be declared in 2 ways: Literal and Constructor

// Constructor creates a singleton object
// Object.create()

// Object Literal

const mySym = Symbol("key1");

const JsUser = {
    name: "Sujal",
    age: 21,
    location: "Solan",
    [mySym]: "key1", // Symbol key
    email: "sujaldwivedi65@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
};

// console.log(JsUser.email);        // 1st way to access
// console.log(JsUser["email"]);    // 2nd way to access

// console.log(JsUser[mySym]);      // Access Symbol property

// JsUser.email = "thesujaldwivedi@gmail.com";
// console.log(JsUser.email);

// Object.freeze(JsUser);           // Makes object immutable

// JsUser.email = "thesujal@yahoo.com"; // This won't work

// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Amit ji Passed butter.");
}

JsUser.greetingtwo = function(){
    console.log(`Hello JS User, ${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());

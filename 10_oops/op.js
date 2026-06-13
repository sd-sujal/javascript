// Object leteral
const user = {
    username: "Sujal",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`)
        console.log(this)
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


//const promiseOne = new Promise()// new keyword is a constructor function 

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
}

const userOne = new User("Sujal",12,true)
const userTwo = new User("Naman",11,false)
console.log(userOne)
console.log(userTwo)


/***The new Keyword in JavaScript
new is used to create an instance of an object from a constructor function or class. When you use new, JavaScript does four things behind the scenes:

1.Creates a brand new empty object
2.Sets that object's prototype to the constructor's prototype
3.Binds this inside the constructor to the new object
4.Returns the object (unless the constructor explicitly returns another object)
***/



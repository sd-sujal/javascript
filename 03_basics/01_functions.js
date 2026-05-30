// A function is a reusable block of code that performs a specific taks when it is called.

function sayMyName(){
    console.log("S");
    console.log("U");
    console.log("J");
    console.log("A");
    console.log("L");
}

// sayMyName()// execution of function
// sayMyName// if you do not use () it implies or it give the refeernce of the function 

// function addTwoNumbers(number1, number2){// in this line number1 and number2 are the parameters of the function
//     console.log(number1+number2);
    
// }

// addTwoNumbers(8,7);//l5(here 8 and 7 are the arguments)
// addTwoNumbers(89,"98");

function greet(name) {  // name is a parameter
    console.log(`hello ${name}`);
}

greet("Sujal");  // "Sujal" is an argument  

function loginuserMessage(username = "deafult value"){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in.`
}

// console.log(loginuserMessage("Sujal"));
// console.log(loginuserMessage()); // gives undefined 

function calculateCartPrice(va1,val2,...num1){// '...' rest operator used to pass multiple value in a function
    return num1
}
// console.log(calculateCartPrice(8,9,2,7,6));

const user = {
    username: "sujal",
    price:  199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is
        ${anyobject.price} `);
    
}

// handleObject(user)

handleObject({
    username: "jaideep",
    price: 399
})

const Arr = [100, 200, 300, 400]

function returnSeconfValue(getArray){
    return getArray[1]
}

console.log(returnSeconfValue(Arr));

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

console.log(loginuserMessage("Sujal"));
console.log(loginuserMessage()); // gives undefined 



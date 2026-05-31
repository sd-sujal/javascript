// if 

// const isUserLoggedIn = true
// const temperature = 41
// if ( temperature === 40){
//     console.log("less than 50");    
// }else{
//     console.log("temperature is greater then 50");
// }

// console.log("Execute");

// <, >, <=, >=, ==, !=, ===, !==  

const score = 200

// if(score > 100){
//     const power = "fly"
//     console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`);// power is not defined in this scope


const balance = 1000

// if(balance>500) console.log("Test");

// if (balance < 500) {
//     console.log("less than 500")
// }
// else if (balance < 750) {
//     console.log("less than 750");
// }
// else if (balance < 900) {
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = true
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("allow to buy course");
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged in ")
}


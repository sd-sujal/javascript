const accountId = 144553
let accountEmail = "sujaldwivedi65@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed
accountEmail = "thesujaldwivedi@gmail.com"
console.log(accountId);
accountPassword =  "0802020"
accountCity = "Rewa"
// const value cannot be change in the memory 

console.table([accountEmail,accountId,accountPassword,accountCity,accountState])

//var-ignores the scope, allows redecalaration, not recommanded to use today
//let- use this 

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

//any variable which is declared but not defined - in javascript its value is considered as "underdefined"

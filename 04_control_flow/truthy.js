const userEmail = "sujaldwie@gmail.com"

if(userEmail){
    console.log("got user email")
}else{
    console.log("Don't have user email")
}

// Falsy values = false, 0, -0, 0n(BigInt), "", null, undefined, NaN
// Everything else is truthy.

//truthy value : "0", "false", " ", [], {}, function(){} -> this called empty function 
 const myArr= []

 // to check for an empty array check if its lenth is 0

 if(myArr.length===0){
    console.log("Array is empty")
 }

 const emptyObj = {}

 if(Object.keys(emptyObj).length === 0){
    console.log("object is empty");
 }

// Nullish Coalescing Operator (??) :  null undefined

// The Nullish Coalescing Operator (??) is used to provide 
// a default value only when the left side is null or undefined.

let val1;
// val1 = 5 ?? 10

// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20 // first correct value gets assigned

// || checks for falsy values, while ?? checks only for null and undefined.

console.log(val1)

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("morethan80")

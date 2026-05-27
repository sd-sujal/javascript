// JS is a dynamically typed langauage it means we do not have to specifically declare the type of any variable 

// Based on how the data is stored in the memory and how they are accessed datatypes are of two types primitive and non premitive

// Primitive (call by value) a copy of original is given the changes are done in the copy only 
// 7 types : String, Number, Boolean, null, Undefined, Symbol(used to make any value unique), BigInt
const score = 100
const scoreValue = 100.23

const isLoggedIn = false
const outsideTemp = null
let userEmail;// Symbol

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);// false

const bigNumber = 34947588490n //BigInt


// Non-Primitive (reference type)

// Array, Objects, Functions

const fruits = ["apple", "banana", "cherry", "dates"]// arry


let myObj={
    name: "Sujal",
    age: 21,
}

const myFun = function(){
    console.log("Hello world!");
}

console.log(typeof myFun);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object



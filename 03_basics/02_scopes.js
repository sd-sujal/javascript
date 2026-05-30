// Scope determines the accessibility (visibility) of variables, functions, 
//and objects in some particular part of your code during runtime

//+++++++++++++++++++++++Global Scope++++++++++++++++++++++++++++

// const globalVar = "I am everywhere!";

// function test() {
//     console.log(globalVar); // Accessible inside functions
// }
// test(); 
// console.log(globalVar); // Accessible outside functions


//+++++++++++++++++Function Scope+++++++++++++++++++++++++++++

// function hello(){
//     var greeting = "Hello World!"
//     console.log(greeting);// Works fine 
// }

// hello();
// console.log(greeting);// ReferenceError: greeting is not defined



//+++++++++++++++++ Block Scope ++++++++++++++++++++
// {
//     let blockScoped = "Hidden";
//     var notBlockScoped = "Exposed";
// }

// console.log(notBlockScoped); // "Exposed"
// console.log(blockScoped);    // ReferenceError: blockScoped is not defined

//++++++++++++++++ Lexical Scope (Static Scope)+++++++++++++++

// function outer() {
//     const outerVar = "I'm from the outside";

//     function inner() {
//         console.log(outerVar); // Accesses outerVar because of lexical scoping
//     }
//     inner();
// }
// outer();

// ++++++++++++++++++ Chai aur code ++++++++++++++++++++++++++
// var c = 300
let a = 3000
if (true){
    let a = 10
    const b = 20
    var c = 30
    console.log("Inside BLOCK :",a);
    
}

console.log(a);
// console.log(b);
// console.log(c);// var Completely Ignores Block Scope


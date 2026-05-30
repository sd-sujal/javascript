const user = {
    username: "Naman"
    ,price: 999,

    welomeMessage: function(){
        console.log(`${this.username}, welcome to this world it sucks.`);// this referres to the current context
        console.log(this);
        
    }
}

// user.welomeMessage()
// user.username = "Billy"
// user.welomeMessage()

// console.log(this);

// function chai(){
//     let username = "Naman"
//     console.log(this);
    
// }

// chai()

// const chai = function (){
//     let username = "Saurabh"
//     console.log(this.username);
    
// }// undefined 

// const chai= ()=>{
//     let username = "Saurabh"
//     console.log(this.username);
    
// }//undefined this 

// chai()


// const addTwo= (num1,num2) => {
//     return num1+num2
// }// Baisc arrow function



// implicit returns arrow functions
// const addTwo = (num1,num2) => num1+num2
const addTwo = (num1,num2) => (num1+num2)
console.log(addTwo(3,4));

// Note So {} used then we need to write the return 
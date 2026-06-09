// The Promise object represents the eventual completion 
// (or failure) of an asynchronous operation and its resulting value.

const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed")
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Aysnc Task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "sujal", email: "sujaldwivedi65@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true 
        if(!error){
            resolve({username: "Rohit", password: "1234"})
        } else{
            reject('Error: Somthing went wrong')
        }
    },1000)
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username)
})
.catch(function(error){
    console.log(error);
})
.finally(()=> console.log("the promise is either resolved or rejected"))

// .then()    = If success
// .catch()   = If error
// .finally() = In any case

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "javaScript", password: "116563"})
        } else{
            reject('Promise 5 Js went wrong')
        }
    },1000)
});

async function consumePromiseFive(){
   try {
        const response = await promiseFive
        console.log(response)
   } catch (error) {
        console.log(error)
   }
    
}

consumePromiseFive()

// async function getAllUser(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
        
//          const data = await response.json()
//          console.log(data);
//     } catch (error) {
//         console.log("E: ",error);
//     }
// }

// getAllUser()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then(()=>{
    console.log(data);
})
.catch((error)=> console.log(error))
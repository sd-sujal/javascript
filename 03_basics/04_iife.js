// Immediately Invoked Function Expression (IIFE)
// IIFE is used to avoid pollution from Global Scope 
(function chai(){
    // named iife
    console.log(`DB CONNECTED`);
    
})(); // IIFE does not knows when to end


( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
    
})("Sujal");



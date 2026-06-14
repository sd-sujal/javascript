const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// Advanced Object
// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
    name: "Ginger Vhai",
    price: 234,
    isAvailable: true   
}

console.log(Object.getOwnPropertyDescriptor(chai,"name"))

Object.defineProperty(chai, 'name',{
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(chai,"name"))
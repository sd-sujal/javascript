const name = "Sujal"
const repoCount = 89

// console.log(name + " " + repoCount + " Value");

// String interpolation

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}` );

// Another way to initialise any string is 

const gameName = new String("Sujal-82atkinsTT")

// console.log(gameName);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('S'));

// const newString = gameName.slice(-8,4)// only in .slice() you can use negative index
// console.log(newString);

// const anotherString = gameName.substring(0,4);
// console.log(anotherString);
// //trim and replace 
// const newStringOne = "    i am a second third year student    "// trimm works only in line terminatators and whitespace   
// console.log(newStringOne);

// console.log(newStringOne.trim());

// const url = " https://Sujal.com/Sujal%20Dwivedi"

// console.log(url.replace('%20','-'));

// console.log(url.includes('Sujal'));

//to convert a string into array based on anything like space or '-'

let text = "How are you doing today?";
const myArray = text.split(" ");
console.log(myArray);

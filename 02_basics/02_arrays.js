const marvel_heros = ["thor", "IronMan", "Spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);// [ 'thor', 'IronMan', 'Spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3][1]);// flash

// const allHeros = marvel_heros.concat(dc_heros) //concat() returns a new array
// // [ 'thor', 'IronMan', 'Spiderman', 'superman', 'flash', 'batman' ]
// console.log(allHeros);


// Spread operator 
const all_new_heros = [...marvel_heros, ...dc_heros] // ... speraates all the elements of an array 
console.log(all_new_heros);
 
const arr1 = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_arr1 = arr1.flat(Infinity)// Returns a new array with all sub-array elements concatenated into it recursively up to the specific depth 

console.log(real_arr1);

console.log(Array.isArray("Sujal"));
console.log(Array.from("Sujal"));

console.log(Array.from({name: "Sujal"}))// Intresting case (return empty array as it is not mentioned that who's array is to be created keys or values)

let score1 = 100
let score2 = 104
let score3 = 250

console.log(Array.of(score1,score2,score3));

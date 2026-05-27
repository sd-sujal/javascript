// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);


// console.log("2">1);//true 
// console.log("02">1);//true

//always comapare two same type of datatypes 

// console.log(null > 0);// false
// console.log(null == 0);// false -> here null is trearted as NaN
// console.log(null >= 0);// true -> here null is treated as 0
// console.log(null >= 1);// false

// the reason is that an equality check == and comparisions > < >= <= work differently.
// Comparisons convert null to number , treating it as 0.
// That's why (3) null >=0 is true and (1) null > 0 is false.

// console.log(undefined == 0);// false
// console.log(undefined > 0);// false
// console.log(undefined < 0);// false


// Strict check === checks the value as will as the datatype
console.log("01"==1);// true
console.log("01"===1);// false
console.log(1===1);// true


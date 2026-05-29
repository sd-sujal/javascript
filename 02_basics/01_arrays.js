// array

const myArr = [0, 1, 2, 3, 4, 5]
// Arrays are resizeable in JS 

// console.log(myArr[0]);
// JS array-copy operations create shallow copies(A shollow copy of an object is a copy whose properties share the same references (point to same underlying values) as those pf the source object from which the copy was made.)


const myHeores = ["Batman","Catwomen"]

const myArr2 = new Array(1,2,3,4,5,6)
// console.log(myArr[2]);

// Array methods 

// myArr.push(16)
// myArr.push(32)
// console.log(myArr);
// myArr.pop()

// myArr.unshift(9)// adds the value at the start of the array
// console.log(myArr);
// myArr.shift();

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(5));

// const newArr = myArr.join()
// console.log(newArr);
// console.log(typeof newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,3)// 3 is not included 

console.log(myn1);

console.log("B ",myArr);

const myn2 = myArr.splice(1,3)
console.log("C ",myArr);
console.log(myn2);

// slice = copy     splice = change

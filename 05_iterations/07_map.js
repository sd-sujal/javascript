const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newnums = nums.map( (num) => {return num*5} )
//console.log(newnums)

const newnums2 = nums.forEach( (item) => {
    //console.log(item*5)
})

// Chaining 

const arr = nums.map((num)=>num*5).map((num)=>num+2)
// console.log(arr)

const arr1 = nums.map((num)=>num*5).map((num)=>num+2).filter((num)=>num>20)
// console.log(arr1)

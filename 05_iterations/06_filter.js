// const coding = {"js", "ruby", "java", "python", "cpp"}

// const values =codeing.forEach( (item)=>{
//     // console.log(item)
//     return item;
// } )

// console.log(values);//undefined
//forEach does not return any thing 

const nums = [1,2,3,4,5,6,7,8,9,10]

const newnums=nums.filter((num)=> num > 4)
//console.log(newnums);//[ 5, 6, 7, 8, 9, 10 ]

const newnums2=nums.filter((num)=> {
    return num > 4
}) // when you start a scope {} you need to return the value 

//console.log(newnums2)

const newarr = []

nums.forEach( (num) => {
    if(num>4){
        newarr.push(num)
    }
} )

console.log(newarr);

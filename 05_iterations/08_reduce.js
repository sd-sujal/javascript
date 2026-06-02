const nums = [1, 2, 3]
// Mostly use in shoping cart 
// const nums1 = nums.reduce(function (acc,curVal) {
//     console.log(`acc: ${acc} and current Value: ${curVal}`)
//     return acc + curVal
// },0)

// console.log(nums1)

// const total = nums.reduce( (acc,curr) => acc+curr, 0 )
// console.log(total)

const shoppingCart = [
    {
        itemName: "JS course",
        price: 3000
    },
    {
        itemName: "PY course",
        price: 2000
    },
    {
        itemName: "C++ course",
        price: 200
    },
    {
        itemName: "DS course",
        price: 5000
    },
]

const totalcost = shoppingCart.reduce(
    (acc, item) => acc + item.price,
    0
);
console.log(totalcost)
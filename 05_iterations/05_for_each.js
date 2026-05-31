const codeing = ["js","java","ruby","C","C++","python"]

// codeing.forEach( function (item){
//     console.log(item);
    
// })

// codeing.forEach((item)=>{
//     console.log(item);
    
// })

// function printME(item){
//     console.log(item,item);
    
// }
// codeing.forEach(printME);

// codeing.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
    
// })

const games = [
  {
    id: 1,
    name: "Cricket",
    players: 11,
    type: "Outdoor"
  },
  {
    id: 2,
    name: "Football",
    players: 11,
    type: "Outdoor"
  },
  {
    id: 3,
    name: "Chess",
    players: 2,
    type: "Indoor"
  },
  {
    id: 4,
    name: "Badminton",
    players: 2,
    type: "Indoor"
  },
  {
    id: 5,
    name: "Basketball",
    players: 5,
    type: "Outdoor"
  }
];

games.forEach((item)=>{
    console.log(item.name);
})
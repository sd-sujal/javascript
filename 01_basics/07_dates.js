 // Date

//  let myDate = new Date()
//  console.log(myDate.toString());// Thu May 28 2026 16:13:52 GMT+0000 (Coordinated Universal Time)
//  console.log(myDate.toDateString());// Thu May 28 2026
//  console.log(myDate.toISOString());// 2026-05-28T16:16:09.770Z
//  console.log(myDate.toJSON());// 2026-05-28T16:16:09.770Z
//  console.log(myDate.toLocaleDateString());// 5/28/2026

//  console.log(myDate.toLocaleString());// 5/28/2026, 4:17:07 PM


//  console.log(typeof myDate);// its an object
 
//  let myCreatedDate = new Date(2023,0,23)// months in javaScript are started from 0
//  console.log(myCreatedDate.toDateString());// Mon Jan 23 2023
 
//  let a = new Date(2024,0,4,3)
//  console.log(a.toLocaleString());
 

// let b = new Date("2026-02-08");// yy-mm-dd
// console.log(b.toLocaleString());

// let c = new Date("01-14-2020")// mm-dd-yy
// console.log(c.toLocaleString());

// // TimeStamp

// let d = Date.now()

// // console.log(d);
// // console.log(b.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay()+1);
console.log(newDate.getMonth()+1);

newDate.toLocaleString('default',{
    weekday: "long"
})
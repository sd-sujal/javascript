// const coding = {"js", "ruby", "java", "python", "cpp"}

// const values =codeing.forEach( (item)=>{
//     // console.log(item)
//     return item;
// } )

// console.log(values);//undefined
//forEach does not return any thing 

// const nums = [1,2,3,4,5,6,7,8,9,10]

// const newnums=nums.filter((num)=> num > 4)
// //console.log(newnums);//[ 5, 6, 7, 8, 9, 10 ]

// const newnums2=nums.filter((num)=> {
//     return num > 4
// }) // when you start a scope {} you need to return the value 

// //console.log(newnums2)

// const newarr = []

// nums.forEach( (num) => {
//     if(num>4){
//         newarr.push(num)
//     }
// } )

// console.log(newarr);

const books = [
  {
    title: "The Alchemist",
    genre: "Fiction",
    publish: 1988,
    edition: "25th Anniversary Edition"
  },
  {
    title: "Clean Code",
    genre: "Programming",
    publish: 2008,
    edition: "1st Edition"
  },
  {
    title: "Atomic Habits",
    genre: "Self-Help",
    publish: 2018,
    edition: "1st Edition"
  },
  {
    title: "The Pragmatic Programmer",
    genre: "Programming",
    publish: 1999,
    edition: "20th Anniversary Edition"
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    genre: "Fantasy",
    publish: 1997,
    edition: "Illustrated Edition"
  },
  {
    title: "To Kill a Mockingbird",
    genre: "Classic",
    publish: 1960,
    edition: "50th Anniversary Edition"
  },
  {
    title: "The Hobbit",
    genre: "Fantasy",
    publish: 1937,
    edition: "Revised Edition"
  },
  {
    title: "Rich Dad Poor Dad",
    genre: "Finance",
    publish: 1997,
    edition: "Updated Edition"
  },
  {
    title: "Deep Work",
    genre: "Productivity",
    publish: 2016,
    edition: "1st Edition"
  }
];

const recentBook = books.filter( (book) => book.publish > 2000)

// console.log(recentBook)

const userBook = books.filter( (book) => book.genre == "Programming" )

// console.log(userBook)

const userBook1 = books.filter( (book) => {
    return (book.genre=="Programming") && (book.publish>2000)
})

// console.log(userBook1)

//++++++++++++++++++++++++++++ practice on filters +++++++++++++++++++++++++++++++++++++

const students = [
  { name: "Sujal", age: 20, course: "CSE", marks: 85 },
  { name: "Rahul", age: 22, course: "ECE", marks: 72 },
  { name: "Priya", age: 19, course: "CSE", marks: 91 },
  { name: "Ankit", age: 21, course: "ME", marks: 65 },
  { name: "Neha", age: 20, course: "ECE", marks: 88 },
  { name: "Aman", age: 23, course: "CSE", marks: 55 },
  { name: "Riya", age: 18, course: "IT", marks: 78 },
  { name: "Karan", age: 22, course: "ME", marks: 95 },
  { name: "Pooja", age: 21, course: "IT", marks: 60 },
  { name: "Arjun", age: 20, course: "CSE", marks: 82 }
];

// a).Get all students whose marks are greater than 80.

const a = students.filter( (student)=>{
    return student.marks > 80
} )

// console.log(a)

// b).Get all students from the CSE course.

const b = students.filter( (student)=> student.course === "CSE" )
// console.log(b)

// c.)Get all students whose age is greater than 20.

const c = students.filter( (student)=>student.age > 20)
// console.log(c)

// d).Get all students whose marks are less than 70.

const d = students.filter( (student)=> student.marks < 70)
// console.log(d)

// e).Get all students from the IT course.
const e = students.filter( (student) => student.course == "IT" )
// console.log(e)

// Get all CSE students with marks above 80.

const a2 = students.filter( (student) => student.course == "CSE" && student.marks >80 )
// console.log(a2)

// Get all students aged between 20 and 22 (inclusive).

const b2 = students.filter( (student) => student.age >= 20 && student.age <= 22)
// console.log(b2)

// Get all students whose names start with "A".

const c2 = students.filter( (student) => student.name[0] == "A" )
// console.log(c2)

const c22 = students.filter( (student) => student.name.startsWith("A") )
// console.log(c22)

// Get all students who passed (marks >= 60).

const d2 = students.filter( (student) => {
    return student.marks >= 60
} )
// console.log(d2)

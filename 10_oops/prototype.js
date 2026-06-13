// let myname = "sujal       "
// let gamename = "atkins   "

// console.log(myname.trim().length);
// console.log(gamename.trim().length);

let hero = ["thor","flash"]

let heroPower = {
    thor : "hammer",
    flash: "speed",

    getFlashPower: function(){
        console.log(`Flash power is ${this.flash}.`)
    }
}

Object.prototype.sujal = function(){
    console.log("Sujal is present in all object")
}

// hero.sujal()
// heroPower.sujal()


Array.prototype.heySujal = function(){
    console.log("Sujal Says HII")
}

hero.heySujal()
// heroPower.heySujal()// error

// INheritance 
const User = {
    name: "Ravi",
    nationality: "Indian",
    email: "ujjan@example.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: true
}

const TASupport = {
    makeAss: 'py ass',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUserName = "AntEsports     "

String.prototype.trueLength = function(){
    // console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUserName.trueLength()
let mark = "YELLOW     "
mark.trueLength()
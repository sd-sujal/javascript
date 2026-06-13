// ES 6
 

class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`;
    }

    changeusername(){
        return `${this.username.toUpperCase()}`;
    }

}

const chai = new User("Sujal", "sujaldwivedi@gmail.com", "12334")

console.log(chai.encryptPassword());
console.log(chai.changeusername());
console.log(chai);

// behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`;
}

User.prototype.changeusername = function(){
    return `${this.username.toUpperCase()}`;
}
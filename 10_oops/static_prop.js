class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createdId(){
        return `123`
    }
}

const sports = new User("ram")
console.log(sports.createdId())
function SetUserName(username){
    // comlpex DB calls 
    this.username = username
}

function createuser(username, email, password){
    SetUserName.call(this, username)
    
    this.email = email
    this.password = password
}

const bottle = new createuser("pen", "pen@gmail.com", "1232")
console.log(bottle)
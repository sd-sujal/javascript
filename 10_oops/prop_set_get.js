function User(email, password) {

    Object.defineProperty(this, "email", {   
        get: function () {
            return this._email.toUpperCase();
        },
        set: function (value) {
            this._email = value;
        }
    });

    Object.defineProperty(this, "password", { 
        get: function () {
            return this._password.toUpperCase();
        },
        set: function (value) {
            this._password = value;
        }
    });

    // Assign AFTER defining the properties so the setters fire correctly
    this.email = email;
    this.password = password;
}

const clean = new User("ravi@proton.me", "poiuy");

console.log(clean.email);    // RAVI@PROTON.ME
console.log(clean.password); // POIUY
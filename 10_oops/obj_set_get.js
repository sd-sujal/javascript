const User = {
    _email: "h@hc.com",
    _password: "qwef",

    // getter - runs when you READ .email
    get email() {
        return this._email.toUpperCase();
    },

    // setter - runs when you WRITE .email
    set email(value) {
        this._email = value;
    }
};

// Object.create(User) → creates an empty object whose prototype IS User
// tea itself has no properties, but it can "see" everything in User
const tea = Object.create(User);
console.log(tea.email); // H@HC.COM  → inherited getter, this._email from User

// ─────────────────────────────────────────
// EXTRA EXAMPLE — prototype chain in action
// ─────────────────────────────────────────

const coffee = Object.create(User);

// coffee is also empty at first, inherits User's _email
console.log(coffee.email); // H@HC.COM  (from User prototype)

// now we SET a value → setter fires → stores on coffee itself as coffee._email
coffee.email = "coffee@dev.com";

console.log(coffee.email); // COFFEE@DEV.COM  (coffee's OWN _email now)
console.log(tea.email);    // H@HC.COM        (tea is unaffected, still uses User's)
console.log(User._email);  // h@hc.com        (User is also untouched)

// Why? Because the setter does: this._email = value
// "this" is coffee → so it creates coffee._email, NOT overwriting User._email
// Each object gets its own _email once the setter fires

// Visualizing the chain:
// coffee         → { _email: "coffee@dev.com" }
//   └── proto    → User { _email: "h@hc.com", get email, set email }

// tea            → {}  (still empty, no own properties)
//   └── proto    → User { _email: "h@hc.com", get email, set email }
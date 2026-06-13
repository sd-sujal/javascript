# javascript and classes 

## OOP

## Object
- collection of properties and methods
- toLowerCase

## Why use OOP
- To avoid Spaghetti code is code that is tangled, hard to understand, and difficult to maintain because the control flow jumps around in an unstructured way.
Ex:- 
```javaScript
function processUser(user) {
    if (user) {
        if (user.isActive) {
            if (user.age >= 18) {
                if (user.country === "India") {
                    console.log("Eligible");
                } else {
                    console.log("Country not supported");
                }
            } else {
                console.log("Underage");
            }
        } else {
            console.log("Inactive");
        }
    } else {
        console.log("No user");
    }
}
```
Better code 
```javascript
function processUser(user) {
    if (!user) return console.log("No user");
    if (!user.isActive) return console.log("Inactive");
    if (user.age < 18) return console.log("Underage");
    if (user.country !== "India") {
        return console.log("Country not supported");
    }

    console.log("Eligible");
}
```

## Parts of OOP
Object literal 

- Constructor function
- Prototypes
- Classes
- Instances (new, this)

## 4 Pillars Of oops

### 1. Encapsulation
Bundling data (properties) and methods that operate on that data within a single unit (object/class), while restricting direct access to some of the object's components.

```JavaScript
class BankAccount {
  #balance; // private field

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount > 0) this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const acc = new BankAccount(1000);
acc.deposit(500);
console.log(acc.getBalance()); // 1500
console.log(acc.#balance); // Error: private field
```

The #balance field can't be accessed or modified directly from outside the class, only through the defined methods

### 2. Abstraction
Hiding complex implementation details and showing only the essential features of an object, so the user interacts with a simple interface.

```JavaScript
class CoffeeMachine {
  #grindBeans() {
    console.log("Grinding beans...");
  }

  #heatWater() {
    console.log("Heating water...");
  }

  makeCoffee() {
    this.#grindBeans();
    this.#heatWater();
    console.log("Coffee is ready!");
  }
}

const machine = new CoffeeMachine();
machine.makeCoffee(); 
// User only calls makeCoffee(), doesn't need to know internal steps
```
The internal steps (#grindBeans, #heatWater) are hidden; the user only sees the simple makeCoffee() interface.

### 3. Inheritance
A mechanism where one class (child/subclass) acquires properties and methods of another class (parent/superclass), promoting code reuse.

```JavaScript
class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} is eating.`);
  }
}

class Dog extends Animal {
  bark() {
    console.log(`${this.name} is barking.`);
  }
}

const dog = new Dog("Rex");
dog.eat();  // Rex is eating. (inherited)
dog.bark(); // Rex is barking.


```
Dog inherits the eat() method from Animal without rewriting it, and adds its own bark() method.

### 4. Polymorphism
The ability of different classes to be treated through the same interface, where each class implements the method in its own way (method overriding).

```javascript
class Animal {
  makeSound() {
    console.log("Some generic sound");
  }
}

class Cat extends Animal {
  makeSound() {
    console.log("Meow!");
  }
}

class Cow extends Animal {
  makeSound() {
    console.log("Moo!");
  }
}

const animals = [new Animal(), new Cat(), new Cow()];

animals.forEach(animal => animal.makeSound());
// Some generic sound
// Meow!
// Moo!
```
Each class has its own version of makeSound(), but they're all called the same way through animal.makeSound() — the correct version runs based on the actual object type.
// ================== Object ===================
let dog = {
    name: "Spot",
    numLegs: 4,
};
console.log(dog); // { name: 'Spot', numLegs: 4 } Returns key/value pairs
// ================== Object.keys() ===================
// Returns an array of the object's keys
let dog = {
    name: "Spot",
    numLegs: 4,
};
console.log(Object.keys(dog)); // [ 'name', 'numLegs' ]

// ================== Object.values() ===================
// Returns an array of the object's keys' values
let dog = {
    name: "Spot",
    numLegs: 4,
};
console.log(dog.name);// Spot
console.log(Object.values(dog)); // [ 'Spot', 4 ]

// ================== Create a Method on an Object ===================
// Methods are properties that are functions. An objects function must be initialised within the object itself. 
let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function () { return `This dog has ${dog.numLegs} legs.` }
};
console.log(dog.sayLegs()); // This dog has 4 legs.

//   ================== Make Code Reusable with the 'this' Keyword ===================
// 'this' is a deep topic, and the example below is only one way to use it. In the current context, 'this' refers to the object that the method is associated with: dog.
let dog = {
    name: "Spot",
    numLegs: 3,
    sayLegs: function () { return "This dog has " + this.numLegs + " legs."; }
};
console.log(dog.sayLegs()); // This dog has 3 legs.

// ================== Define a Constructor Function ===================
// Constructors are functions that create new objects. Think of them as a blueprint for the creation of new objects. 
// Constructors follow a few conventions:
// - Constructors are defined with a 'Capitalized' name to distinguish them from other functions that are not constructors.
// - Constructors use the keyword 'this' to set the properties of the object they will create. NOTE: inside the constructor, 'this' always refers to the object being created.
// - Constructors define properties and behaviors that will belong to the new object instead of returning a value as other functions might.
function Dog() {
    this.name = 'George';
    this.color = 'brown';
    this.numLegs = 4;
}
// Or fCC
function Dog() {
    (this.name = "George"), (this.color = "White"), (this.numLegs = 4);
}

// ================== Use a Constructor to Create Objects ===================
// Notice that the 'new' operator is used when calling a constructor.
function Dog() {
    this.name = 'George';
    this.color = 'brown';
    this.numLegs = 4;
}
let spaniel = new Dog();
console.log(spaniel); // Dog { name: 'George', color: 'brown', numLegs: 4 }

// ================== Extend Constructors to Receive Arguments ===================
//  To more easily create different objects, you can design your constructor to accept parameters.
function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}
let terrier = new Dog('Fido', 'gray');
console.log(terrier); // Dog { name: 'Fido', color: 'gray', numLegs: 4 }

// ================== Verify an Object's Constructor with 'instanceof' ===================
// 'instanceof' allows you to compare an object to a constructor, returning 'true' or 'false' based on whether or not that object was created with the constructor.
let Bird = function (name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 2;
}
let crow = new Bird("Alexis", "black");
console.log(crow instanceof Bird); // true
// But
let canary = {
    name: "Mildred",
    color: "Yellow",
    numLegs: 2,
    feathers: 'many'
};
console.log(canary instanceof Bird); // false

// Syntax for - Not an instanceof 
if (!(canary instanceof Bird)) {
    // Do something, such as
    canary = new Bird('Tweety')
}
console.log(canary instanceof Bird); // true
console.log(canary); // Bird { name: 'Tweety', color: undefined, numLegs: 2 }
console.log(Object.keys(canary)); // [ 'name', 'color', 'numLegs' ] // No feathers prop!!!

// ================== Using Own Properties with .hasOwnProperties() ===================
// 'name' and 'numLegs' are called 'own properties', because they are defined directly on the object instance. That means that every instance of the 'Bird' constructor will have its own separate copy of these properties.
function Bird(name) {
    this.name = name; // This is an 'own property'
    this.numLegs = 2; // This is an 'own property'
}

let canary = new Bird("Tweety");
let ownProps = [];
for (let prop in canary) {
    if (canary.hasOwnProperty(prop)) {
        ownProps.push(prop);
    }
}
console.log(ownProps); // [ 'name', 'numLegs' ]

// ================== Use Prototype Properties to Reduce Duplicate Code ===================
// Prototype properties are defined on the prototype and are automatically shared among ALL instances of the 'Dog' constructor. The prototype property allows us to add new properties to an object constructor from outside the original code block. The prototype property also allows you to add new functions to the objects constructor. 
function Dog(name) {
    this.name = name; // own property
}
Dog.prototype.numLegs = 4; // prototype property

let beagle = new Dog("Snoopy");
console.log(beagle.numLegs); // 4   But... 
console.log(Object.keys(beagle)); // [ 'name' ] because Object.keys() doesn't return prototype properties

// ================== Iterate Over All Object Properties/Keys ===================
function Dog(name) {
    this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

// Using 'for...in' loops...
// This for-in loop adds all of the 'own properties' of 'beagle' to the array 'ownProps' and all of the prototype properties of beagle(Dog) to the array 'prototypeProps'.
let ownProps = [];
let prototypeProps = [];
for (let prop in beagle) {
    if (beagle.hasOwnProperty(prop)) {
        ownProps.push(prop); // only 'own properties'
    } else {
        prototypeProps.push(prop); // all the other properties, e.g. prototype
    }
}
// And this one iterates over all 'own properties' and the object's prototype chain properties and pushes them into the 'objKeys' array
let objKeys = [];
for (var key in beagle) objKeys.push(key);

console.log(ownProps); // [ 'name' ]
console.log(prototypeProps); // [ 'numLegs' ]
console.log(Object.keys(beagle)); // [ 'name' ] Only gives 'own properties'
console.log(beagle); // Dog { name: 'Snoopy' } Only gives 'own properties' (with constructor) but...
console.log(objKeys); // [ 'name', 'numLegs' ]


// ================== Understand the Constructor Property ===================
// There is a 'constructor' property located on the object instances that have been created. The constructor property is a reference to the constructor function that created the instance.
// Note: Since the constructor property can be overwritten it’s generally better to use the 'instanceof' method to check the type of an object.
function Dog(name) {
    this.name = name;
}

let beagle = new Dog("Snoopy");

function joinDogFraternity(candidate) {
    if (candidate.constructor === Dog) {
        return true;
    } else {
        return false;
    }
}
console.log(joinDogFraternity(beagle)); // true

// ================== Change the Prototype to a New Object ===================
// Instead of adding each prototype property one by one with object.prototype.property, we can do this much easier by setting the prototype to a new object. That way all of the prototype properties are added at once.
function Dog(name) {
    this.name = name;
}

Dog.prototype = {
    numLegs: 4,
    eat: function () {
        console.log("crunch crunch crunch");
    },
    describe: function () {
        console.log(`My name is ${this.name}`);
    }
};
// Or this ES6 version without the colon and function word
Dog.prototype = {
    numLegs: 4,
    eat() {
        console.log("crunch crunch crunch");
    },
    describe() {
        console.log(`My name is ${this.name}`);
    }
};

let beagle = new Dog("Snoopy");

console.log(Object.keys(beagle)); // [ 'name' ] 
console.log(Object.getOwnPropertyNames(beagle)); // [ 'name' ]
console.log(beagle); // { name: 'Snoopy' } // why is it not?- Dog { name: 'Snoopy' }
console.log(beagle.constructor === Dog); // false   Note: now this has to be re-set

let objKeys = [];
for (var key in beagle) objKeys.push(key);
console.log(objKeys) // [ 'name', 'numLegs', 'eat', 'describe' ]

// ================== Set the Constructor Property when Changing the Prototype ===================
// Manually setting the prototype to a new object erases the constructor property. Remember to define the constructor property when you set a prototype to a new object.
function Dog(name) {
    this.name = name;
}

Dog.prototype = {
    constructor: Dog,  // Only added this line
    numLegs: 4,
    eat: function () {
        console.log("nom nom nom");
    },
    describe: function () {
        console.log("My name is " + this.name);
    }
};

let beagle = new Dog("Snoopy");
console.log(beagle.constructor === Dog); // true    This has now been reset

// ================== Check an Object’s Prototype with .isPrototypeOf() ===================
// An object inherits its prototype directly from the constructor function that created it. You can show this relationship with the .isPrototypeOf() method:
function Dog(name) {
    this.name = name;
}

let beagle = new Dog("Snoopy");

console.log(Dog.prototype.isPrototypeOf(beagle)); // true

// ================== Understand the Prototype Chain ===================
// 'Object' is a supertype for all objects in JavaScript and so it is a supertype for both Dog and beagle. Any method (e.g. .hasOwnProperty()) defined in Object.prototype can be accessed by all its subtypes. Dog is a subtype of Object and supertype of beagle. Beagle is a subtype of Dog. This is an example of the prototype chain.
function Dog(name) {
    this.name = name;
}

let beagle = new Dog("Snoopy");

console.log(Object.prototype.isPrototypeOf(Dog.prototype)); // true
console.log(Dog.prototype.isPrototypeOf(beagle));  // true

// ===================================================
//             Object Inheritance
// ===================================================
// ================== Use Inheritance So You Don't Repeat Yourself ===================
//  Duplicate code in objects can be made to follow the Don't Repeat Yourself (DRY) principle by creating a supertype (or parent). Like...
function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log("nom nom nom");
    }
};

// ================== Inherit Behaviors from a Supertype ===================
// This is one way to create an instance of Animal using the 'new' operator:
let animal = new Animal();
// There are some disadvantages when using this syntax for inheritance. Instead, here's a better approach without those disadvantages
// Step 1: use Object.create():
let animal = Object.create(Animal.prototype);

// ================== Set the Child's Prototype to an Instance of the Parent ===================
// Step 2:
Bird.prototype = Object.create(Animal.prototype);

// ================== Reset an Inherited Constructor Property ===================
// When an object inherits its prototype from another object, it also inherits the supertype's constructor property. But 'duck' and all instances of 'Bird' should show that they were constructed by 'Bird' and not 'Animal'. To do so, you can manually set the constructor property of 'Bird' to the 'Bird' object
// Step 3:
Bird.prototype.constructor = Bird;

// ================== Add Methods After Inheritance ===================
function Animal() { }
Animal.prototype.eat = function () { console.log("nom nom nom"); };

function Dog() { }

// Only change code below this line
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function () {
    console.log('Woof!');
}
// Only change code above this line

let beagle = new Dog();

// ================== Override Inherited Methods ===================
function Animal() { }
Animal.prototype.eat = function () {
    return "nom nom nom";
};
function Bird() { }

Bird.prototype = Object.create(Animal.prototype);

Bird.prototype.eat = function () {
    return "peck peck peck";
};
// ================== Object ===================
let dog = {
    name: "Spot",
    numLegs: 4,
};
console.log(dog); // { name: 'Spot', numLegs: 4 }
// ================== Object.keys() ===================
//Returns an array of the object's keys
let dog = {
    name: "Spot",
    numLegs: 4,
};
console.log(Object.keys(dog)); // [ 'name', 'numLegs' ]

// ================== Object.values() ===================
//Returns an array of the object's keys' values
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
// Notice that the 'new' operator is used when calling a constructor
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
    numLegs: 2
};
console.log(canary instanceof Bird); // false




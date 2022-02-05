// ================== Profile lookup #fCC ===================

// Setup
const contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
];

// Mine
function lookUpProfile(name, prop) {
    // Only change code below this line
    for (let i = 0; i < contacts.length; i++) {
        if (name.toLowerCase() == contacts[i].firstName.toLowerCase() && contacts[i].hasOwnProperty(prop)) {
            return contacts[i][prop];
        } else if (name.toLowerCase() == contacts[i].firstName.toLowerCase() && contacts[i].hasOwnProperty(prop) == false) {
            return 'No such property';
        }
    }
    return 'No such contact';
    // Only change code above this line
}
// Supply first name and property being searched for
console.log(lookUpProfile("Akira", "owns")); // "No such property"
console.log(lookUpProfile("sherlock", "number")); // "0487345643"
console.log(lookUpProfile("bob", "hates")); // "No such contact"

// fCC solutions
// Solution 1
function lookUpProfile(name, prop) {
    // Only change code below this line
    for (let i = 0; i < contacts.length; i++) {
        if (name == contacts[i].firstName) {
            if (contacts[i].hasOwnProperty(prop)) {
                return contacts[i][prop];
            }
            return 'No such property';
        }
    }
    return 'No such contact';
    // Only change code above this line
}

// Solution 2
function lookUpProfile(name, prop) {
    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) {
            if (prop in contacts[i]) {
                return contacts[i][prop];
            } else {
                return "No such property";
            }
        }
    }
    return "No such contact";
}
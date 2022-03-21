// Setup
const recordCollection = {
    2548: {
        albumTitle: "Slippery When Wet",
        artist: "Bon Jovi",
        tracks: ["Let It Rock", "You Give Love a Bad Name"],
    },
    2468: {
        albumTitle: "1999",
        artist: "Prince",
        tracks: ["1999", "Little Red Corvette"],
    },
    1245: {
        artist: "Robert Palmer",
        tracks: [],
    },
    5439: {
        albumTitle: "ABBA Gold",
    },
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
    if (prop != "tracks" && value != "") {
        records[id][prop] = value;
    } else if (
        prop == "tracks" &&
        records[id].hasOwnProperty("tracks") == false
    ) {
        records[id][prop] = [value];
    } else if (prop == "tracks" && value != "") {
        records[id][prop].push(value);
    } else if ((value = "")) {
        delete records[id][prop];
    }
    return records;
}

updateRecords(recordCollection, 5439, "artist", "ABBA");
updateRecords(recordCollection, 5439, "tracks", "This and that");
updateRecords(recordCollection, 5439, "tracks", "The other");
updateRecords(recordCollection, 5439, "awards", "yellow");
updateRecords(recordCollection, 5439, "234", ["multiple"]);
updateRecords(recordCollection, 5439, "11", ["division"]);
updateRecords(recordCollection, 5439, "wonky", "");

console.log(recordCollection);

// ---------------------------
function adding() {
    var result = 0.1 + 0.2;
    console.log(result); // = 0.30000000000000004 (Ha!)
}

adding();

// ===================================================
// ;                Random numbers
// ===================================================

// ================== Random fraction ===================
function randomFraction() {
    return Math.random(); // Returns a pseudorandom number between 0 and 1.
}
console.log(randomFraction()); // e.g. 0.06978429467395242

// ================== Random whole number 0 - 9 ===================
function randomWholeNum() {
    return Math.floor(Math.random() * 9); // Math.floor() rounds DOWN to the nearest whole number, "Returns the greatest integer less than or equal to its numeric argument." While Math.ceil() rounds UP.
}
console.log(randomWholeNum()); // e.g. 7

// ================== Random whole number within an inclusive range ===================
function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
}
console.log(randomRange(20, 40)); // e.g. 22

// ===================================================
//      parseInt() Converts a string to an integer
// ===================================================
// ================== Convert string to a whole number ===================
function convertToInteger(str) {
    return parseInt(str); // parseInt first parameter has to be a string
}
console.log(convertToInteger("56")); // 56

// ================== Convert a binary number string to a whole number ===================
function convertToInteger(str) {
    return parseInt(str, 2); // parseInt second parameter "radix", (2) denotes a binary number which is has a number base of 2
}
console.log(convertToInteger("10011")); // 19

// ===================================================
// parseFloat() Converts a string to a floating point number
// ===================================================
function convertToDecimal(str) {
    return parseFloat(str);
}
console.log(convertToDecimal("51.006")); // 51.006

// ----------------------
const s = [5, 7, 2];
function editInPlace() {
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
    return s;
}
console.log(editInPlace()); // [ 2, 5, 7 ]

// -----------------
let magic = () => new Date();
console.log(magic());

// ------------------------
const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5])); // [ 1, 2, 3, 4, 5 ]

// ----------------------------
const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr2;

arr2 = [...arr1]; // Change this line

console.log(arr2);

// ------------ Using 'let' -----------
function checkScope() {
    let i = "function scope";
    if (true) {
        let i = "block scope";
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i; // Unnecessary?
}
checkScope(); // Block scope i is:  block scope
// Function scope i is:  function scope

//--------------------------
let a = 8,
    b = 6;
// Only change code below this line
[a, b] = [b, a];
console.log(a, b); // 6 8

// -----------------------
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
    const [a, b, ...arr] = list; 
    return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); // [ 3, 4, 5, 6, 7, 8, 9, 10 ]

// ================== Interesting ===================
//  From Grasshoppper app
if (3) { // 0 here produces 4, Any other number produces 2
    if (100) {
        console.log(2);
    } else {
        console.log(3);
    }
} else {
    console.log(4);
}

// From fCC forum
function thing() {
    let arr = [1, 2, 10]
    let num = 3;
    arr.push(num);
    return arr;
}
console.log(thing()); // [ 1, 2, 10, 3 ] (the array)
// Whereas
function thing() {
    let arr = [1, 2, 10]
    let num = 3;
    return arr.push(num);
}
console.log(thing()); // 4 (the length of arr)


// ===================================================
//                Debugging
// ===================================================
// The console.log() and typeof methods are the two primary ways to check intermediate values and types of program output

// ================== Using console.log(); ===================
function zeroArray(m, n) {
    // Creates a 2-D array with m rows and n columns of zeroes
    let newArray = [];
    for (let i = 0; i < m; i++) {
        // Adds the m-th row into newArray
        let row = [];
        console.log(`i = ${i}`);
        for (let j = 0; j < n; j++) {
            // Pushes n zeroes into the current row to create the columns
            console.log(`j = ${j}`);
            row.push(0);
            console.log(`row = ${row}`);
        }
        // Pushes the current row, which now has n zeroes in it, to the array
        newArray.push(row);
        console.log(`newArray = ${newArray}`);
    }
    return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix); // [ [ 0, 0 ], [ 0, 0 ], [ 0, 0 ] ]

// ================== Typeof ===================
// Checks what the type of something is

// JavaScript recognizes six primitive (immutable) data types: Boolean, Null, Undefined, Number, String, and Symbol (new with ES6) and one type for mutable items: Object. Note that in JavaScript, arrays are technically a type of object.
console.log(typeof ""); // string
console.log(typeof 0); // number
console.log(typeof []); // object
console.log(typeof {}); // object

// If you think you're adding two numbers, but one is actually a string, the results can be unexpected.
let seven = 7;
let three = "3";
console.log(seven + three); // 73 So this concatenates instead of adding since three is a string
console.log(typeof seven); // number
console.log(typeof three); // string

// Methods to use with console to output messages: log, warn, and clear to name a few

// ================== .reduce() ===================
let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) => previous + current);
console.log(`Sum of array values is: ${arraySum}`); // 'Sum of array values is: 6'

// ================== Falsy values ===================
// "falsy" values: false, 0, "" (an empty string), NaN, undefined, and null.

// ================== Spread ===================
function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
        // Only change code below this line
        newArr.push([...arr]); // Or
        // newArr.splice(-1, 0, [...arr]);
        // Only change code above this line
        num--;
    }
    return newArr;
}
// Array and number of times to copy into empty array
console.log(copyMachine([true, false, true], 2)); // [ [ true, false, true ], [ true, false, true ] ]

// And
function spreadOut() {
    let fragment = ["to", "code"];
    let sentence = ["learning", ...fragment, "is", "fun"]; // Change this line
    return sentence.join(' ');
}
console.log(spreadOut()); // learning to code is fun

// ================== .map with arrow function ===================
const materials = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

console.log(materials.map((material) => material.length)); // [8, 6, 7, 9]

function filteredArray(arr, elem) {
    let newArr = []; // Only change code below this line
    for (let i = 0; i < arr.length; i++) {
        console.log("arr[i] = " + arr[i]);
        if (arr[i].indexOf(elem) == -1) {
            newArr.push(arr[i]);
            console.log("newArr = " + newArr);
        }
    }
    return newArr; // Only change code above this line
}

console.log(filteredArray([[3, 2, 3], [1, 6, 2], [3, 13, 26], [19, 3, 9]], 3)); // [[ 1, 6, 2 ]]

// ================== .hasOwnProperty and 'in' ===================
// users.hasOwnProperty('Alan'); // true, or
// 'Alan' in users; // true
let users = {
    Alan: {
        age: 27,
        online: true,
    },
    Jeff: {
        age: 32,
        online: true,
    },
    Sarah: {
        age: 48,
        online: true,
    },
    Ryan: {
        age: 19,
        online: true,
    },
};

// Using .hasOwnProperty()
function isEveryoneHere(userObj) {
    if (
        userObj.hasOwnProperty("Alan") &&
        userObj.hasOwnProperty("Jeff") &&
        userObj.hasOwnProperty("Sarah") &&
        userObj.hasOwnProperty("Ryan")
    ) {
        return true;
    }
    return false;
}

// Or using 'in'
function isEveryoneHere(userObj) {
    // Only change code below this line
    if (
        "Alan" in userObj &&
        "Jeff" in userObj &&
        "Sarah" in userObj &&
        "Ryan" in userObj
    ) {
        return true;
    } else {
        return false;
    }
    // Only change code above this line
}

// ===== Or using .every() in arrow function with .hasOwnProperty() =====
// The every method is used to validate all of names used in conjunction with the hasOwnProperty method result in a value of true being returned during each iteration.
// If at least one name is not found using the hasOwnProperty method, the every method returns false.
function isEveryoneHere(userObj) {
    return ["Alan", "Jeff", "Sarah", "Ryan"].every((name) =>
        userObj.hasOwnProperty(name)
    );
}

console.log(isEveryoneHere(users));

// ================== Object.keys() ===================
let users = {
    Alan: {
        age: 27,
        online: false,
    },
    Jeff: {
        age: 32,
        online: true,
    },
    Sarah: {
        age: 48,
        online: false,
    },
    Ryan: {
        age: 19,
        online: true,
    },
};

function getArrayOfUsers(obj) {
    // Only change code below this line
    return Object.keys(obj);
    // Only change code above this line
}

console.log(getArrayOfUsers(users)); // [ 'Alan', 'Jeff', 'Sarah', 'Ryan' ]

// ================== String reversal ===================
// Mine
function reverseString(str) {
    let sprStr = [...str];
    let revStr = "";
    for (let i = str.length; i > 0; i--) {
        revStr += sprStr.pop();
    }
    return revStr;
}

// Or
function reverseString(str) {
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}

// Or 'chained'
function reverseString(str) {
    return str.split("").reverse().join("");
}

// Like chained, but with console.log();
function reverseString(str) {
    let arr = str.split("");
    console.log(arr);
    let rev = arr.reverse();
    console.log(rev);
    str = rev.join("");
    return str;
}

console.log(reverseString("Hello")); // 'olleH'



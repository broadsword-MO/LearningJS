//   -------------- A 'for' loop ----------------
// Multiplies the first "n" number of integers in the array
function multiply(arr, n) {
    let product = 1;
    for (let i = 0; i < n; i++) {
        console.log('prod1 = ' + product);
        console.log('i = ' + i);
        product *= arr[i];
        console.log('prod2 = ' + product);
    }
    return product;
}

console.log(multiply([2, 4, 7, 9], 3)); // 56

const arr = [10, 9, 8, 7, 6];
for (let i = 4; i >= 0; i--) {
    console.log(arr[i]); // 6 7 8 9 10 on separate lines
}

// ================== String reversal ===================
// Mine
function reverseString(str) {
    let sprStr = [...str]
    let revStr = "";
    for (let i = str.length; i > 0; i--) {
        revStr += sprStr.pop();
    }
    return revStr;
}
// Or
function revString(str) {
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}


// ================== For loop with .indexOf() ===================
// Filters thru sub-arrays only including ones that do not contain a certain element 
function filteredArray(arr, elem) {
    let newArr = []; // Only change code below this line
    for (let i = 0; i < arr.length; i++) {
        console.log('arr[i] = ' + arr[i]);
        if (arr[i].indexOf(elem) == -1) { // Or
        // if (!arr[i].includes(elem)) {
            newArr.push(arr[i]);
            console.log('newArr = ' + newArr);
        }
    }
    return newArr; // Only change code above this line
}
// Or using ES6 methods instead
const filteredArray = (arr, elem) => arr.filter(subArr => !subArr.includes(elem));

console.log(filteredArray([[3, 2, 3], [1, 6, 2], [3, 13, 26], [19, 3, 9]], 3)); // [ [ 1, 6, 2 ] ]

// Accomplishes the same as below

// ================== Nested For loops ===================
// Filters thru sub-arrays only including ones that do not contain a certain element 
function filterArray(arr, elem) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let hasElem = false;
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === elem) {
                hasElem = true;
            }
        }
        if (hasElem === false) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(filterArray([[3, 2, 3], [1, 6, 2], [3, 13, 26], [19, 3, 9]], 3)); // [ [ 1, 6, 2 ] ]

// --------------------
const myArr = [
    [1, 2], [3, 4], [5, 6]
];

for (let i = 0; i < myArr.length; i++) {
    for (let j = 0; j < myArr[i].length; j++) {
        console.log(myArr[i][j]); // 1 2 3 4 5 6 on separate lines
    }
}

// Returns Largest Numbers in Sub-arrays
function largestOfFour(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let largest = arr[i][1];
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > largest) {
                largest = arr[i][j];
            }
        }
        newArr.push(largest);
    }
    return newArr;
}
console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]])); // [ 25, 48, 21, -3 ]

// ================== "For In" object loop ===================
const users = {
    Alan: {
        online: false
    },
    Jeff: {
        online: true
    },
    Sarah: {
        online: false
    }
}

function countOnline(usersObj) {
    let result = 0;
    for (let user in usersObj) {
        if (usersObj[user].online == true) {
            result++;
        }
    }
    return result;
}

console.log(countOnline(users)); // 1

// ================== "For of" array loop ===================
// Only adds 'truthy' values to the new array
function bouncer(arr) {
    let newArr = [];
    for (let x of arr) { // using a for/of loop
        if (x) newArr.push(x); // If x evaluates to false the .push() won't happen
    }
    return newArr;
}
console.log(bouncer([7, "ate", "", false, 9])); // [ 7, 'ate', 9 ]

// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
function diffArray(arr1, arr2) {
    const newArr = [];
    for (let num of arr1) {
        if (arr2.indexOf(num) === -1) {
            newArr.push(num);
        }
    }
    for (let num of arr2) {
        if (arr1.indexOf(num) === -1) {
            newArr.push(num);
        }
    }
    return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])); // [ 4 ]

// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument).
function whatIsInAName(collection, source) {
    const arr = [];
    let sourceKeys = Object.keys(source);
    // console.log(sourceKeys);
    collection.forEach(function (obj) {
        // let objKeys = Object.keys(obj);
        // console.log(objKeys);
        for (let key of sourceKeys) {
            // console.log(key);
            // console.log(obj[key]);
            // console.log(source[key]);
            if (obj[key] !== source[key]) {
                return false;
            }
        }
        arr.push(obj);
    })
    return arr;
}

console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })); // [ { apple: 1, bat: 2 }, { apple: 1, bat: 2, cookie: 2 } ]

/* The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2D array.
Base pairs are a pair of AT and CG. Match the missing element to the provided character.
Return the provided character as the first element in each array.
For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]
The character and its pair should be paired up in an array, and all the arrays grouped into one encapsulating array. */
function pairElement(str) {
    const strArr = [...str];
    let dnaArr = [];
    for (let elem of strArr) {
        if (elem === "A") dnaArr.push(["A", "T"]);
        else if (elem === "T") dnaArr.push(["T", "A"]);
        else if (elem === "C") dnaArr.push(["C", "G"]);
        else if (elem === "G") dnaArr.push(["G", "C"]);
        else return "DNA strand input error";
    }
    return dnaArr;
}
// And hybrid with a "for of" array loop and "switch case"
function pairElement(str) {
    const strArr = [...str];
    let dnaArr = [];
    for (let elem of strArr) {
        switch (elem) {
            case 'A': dnaArr.push(["A", "T"]);
                break;
            case 'T': dnaArr.push(["T", "A"]);
                break;
            case 'C': dnaArr.push(["C", "G"]);
                break;
            case 'G': dnaArr.push(["G", "C"]);
        }
    }
    return dnaArr;
}

console.log(pairElement("TTGAG")); // [ [ 'T', 'A' ], [ 'T', 'A' ], [ 'G', 'C' ], [ 'A', 'T' ], [ 'G', 'C' ] ]

// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
function uniteUnique(...arrs) {
    let newArr = [];
    let flatArr = arrs.flat();
    for (let num of flatArr) {
        if (!newArr.includes(num)) {
            newArr.push(num);
        }
    }
    return newArr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); // [ 1, 3, 2, 5, 4 ]

// Flatten a nested array. You must account for varying levels of nesting.
function steamrollArray(arr) {
    for (let item of arr) {
        arr = [].concat(...arr);
    }
    return arr;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));

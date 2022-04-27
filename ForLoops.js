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
        if (arr[i].indexOf(elem) == -1) {
            newArr.push(arr[i]);
            console.log('newArr = ' + newArr);
        }
    }
    return newArr; // Only change code above this line
}
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

// ================== "For In" loop ===================
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
    // Only change code below this line
    let result = 0;
    for (let user in usersObj) {
        if (usersObj[user].online == true) {
            result++;
        }
    }
    return result;
    // Only change code above this line
}

console.log(countOnline(users)); // 1

// ================== "For of" loop ===================
// Only adds 'truthy' values to the new array
function bouncer(arr) {
    let newArr = [];
    for (let x of arr) { // using a for/of loop
        if (x) newArr.push(x); // If x evaluates to false the .push() won't happen
    }
    return newArr;
}
console.log(bouncer([7, "ate", "", false, 9])); // [ 7, 'ate', 9 ]

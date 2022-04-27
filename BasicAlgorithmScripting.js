// Prior lessons needed

// ================== Factorialize a number ===================
function factorialize(num) {
    if (num <= 0) {
        return 1;
    } else {
        return num * factorialize(num - 1);
    }
}
console.log(factorialize(5)); // 120

// ================== Find the Longest Word in a String ===================
// Find out what is the longest length of any of the words in a single string
function findLongestWordLength(str) {
    const strArr = str.split(" ");
    var longestStr = 0;
    console.log("strArr = " + strArr);
    console.log(strArr.length);
    for (let i = 0; i < strArr.length; i++) {
        console.log("strArr[i] = " + strArr[i]);
        console.log("string length = " + strArr[i].length);
        if (longestStr < strArr[i].length) {
            longestStr = strArr[i].length;
            console.log("longestStr = " + longestStr);
        }
    }
    return longestStr;
}

console.log(
    findLongestWordLength("The quick brown fox jumped over the lazy dog")
); // 6

// ================== Return Largest Numbers in Sub-arrays ===================
function largestOfFour(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        var largest = arr[i][1];
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > largest) {
                largest = arr[i][j];
            }
        }
        newArr.push(largest);
    }
    return newArr;
}
console.log(
    largestOfFour([
        [17, 23, 25, 12],
        [25, 7, 34, 48],
        [4, -10, 18, 21],
        [-72, -3, -17, -10],
    ])
); // [ 25, 48, 21, -3 ]

// ================== Confirm the Ending ===================
// Function checks for the target at the end of the string
// Mine
function confirmEnding(str, target) {
    let regex = new RegExp(`${target}$`); // /target$/
    // Or
    // let regex = new RegExp(target + "$", "i"); // using concatenation
    return regex.test(str);
}
console.log(confirmEnding("Bastian", "n"));

// fCC
function confirmEnding(str, target) {
    return str.slice(str.length - target.length) === target;
}
console.log(confirmEnding("He has to give me a new name", "name")); // true

// ================== Repeat a String Repeat a String ===================
// Mine
function repeatStringNumTimes(str, num) {
    if (num <= 0) return "";
    let repeatStr = "";
    while (num > 0) {
        repeatStr += str;
        num--;
    }
    return repeatStr;
}
console.log(repeatStringNumTimes("abc", 3)); // abcabcabc

// fCC recursive version
function repeatStringNumTimes(str, num) {
    if (num < 1) {
        return "";
    } else {
        return str + repeatStringNumTimes(str, num - 1);
    }
}
console.log(repeatStringNumTimes("abc", 3)); // abcabcabc

// And a ternary recursive version
function repeatStringNumTimes(str, num) {
    return num < 1 ? "" : str + repeatStringNumTimes(str, num - 1);
}
console.log(repeatStringNumTimes("abc", 3)); // abcabcabc

// ================== Truncate a String ===================
function truncateString(str, num) {
    return str.length <= num ? str : str.slice(0, num) + "...";
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8)); // A-tisket...
// console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2));

// ================== Finders Keepers ===================
// Finds the first number in the "arr" array that solves the "func" function, otherwise returns 'undefined'
function findElement(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) return arr[i];
    }
    return undefined;
}
// console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })); // 8
console.log(findElement([1, 2, 3, 4], (num) => num % 4 === 0)); // 4

// ================== Boo Who ===================
// Checks if an entry is a boolean
function booWho(bool) {
    return typeof bool === "boolean";
}
console.log(booWho(false)); // true

// ================== Title Case a Sentence ===================
function titleCase(str) {
    let arr = str.toLowerCase().split(" ");
    let titleArr = [];
    for (let i = 0; i < arr.length; i++) {
        titleArr.push(arr[i].replace(arr[i][0], arr[i][0].toUpperCase()));
    }
    return titleArr.join(" ");
}
console.log(titleCase("I'm a little tea pot")); // I'm A Little Tea Pot

// ================== Slice and Splice ===================
// Takes the "arr1" array and splices it into the "arr2" array at index "n", without altering the original arrays. added Mar 02, 2022
function frankenSplice(arr1, arr2, n) {
    let newArr2 = arr2;
    newArr2.splice(n, 0, ...arr1);
    return newArr2;
}
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1)); // [ 4, 1, 2, 3, 5, 6 ]

// ================== Falsy Bouncer ===================
// Kicks out any 'falsy' values, returns the new array
function bouncer(arr) {
    let newArr = [];
    for (let x of arr) {
        // using a for/of loop
        if (x) newArr.push(x); // If x evaluates to false the .push() won't happen
    }
    return newArr;
}
console.log(bouncer([7, "ate", "", false, 9])); // [ 7, 'ate', 9 ]

//fCC
// "The Array.prototype.filter method expects a function that returns a Boolean value which takes a single argument and returns true for truthy value or false for falsy value. Hence we pass the built-in Boolean function."
function bouncer(arr) {
    return arr.filter(Boolean);
}
console.log(bouncer([null, NaN, 1, 2, undefined])); // [ 1, 2 ]

// ================== Where Do I Belong ===================
// Returns the lowest index at which a value (num) should be inserted into an array (arr) once it has been sorted from smallest to biggest. added Mar 16, 2022
// Mine
function getIndexToIns(arr, num) {
    arr.push(num);
    console.log(arr);
    arr.sort(); // Almost works, but a newer duplicate number gets placed after an existing one
    console.log(arr);
    return arr.indexOf(num);
}
// Fixed
function getIndexToIns(arr, num) {
    arr.push(num); // .push(), .unshift(), splice() cannot be used in chaining because they do not return their value to the function, but arr.concat() can because it returns a new array with all the values specified
    return arr.sort((a, b) => a - b).indexOf(num);
}
console.log(getIndexToIns([60, 40], 50)); // 1
console.log(getIndexToIns([1, 2, 3, 4], 1.5)); // 1
console.log(getIndexToIns([3, 10, 5], 3)); // 0

// fCC solution
function getIndexToIns(arr, num) {
    return arr
        .concat(num)
        .sort((a, b) => a - b)
        .indexOf(num);
}
console.log(getIndexToIns([], 1)); // 0
console.log(getIndexToIns([5, 3, 20, 3], 5)); // 2

// ================== Mutations ===================
// Returns true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
// Mine
function mutation(arr) {
    arr[0] = arr[0].toLowerCase();
    arr[1] = arr[1].toLowerCase();
    for (let i = 0; i < arr[1].length; i++) {
        let hasAllLetts = false;
        for (let j = 0; j < arr[0].length; j++) {
            if (arr[1][i] === arr[0][j]) {
                console.log(
                    `arr[1][i] = ${arr[1][i]}, arr[0][j] = ${arr[0][j]}`
                );
                hasAllLetts = true;
            }
        }
        if (hasAllLetts === false) {
            return false;
        }
    }
    return true;
}

// fCC
// First we make the two strings in the array lowercase. Then we loop through our test characters and if any of them is not found we return false. If they are all found, the loop will finish without returning anything and we get to return true.
function mutation(arr) {
    let test = arr[1].toLowerCase();
    let target = arr[0].toLowerCase();
    for (let i = 0; i < test.length; i++) {
        console.log(target.indexOf(test[i])); // I added
        if (target.indexOf(test[i]) < 0) return false;
    }
    return true;
}
console.log(mutation(["Hello", "ehy"])); // 1 0 -1 false
//And
// Take the second string, lowercase it and turn it into an array; then make sure every one of its letters is a part of the lowercased first string. .every() will basically give you letter by letter to compare, which we do by using .indexOf() on the first string. .indexOf() will give you -1 if the current letter is missing. We check that not to be the case, for if this happens even once .every() will be false.
function mutation(arr) {
    return arr[1]
        .toLowerCase()
        .split("")
        .every(function (letter) {
            return arr[0].toLowerCase().indexOf(letter) !== -1;
        });
}
console.log(mutation(["Mary", "Aarmy"])); // true
console.log(mutation(["ate", "date"])); // false
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])); // true

// ================== Chunky Monkey ===================
// A function that splits an array (arr) into groups the length of a number (size) and returns them as a two-dimensional array. Added Mar 21, 2022
function chunkArrayInGroups(arr, size) {
    if (size <= 0) {
        return console.log("Get it right!");
    }
    let newArr = [];
    let newSize = size;
    while (newArr.length < arr.length / size) {
        newArr.push(arr.slice(newSize - size, newSize));
        newSize += size;
    }
    return newArr;
}
// fCC
function chunkArrayInGroups(arr, size) {
    let newArr = [];
    for (let i = 0; i < arr.length; i += size) {
        newArr.push(arr.slice(i, i + size));
    }
    return newArr;
}
// And
function chunkArrayInGroups(arr, size) {
    let newArr = [];
    while (arr.length > 0) {
        newArr.push(arr.splice(0, size));
    }
    return newArr;
}
// fCC forum lbarjak ... brilliant
// A 'For cycle without cycle’s variable increment/decrement. The variable is arr.length only. I use splice instead slice.' Splice can remove some of the array, but slice doesn't.
function chunkArrayInGroups(arr, size) {
    var ar = [];
    for (i = 0; i < arr.length; ) ar.push(arr.splice(i, size));
    return ar;
}
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)); // [[ 0, 1, 2, 3 ], [ 4, 5 ]]
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2)); // [[ 'a', 'b' ], [ 'c', 'd' ]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)); // [[ 0, 1, 2, 3 ], [ 4, 5, 6, 7 ], [ 8 ]]

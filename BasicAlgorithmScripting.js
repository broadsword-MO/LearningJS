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
        console.log('strArr[i] = ' + strArr[i]);
        console.log("string length = " + strArr[i].length);
        if (longestStr < strArr[i].length) {
            longestStr = strArr[i].length;
            console.log('longestStr = ' + longestStr);
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
console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]])); // [ 25, 48, 21, -3 ]

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
    return str.length <= num ? str : str.slice(0, num) + '...';
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
console.log(findElement([1, 2, 3, 4], num => num % 4 === 0)); // 4

// ================== Boo Who ===================
// Checks if an entry is a boolean
function booWho(bool) {
    return typeof bool === 'boolean';
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
    let newArr2 = arr2.slice();
    newArr2.splice(n, 0, ...arr1);
    return newArr2;
}
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1)); // [ 4, 1, 2, 3, 5, 6 ]

// ================== Falsy Bouncer ===================
// Kicks out any 'falsy' values, returns the new array
function bouncer(arr) {
    let newArr = [];
    for (let x of arr) { // using a for/of loop
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


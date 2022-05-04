// ================== Sum All Numbers in a Range ===================
// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

function sumAll(arr) {
    let sortArr = [...arr].sort((a, b) => a - b); // Sort
    let sum = 0;
    for (let i = sortArr[0]; i <= sortArr[1]; i++) {
        sum += i;
    }
    return sum;
}

console.log(sumAll([4, 1]));

// fCC recursive solution
function sumAll(arr) {
    const [first, last] = [...arr].sort((a, b) => a - b);
    return first !== last
        ? first + sumAll([first + 1, last])
        : first;
}

sumAll([1, 4]);

//   ================== Diff Two Arrays ===================
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
// My imperative solution
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
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "George", "andesite", "grass", "dirt", "dead shrub"])); // [ 'pink wool', 'George' ]

// fCC declaritive solution
function diffArray(arr1, arr2) {
    return arr1
        .concat(arr2)
        .filter(item => !arr1.includes(item) || !arr2.includes(item));
}

console.log(diffArray([1, 2, 3, 5, 7], [1, 2, 3, 4, 5])); // [ 7, 4 ]

// And from fCC forum belcurv
function diffArray(arr1, arr2) {
    // filter each array for the absent members
    var filteredArr1 = arr1.filter((el) => arr2.indexOf(el) === -1),
        filteredArr2 = arr2.filter((el) => arr1.indexOf(el) === -1);

    // merge both sets of absent members
    return filteredArr1.concat(filteredArr2);
}

// ================== Seek and Destroy ===================
/* You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
Note: You have to use the arguments object. (Nope) */

// 1st successful
function destroyer(arr, ...others) {
    let newArr = [];
    arr.forEach(function (elem) {
        if (others.indexOf(elem) === -1) {
            newArr.push(elem);
        }
    });
    return newArr;
}

// 2nd, better
function destroyer(arr, ...others) {
    return arr.filter(elem => others.indexOf(elem) === -1);
}
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));

// fCC
function destroyer(arr, ...valsToRemove) {
    return arr.filter(elem => !valsToRemove.includes(elem));
}

console.log(destroyer(["tree", "hamburger", 53], "tree", 53));
console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"));

// ================== Wherefore art thou ===================
// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument).
function whatIsInAName(collection, source) {
    const arr = [];
    // Only change code below this line
    // return collection.filter(obj => obj.hasOwnProperty(source)); // Not working
    collection.forEach(function (obj) {
        console.log(obj);
        for (let prop in obj) {
            console.log(prop);
            console.log(Object.keys(source).toString());
            if (obj[prop] == Object.keys(source).toString()) {
                console.log(prop);
            }
        }
        arr.push(obj);
    });
// Only change code above this line
    return arr;
}
console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));

String.
    Array.for
Object.
let array = { last: "Capulet" };
console.log(array.toString());
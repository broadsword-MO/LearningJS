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
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)); // [ 1, 5, 1 ]

console.log(destroyer(["tree", "hamburger", 53], "tree", 53)); // [ 'hamburger' ]
// fCC
function destroyer(arr, ...valsToRemove) {
    return arr.filter(elem => !valsToRemove.includes(elem));
}

console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan")); // [ 12, 92, 65 ]

// ================== Wherefore art thou ===================
// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument).
// 1st successful w/console.logs
function whatIsInAName(collection, source) {
    const arr = [];
    // Only change code below this line
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
    // Only change code above this line
    return arr;
}

// 2nd, better
function whatIsInAName(collection, source) {
    return collection.filter(obj => Object.keys(source).every(key => obj[key] === source[key]));
}

console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })); // [ { apple: 1, bat: 2 }, { apple: 1, bat: 2, cookie: 2 } ]
console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })); // [ { first: 'Tybalt', last: 'Capulet' } ]


// ================== Spinal Tap Case ===================
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
// Mine using regex
function spinalCase(str) {
    return str
        .replace(/([A-Z])/g, " $1")
        .trim()
        .replace(/\s+/g, "-")
        .replace(/_/g, "")
        .toLowerCase();
}
// Or fCC
function spinalCase(str) {
    return str
        /* Split the string (into an array) at one of the following conditions
            1. A whitespace character [\s] is encountered
            2. Underscore character [_] is encountered
            3. Or is followed by an uppercase letter [(?=[A-Z])] */
        .split(/\s|_|(?=[A-Z])/)
        // Join the array using a hyphen (-)
        .join("-")
        // Lowercase the whole resulting string
        .toLowerCase();
}
// from fCC forum t0cc
function spinalCase(str) {
    return str.replace(/(\w)[ _]?([A-Z])| /g, "$1-$2").toLowerCase();
}

console.log(spinalCase("AllThe-small Things"));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase('This Is Spinal Tap'));

// ================== Pig Latin ===================
/* Pig Latin is a way of altering English Words. The rules are as follows:
    1. If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.
    2. If a word begins with a vowel, just add way at the end. */
function translatePigLatin(str) {
    let splitStr = str.split("");
    let regex = /[aeiou]/g;
    if (!str.match(regex)) { // If the string doesn't have any vowels in it
        splitStr.push("ay");
    } else if (splitStr[0].match(regex)) { // If the first letter is a vowel
        splitStr.push("way");
    } else {
        let count = 0;
        while (!splitStr[0].match(regex) && count < 4) {
            splitStr.push(splitStr[0])
            splitStr.shift();
            count++;
        }
        splitStr.push("ay");
    }
    return splitStr.join('');
}
// fCC
function translatePigLatin(str) {
    return str
        .replace(/^[aeiou]\w*/, "$&way") // If the string begins with a vowel, "$&" returns the whole match and "way" is added to it, otherwise...
        .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay"); // If it begins with one or more non-vowels followed by zero or more alphanumerics, the consonants get moved to the end of the word and "ay" is added to it
}
// from fCC forum rafaeltikva
function translatePigLatin(str) {
    return str.match(/^([^aeiou]+)/) ? str.replace(/^([^aeiou]+)(\w+)?/, "$2$1ay") : str + "way";
}
// from fCC forum RainierXS
function translatePigLatin(str) {
    if (str.match(/^[aeiou]/)) {  //starts with vowel
        return str.replace(/(.+)/, "$1way");
    } else if (str.match(/[aeiou]/g)) { //doesn't start with a vowel but has a vowel in it
        return str.replace(/(^[^aeiou]+)(.+)/g, "$2$1ay");
    } else { //all consonants 
        return str + "ay";
    }
}
// RainierXS solution converted to ternary
function translatePigLatin(str) {
    return str.match(/^[aeiou]/)
        ? str.replace(/(.+)/, "$1way")
        : str.match(/[aeiou]/g)
            ? str.replace(/(^[^aeiou]+)(.+)/g, "$2$1ay")
            : str + "ay";
}

console.log(translatePigLatin("algorithm")); // algorithmway
console.log(translatePigLatin("schwartz")); // artzschway
console.log(translatePigLatin("rhythm")); // rhythmay
console.log(translatePigLatin("consonant")); // onsonantcay
console.log(translatePigLatin("glove")); // oveglay

// ================== Search and Replace ===================
// Perform a search and replace on the sentence using the arguments provided and return the new sentence. Note: Preserve the case of the first character in the original word when you are replacing it. 
function myReplace(str, before, after) {
    return str.replace(before, /[a-z]/.test(before[0]) ? after.toLowerCase() : after[0].toUpperCase() + after.slice(1));
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "Leaped")); // A quick brown fox leaped over the lazy dog
console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms")); // Let us get back to more Algorithms
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting")); // He is Sitting on the couch
console.log(myReplace("His name is Tom", "Tom", "john")); // His name is John

// ================== DNA Pairing ===================
/* The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2D array.
Base pairs are a pair of AT and CG. Match the missing element to the provided character.
Return the provided character as the first element in each array.
For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]
The character and its pair should be paired up in an array, and all the arrays grouped into one encapsulating array. */
// 1st successful
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
// 2nd hybrid with a "for of" array loop and "switch case"
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
// fCC almost the same as the solution from "jori" below
function pairElement(str) {
    //create object for pair lookup
    var pairs = {
        A: "T",
        T: "A",
        C: "G",
        G: "C"
    };
    //split string into array of characters
    var arr = str.split("");
    //map character to array of character and matching pair
    return arr.map(x => [x, pairs[x]]);
}
// from fCC forum emo1
function pairElement(str) {
    return str.split("").map(function (el) {
        if (el === "A") return ["A", "T"];
        else if (el === "T") return ["T", "A"];
        else if (el === "C") return ["C", "G"];
        else if (el === "G") return ["G", "C"];
    });
}
// and fCC forum jori
function pairElement(str) {
    const mapping = { 'A': 'T', 'T': 'A', 'C': 'G', 'G': 'C' };
    return str.split('').map(item => [item, mapping[item]]);
}
console.log(pairElement("GCG"));
console.log(pairElement("TTGAG"));
console.log(pairElement("TTGbG"));
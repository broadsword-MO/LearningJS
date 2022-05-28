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

// ================== Missing letters ===================
// Find the missing letter in the passed letter range and return it. If all letters are present in the range, return undefined.

// 1st successful w/console.logs
function fearNotLetter(str) {
    const alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let strArr = str.split('');
    let beginInd = alpha.indexOf(strArr[0]);
    console.log(alpha.indexOf(strArr[0]));
    let endInd = alpha.indexOf(strArr[strArr.length - 1]);
    console.log(alpha.indexOf(strArr[strArr.length - 1]));
    console.log(strArr.length - 1);
    for (let i = beginInd; i < endInd; i++) {
        console.log(alpha[i]);
        if (strArr.indexOf(alpha[i]) < 0) {
            return alpha[i];
        }
    }
}
// 2nd refined version of 1st
function fearNotLetter(str) {
    const alpha = 'abcdefghijklmnopqrstuvwxyz';
    let beginInd = alpha.indexOf(str[0]);
    let endInd = alpha.indexOf(str[str.length - 1]);
    for (let i = beginInd; i < endInd; i++) {
        if (str.indexOf(alpha[i]) < 0) {
            return alpha[i];
        }
    }
}
console.log(fearNotLetter("abcde")); // undefined
console.log(fearNotLetter("bcdf")); // e
console.log(fearNotLetter("efghikl")); // j

// Scattered thoughts of mine
function fearNotLetter(str) {
    // return alpha.find((lett) => !strArr.includes(lett));
    const alpha = 'abcdefghijklmnopqrstuvwxyz'.split(''); // Maybe unnecessary
    let strArr = str.split(''); // Maybe unnecessary
    let test = arr[1].toLowerCase();
    let target = arr[0].toLowerCase();
    for (let i = 0; i < alpha.length; i++) {
        console.log(strArr.indexOf(alpha[i])); // I added
        if (strArr.indexOf(alpha[i]) < 0) {
            return alpha[i];
        }
        return "Not";
    }
}

// from fCC forum benjaminadk
/* Explanation
    1. So since the char-codes go in order I just compared the code of the current letter + 1 to the code of the next letter
    2. If those two values aren’t equal I return the letter that should be there
    3. If nothing qualifies for my if statement the function automatically returns undefined so I don’t even have to write that in the code
    4. Having the loop stop at str.length-1 was key here
Javascript just blows my mind sometimes. this was just the first thing that came to mind and the fact that it works makes me psyched to do more */
// With console.logs added
function fearNotLetter(str) {
    for (let i = 0; i < str.length - 1; i++) {
        console.log(str.charCodeAt(i) + 1);
        console.log(str.charCodeAt(i + 1));
        if (str.charCodeAt(i) + 1 !== str.charCodeAt(i + 1)) {
            return String.fromCharCode(str.charCodeAt(i) + 1);
        }
    }
}
console.log(fearNotLetter("abcde"));
console.log(fearNotLetter("bcdf"));
console.log(fearNotLetter("efghikl"));

// ================== Sorted Union ===================
/* Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order. */
// 1st successful
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
// 2nd  better
function uniteUnique(...arrs) {
    let newArr = [];
    let flatArr = arrs.flat();
    return flatArr.filter(num => !newArr.includes(num) ? newArr.push(num) : null);
}
// 3rd better still
function uniteUnique(...arrs) {
    let flatArr = arrs.flat(); // Can't chain for some reason
    return flatArr.filter((num, index) => flatArr.indexOf(num) === index);
}
// Or using the (formerly unknown) "Set". added May 24, 2022
/* A Set is a collection of unique values. To remove duplicates from an array:
    1. Convert an array of duplicates to a Set. The new Set will implicitly remove duplicate elements.
    2. Convert the set back to an array. */
// Like this
function uniteUnique(...arrs) {
    return [...new Set(arrs.flat())];
}
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); // [ 1, 3, 2, 5, 4 ]
// Not this
function uniteUnique(...arrs) {
    return [new Set(arrs.flat())];
}
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); // [ Set(5) { 1, 3, 2, 5, 4 } ]

// ================== Convert HTML Entities ===================
// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
// 1st successful
function convertHTML(str) {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");
}
// from fCC forum EvanMorrison
function convertHTML(str) {
    var entities = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' }
    return str.replace(/[&<>"']/g, function (match) {
        return entities[match]
    })
}

console.log(convertHTML('Stuff in "quotation marks"')); // Stuff in &quot;quotation marks&quot;
console.log(convertHTML("abc")); // abc
console.log(convertHTML("Dolce & Gabbana")); // Dolce &amp; Gabbana
console.log(convertHTML("<>")); // &lt;&gt;

// ================== Sum All Odd Fibonacci Numbers ===================
/* Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5. */

// 0	1	1	2	3	5	8	13	21	34	55	89	144	233	377	610	987	1597	2584	4181	6765    etc.
// 1st successful
function sumFibs(num) {
    let sum = 0;
    let prev = 0;
    let next = 1;
    let nextNum = 1;
    while (nextNum <= num) {
        if (nextNum % 2 !== 0) {
            sum += nextNum;
        }
        nextNum = prev + next;
        if (nextNum > num) {
            return sum;
        }
        prev = next;
        next = nextNum;
    }
}
// 2nd, ok. Used a while loop with arr.reduce() for this
function sumFibs(num) {
    let prev = 0, next = 1, nextNumSum = 1;
    let arr = [];
    while (nextNumSum <= num) {
        arr.push(nextNumSum);
        nextNumSum = prev + next;
        prev = next;
        next = nextNumSum;
    }
    return arr.reduce((sum, n) => n % 2 !== 0 ? sum + n : sum + 0, 0);
}

console.log(sumFibs(10)); // 10
console.log(sumFibs(20)); // 23

//from fCC forum forkerino, a ternary recursive solution
const sumFibs = (n, prev = 0, curr = 1, sum = 0) => curr > n ? sum : sumFibs(n, curr, prev + curr, sum + (curr % 2 && curr));

// from fCC forum johnlreavis, using a nested recursive function with a while loop
/* The input ‘b’ is the number in the fibonacci sequence. Start calling the recursive function with 0 and 1, to get 1,1,2…
Otherwise counter and while loop are the same as basic solution.*/
function sumFibs(num) {
    let oddsum = 0;
    function fib(a, b) {
        while (b <= num) {
            if (b % 2 === 1) {
                oddsum += b;
            }
            return fib(b, a + b);
        }
    }
    fib(0, 1);
    return oddsum;
}

console.log(sumFibs(14)); // 23
console.log(sumFibs(21)); // 44

// ================== Sum All Primes ===================
/* A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.
Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num. */

function sumPrimes(num) {
    const primes = [2];
    for (let n = 3; n <= num; n += 2) {
        if (primes.every((prime) => n % prime != 0)) {
            primes.push(n);
        }
    }
    console.log(primes);
    return primes.reduce((sum, num) => sum + num, 0);
}

console.log(sumPrimes(30));

/* The guts of the above solution is this from StackOverflow.com "weston" answered April 14, 2015
How to find prime numbers between 0 - 100?
A number is a prime if it is not divisible by other primes lower than the number in question.
    1. This builds up a primes array.
    2. Tests each new odd candidate n for division against existing found primes lower than n.
    3. As an optimization it does not consider even numbers and prepends 2 as a final step (prepending unnecessary, just initialize the "primes" array with 2 in it). */
var primes = [];
for (var n = 3; n <= 100; n += 2) {
    if (primes.every(function (prime) { return n % prime != 0 })) {
        primes.push(n);
    }
}
primes.unshift(2);

// fCC, supposedly faster for large-ish numbers when compared to my solution type, because this one doesn't keep/add-on-to/read an array
function sumPrimes(num) {
    // Helper function to check primality
    function isPrime(num) {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0)
                return false;
        }
        return true;
    }
    // Check all numbers for primality
    // let sum = 0;
    // for (let i = 2; i <= num; i++) {
    //     if (isPrime(i))
    //         sum += i;
    // }

    // My revised version of the section above, @ 1/2 as many iterations
    let sum = 2;
    for (let i = 3; i <= num; i += 2) {
        if (isPrime(i))
            sum += i;
    }
    return sum;
}
console.log(sumPrimes(30));

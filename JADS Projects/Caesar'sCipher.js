/* One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on. */

const { string } = require("prop-types");

// 1st successful, submitted
function rot13(str) {
    const map = { 'N': 'A', 'O': 'B', 'P': 'C', 'Q': 'D', 'R': 'E', 'S': 'F', 'T': 'G', 'U': 'H', 'V': 'I', 'W': 'J', 'X': 'K', 'Y': 'L', 'Z': 'M', 'A': 'N', 'B': 'O', 'C': 'P', 'D': 'Q', 'E': 'R', 'F': 'S', 'G': 'T', 'H': 'U', 'I': 'V', 'J': 'W', 'K': 'X', 'L': 'Y', 'M': 'Z', '.': '.', '?': '?', '!': '!' };
    return str.split(' ').map(word => word.split('').map(letter => map[letter]).join('')).join(' ');
}
// another, more robust solution. Change key value for different result
function rot13(str) {
    str = str.toUpperCase();
    const alphab = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const key = 13; // cipher/de-cipher key
    return str.split(' ').map(word => word.split('').map(letter => alphab.includes(letter) ? alphab[alphab.indexOf(letter) + key > 25 ? alphab.indexOf(letter) + key - 26 : alphab.indexOf(letter) + key] : letter).join('')).join(' ');
}

console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));

// A more complete and versatile solution of mine
function encrytption(str, cipherKey) {
    let strArr = str.split('');
    let newStr = [];
    const alphaLower = 'abcdefghijklmnopqrstuvwxyz';
    const alphaUpper = alphaLower.toUpperCase();
    const key = cipherKey; // cipher/de-cipher key
    for (let word of strArr) {
        let letters = word.split('')
        for (let letter of letters) {
            if (alphaLower.includes(letter)) {
                newStr.push(alphaLower[alphaLower.indexOf(letter) + key > 25 ? alphaLower.indexOf(letter) + key - 26 : alphaLower.indexOf(letter) + key < 0 ? alphaLower.indexOf(letter) + key + 26 : alphaLower.indexOf(letter) + key]);
            } else if (alphaUpper.includes(letter)) {
                newStr.push(alphaUpper[alphaUpper.indexOf(letter) + key > 25 ? alphaUpper.indexOf(letter) + key - 26 : alphaUpper.indexOf(letter) + key < 0 ? alphaUpper.indexOf(letter) + key + 26 : alphaUpper.indexOf(letter) + key]);
            } else newStr.push(letter);
        }
    }
    return newStr.join('')
}

console.log(encrytption('freeCodeCamp is great!', 17));
console.log(encrytption('wivvTfuvTrdg zj xivrk!', -17));
console.log(encrytption('abcdefghijklmnopqrstuvwxyz', 6));
console.log(encrytption('ghijklmnopqrstuvwxyzabcdef', -6));
console.log(encrytption('This, that and the other!', 3));
console.log(encrytption('Wklv, wkdw dqg wkh rwkhu!', -3));
console.log(encrytption('This, that and the other!', 13));
console.log(encrytption('Guvf, gung naq gur bgure!', -13));


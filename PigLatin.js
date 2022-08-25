// ================== Pig Latin ===================
/* Pig Latin is a way of altering English Words. The rules are as follows:
    1. If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.
    2. If a word begins with a vowel, just add way at the end. */

// Mine
function translatePigLatin(str) {
    let splitStr = str.split('');
    let regex = /[aeiou]/g;
    if (!str.match(regex)) {
        // If the string doesn't have any vowels in it
        splitStr.push('ay');
    } else if (splitStr[0].match(regex)) {
        // If the first letter is a vowel
        splitStr.push('way');
    } else {
        let count = 0;
        while (!splitStr[0].match(regex) && count < 4) {
            splitStr.push(splitStr[0]);
            splitStr.shift();
            count++;
        }
        splitStr.push('ay');
    }
    return splitStr.join('');
}
// fCC
function translatePigLatin(str) {
    return str
        .replace(/^[aeiou]\w*/, '$&way') // If the string begins with a vowel, "$&" returns the whole match and "way" is added to it, otherwise...
        .replace(/(^[^aeiou]+)(\w*)/, '$2$1ay'); // If it begins with one or more non-vowels followed by zero or more alphanumerics, the consonants get moved to the end of the word and "ay" is added to it
}
// from fCC forum rafaeltikva
function translatePigLatin(str) {
    return str.match(/^([^aeiou]+)/)
        ? str.replace(/^([^aeiou]+)(\w+)?/, '$2$1ay')
        : str + 'way';
}
// from fCC forum RainierXS
function translatePigLatin(str) {
    if (str.match(/^[aeiou]/)) {
        //starts with vowel
        return str.replace(/(.+)/, '$1way');
    } else if (str.match(/[aeiou]/g)) {
        //doesn't start with a vowel but has a vowel in it
        return str.replace(/(^[^aeiou]+)(.+)/g, '$2$1ay');
    } else {
        //all consonants
        return str + 'ay';
    }
}
// RainierXS solution converted to ternary
function translatePigLatin(str) {
    return str.match(/^[aeiou]/)
        ? str.replace(/(.+)/, '$1way')
        : str.match(/[aeiou]/g)
        ? str.replace(/(^[^aeiou]+)(.+)/g, '$2$1ay')
        : str + 'ay';
}

console.log(translatePigLatin('algorithm')); // algorithmway
console.log(translatePigLatin('schwartz')); // artzschway
console.log(translatePigLatin('rhythm')); // rhythmay
console.log(translatePigLatin('consonant')); // onsonantcay
console.log(translatePigLatin('glove')); // oveglay

// ================== A literal regex search ===================
// Note that regex searches are case sensitive unless the "i" flag is used
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
// a literal regex search
let waldoRegex = /Waldo/;
let result = waldoRegex.test(waldoIsHiding);
console.log(result); // true

// ================== The or operator "|" ===================
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // the | "or" operator
let result = petRegex.test(petString);
console.log(result); // true

// ================== .match vs .test ===================
// Note that the .match syntax is the "opposite" of the .test method.
'string'.match(/regex/); // returns ['string']
/regex/.test('string'); // returns true or false

// ================== The wildcard "." ===================
// The "." in the regex is a wildcard representing one unkown character.
let exampleStr = "Let the stun have fun with regular expressions!";
let unRegex = /.un/g; // The g afterward means "global" or check everywhere not just return the first result
let result = unRegex.test(exampleStr);
console.log(result); // true
let result1 = exampleStr.match(unRegex);
console.log(result1); // [ 'tun', 'fun' ]

// ================== Character classes "[ ]" ===================
// Character classes allow you to define a group of characters you wish to match by placing them inside square brackets.
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // The "i" afterward means: insensitive (to letter case)
let result = quoteSample.match(vowelRegex);
console.log(result); /* [
    'e', 'a', 'e', 'o', 'u', 'i',
    'e', 'a', 'o', 'e', 'o', 'e',
    'I', 'a', 'e', 'o', 'o', 'e',
    'i', 'o', 'e', 'o', 'i', 'e',
    'i'
  ] */

// ================== A character set "[ - ]" ===================
// Inside a character set, you can define a range of characters to match using a hyphen character: -.
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi;
let result = quoteSample.match(alphabetRegex);
console.log(result); /* [
    'T', 'h', 'e', 'q', 'u', 'i', 'c',
    'k', 'b', 'r', 'o', 'w', 'n', 'f',
    'o', 'x', 'j', 'u', 'm', 'p', 's',
    'o', 'v', 'e', 'r', 't', 'h', 'e',
    'l', 'a', 'z', 'y', 'd', 'o', 'g'
  ] */

// ------------ Also -------------
// Any set of letters or numbers, inclusive
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig;
let result = quoteSample.match(myRegex);
console.log(result); /* [
    'l', 'r', 'r', '3', '4',
    '5', '2', '6', '5', '3',
    's', 'r', 'l', 'i', 'i',
    'o', 's'
  ] */

// ================== Match everything but "^" ===================
// To create a negated character set, you place a caret character "^" after the opening bracket and before one or more characters you do not want to match.
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/gi;
let result = quoteSample.match(myRegex);
console.log(result); /* [
    ' ', 'b', 'l',
    'n', 'd', ' ',
    'm', 'c', '.'
  ] */

// ================== Match one or more "+" ===================
// Match one or more characters of the single character immediately preceding the plus "+" in the regex. Example, /a+/g would find one match in "abc" and return ["a"]. Because of the +, it would also find a single match in "aabc" and return ["aa"].
let difficultSpelling = "Mississippi";
let myRegex = /s+/g;
let result = difficultSpelling.match(myRegex);
console.log(result); // [ 'ss', 'ss' ]

// ================== Match zero or more "*" ===================
// Match zero or more characters of the single character immediately preceding the asterisk * in the regex
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/g;
console.log(soccerWord.match(goRegex)); // [ 'goooooooo' ]
console.log(gPhrase.match(goRegex)); // [ 'g', 'g' ]
console.log(oPhrase.match(goRegex)); // null

// ================== Greedy, lazy matching "?" ===================
// Regular expressions are by default greedy. A greedy match finds the longest possible part of a string that fits the regex pattern and returns it as a match. The alternative, "?", is called a lazy match, which finds the smallest possible part of the string that satisfies the regex pattern.
let text = "titanic";
let myRegex = /t[a-z]*i/;
let myRegex2 = /t[a-z]*?i/;
console.log(text.match(myRegex)); // [ 'titani' ]
console.log(text.match(myRegex2)); // [ 'ti' ]

// ===================================================
//         Shorthand character classes regex
// ===================================================

// ================== \w ===================
// Regex shorthand "\w" is equal to "[A-Za-z0-9_]", all letters, numbers and underscore
let shortHand = /\w/g;
let alphaNum = /[A-Za-z0-9_]/g;
let numbers = "?42%";
let sentence = "Co-ding!";
console.log(numbers.match(shortHand)); // [ '4', '2' ]
console.log(numbers.match(alphaNum)); // [ '4', '2' ]
console.log(sentence.match(shortHand)); // [ 'C', 'o', 'd', 'i', 'n', 'g' ]
console.log(sentence.match(alphaNum)); // [ 'C', 'o', 'd', 'i', 'n', 'g' ]

// ================== \W ===================
// Regex shorthand "\W" is equal to "[^A-Za-z0-9_]", anything except letters, numbers and underscore
let shortHand = /\W/g;
let alphaNum = /[^A-Za-z0-9_]/g;
let numbers = "?42%";
let sentence = "Co-ding!";
console.log(numbers.match(shortHand)); // [ '?', '%' ]
console.log(numbers.match(alphaNum)); // [ '?', '%' ]
console.log(sentence.match(shortHand)); // [ '-', '!' ]
console.log(sentence.match(alphaNum)); // [ '-', '!' ]

// ================== \d ===================
// Regex shorthand "\d" is equal to "[0-9]", any number (digits)

// ================== \D ===================
// Regex shorthand "\D" is equal to "[^0-9]", anything except numbers

// ================== Restrict Username lesson ===================
let username = "JackOfAllTrades";
let username = "BadUs3rnam3";
let username = "Z97";
let username = "c57bT3";
let userCheck = /\D[a-z][a-z]\d*/gi; // Change this line
let result = userCheck.test(username);
console.log(result);

// ================== \s ===================
// Regex shorthand "\s" is similar to "[ \r\t\f\n\v]". This pattern not only matches whitespace, but also carriage return, tab, form feed, and new line characters.

// ================== \S ===================
// Regex shorthand "\S" is similar to "[^ \r\t\f\n\v]". Anything other than "whitespace", etc.

// missing lesson notes


// ===================================================
//                     Lookaheads
// ===================================================
// ================== Positive ===================
let quit = "qu";
let noquit = "qt";
let quRegex = /q(?=u)/;
let qRegex = /q(?!u)/;
console.log(quit.match(quRegex)); // ["q"]
console.log(noquit.match(qRegex)); // ["q"]

let password = "abc123";
let password = "123abc";
// Regex needs 3-6 alphanumerics (or underscore) with at least 1 being a number.
let checkPass = /(?=\w{3,6})(?=\D*\d)/; // The order doesn't matter, uses 2 patterns
console.log(checkPass.test(password)); // Both return true
// But...
let password = "abc123";
let password = "123abc";
let checkPass = /(?=\w{3,6}\D*\d)/; // The order does matter, uses just 1 pattern
console.log(checkPass.test(password)); // One returns true, the other false

let sampleWord = "astronaut"; // Returns false
let sampleWord = "8pass99"; // Returns true
let sampleWord = "astr1on11aut"; // Returns true
// Regex needs 6 or more alphanumerics (or underscore) with at least 2 consecutive numbers.
let pwRegex = /(?=\w{6,})(?=\D*\d\d)/; // The order doesn't matter
console.log(pwRegex.test(sampleWord)); 

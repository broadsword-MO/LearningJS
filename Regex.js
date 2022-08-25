// ================== A literal regex search ===================
// Note that regex searches are case sensitive unless the "i" flag is used
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
// a literal regex search
let waldoRegex = /Waldo/;
let result = waldoRegex.test(waldoIsHiding);
console.log(result); // true

// ================== The or operator "|" ===================
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Using the | "or" operator
let result = petRegex.test(petString);
console.log(result); // true

// ================== .match vs .test ===================
// Note that the .match syntax is the "opposite" of the .test method.
"string".match(/regex/); // returns ['string'] (Can't just use an equality operator: ===)
/regex/.test("string"); // returns true or false

// ================== The wildcard "." ===================
// The period "." in the regex is a wildcard representing one unkown character.
let exampleStr = "Let the stun have fun with regular expressions!";
let unRegex = /.un/g; // The g afterward means "global" or check everywhere, don't just return the first result
let result = unRegex.test(exampleStr);
console.log(result); // true
let result1 = exampleStr.match(unRegex);
console.log(result1); // [ 'tun', 'fun' ]

// ================== Character classes "[ ]" ===================
// Character classes or sets allow you to define an unordered group of characters you wish to match by placing them inside square brackets.
let quoteSample =
    "Beware of bugs in the above code; I have only proved it correct, not tried it.";
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

// ================== Also ===================
// Any set of letters or numbers, inclusive
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi;
let result = quoteSample.match(myRegex);
console.log(result); /* [
    'l', 'r', 'r', '3', '4',
    '5', '2', '6', '5', '3',
    's', 'r', 'l', 'i', 'i',
    'o', 's'
  ] */

// ================== Match everything but "^" ===================
// To create a negated character set, you place a caret character "^" after the opening bracket and before the one or more characters you do not want to match. Like this [^thingsThatWillNotBeMatched].
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/gi;
let result = quoteSample.match(myRegex);
console.log(result); /* [
    ' ', 'b', 'l',
    'n', 'd', ' ',
    'm', 'c', '.'
  ] */

// ================== Match one or more "+" ===================
// Match one or more characters of the single character or character group (), immediately preceding the plus "+" in the regex. Example, /a+/g would find one match in "abc" and return ["a"]. Because of the +, it would also find a single match in "aabc" and return ["aa"].
let difficultSpelling = "Mississippi";
let myRegex = /s+/g;
let result = difficultSpelling.match(myRegex);
console.log(result); // [ 'ss', 'ss' ]

// ================== Match zero or more "*" ===================
// Match zero or more characters of the single character or character group (), immediately preceding the asterisk * in the regex
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/g;
console.log(soccerWord.match(goRegex)); // [ 'goooooooo' ]
console.log(gPhrase.match(goRegex)); // [ 'g', 'g' ]
console.log(oPhrase.match(goRegex)); // null

// ================== Match zero or one "?" ===================
// Match zero or one characters of the single character or character group (), immediately preceding the question mark "?" in the regex

let american = "color";
let british = "colour";
let rainbowRegex = /colou?r/;
console.log(rainbowRegex.test(american)); // Returns true
console.log(american.match(rainbowRegex)); // Returns ['color']
console.log(rainbowRegex.test(british)); // Returns true
console.log(british.match(rainbowRegex)); // Returns ['colour']

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
// * Double check this solution
let username = "Z97";
let username = "BadUs3rnam3"; // Returns true
let username = "JackOfAllTrades"; // Returns true
let username = "c57bT3";
let userCheck = /\D[a-z][a-z]\d*/gi; // No number, at least 2 letters, then zero or more numbers. Global, case insensitive
let result = userCheck.test(username);
console.log(result);

// ================== \s ===================
// Regex shorthand "\s" is similar to "[ \r\t\f\n\v]". This pattern not only matches whitespace, but also carriage return, tab, form feed, and new line characters.

// ================== \S ===================
// Regex shorthand "\S" is similar to "[^ \r\t\f\n\v]". Anything other than "whitespace", etc.

// ================== Match the beginning of a string "^"===================
// When not inside a character set, the caret is used to search for patterns at the beginning of strings.

let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
console.log(firstRegex.test(firstString)); // Returns true
let notFirst = "You can't find Ricky now.";
console.log(firstRegex.test(notFirst)); // Returns false

// ================== Match Ending String Patterns "$" ===================
// You can search the end of strings using the dollar sign character $ at the end, inside of the regex forward slashes.

let theEnding = "This is a never ending story";
let storyRegex = /tory$/;
console.log(storyRegex.test(theEnding)); // Returns true
let noEnding = "Sometimes a story will have to end";
console.log(storyRegex.test(noEnding)); // Returns false

// ================== Specify the Number of Matches "{}" ===================
// Quantity specifiers are used with curly brackets: { number(s) }. You put one or two (separated by a comma) numbers between the curly brackets - for the lower and upper number of patterns.

// To match only the word "haaah" with the letter "a" 3 times your regex would be /ha{3}h/.
let A3 = "haaah";
let threeA = /ha{3}h/;
console.log(threeA.test(A3)); // Returns true

// To match only the letter "a" appearing between 3 and 5 times in the string "ah", your regex would be /a{3,5}h/.

let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
console.log(multipleA.test(A4)); // Returns true
console.log(multipleA.test(A2)); // Returns false

// To only specify the lower number of patterns, keep the first number followed by a comma. For example, to match only the string hah with the letter a appearing at least 3 times, your regex would be /ha{3,}h/.

let A4 = "haaaah";
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleHA = /ha{3,}h/;
console.log(multipleHA.test(A4)); // Returns true
console.log(multipleHA.test(A2)); // Returns false
console.log(multipleHA.test(A100)); // Returns true

// ===================================================
//                     Lookaheads
// ===================================================
// ================== Negative "?!" ===================
// Something that is NOT followed by something
let quit = "qu";
let noquit = "qt";
let qRegex = /q(?!u)/;
console.log(qRegex.test(quit)); // Returns false
console.log(quit.match(qRegex)); // Returns null
console.log(qRegex.test(noquit)); // Returns true
console.log(noquit.match(qRegex)); // Returns ["q"]

// ================== Positive "?=" ===================
// Something that is followed by something
let quit = "qu";
let noquit = "qt";
let quRegex = /q(?=u)/;
console.log(quRegex.test(quit)); // Returns true
console.log(quit.match(quRegex)); // Returns ["q"]
console.log(quRegex.test(noquit)); // Returns false
console.log(noquit.match(quRegex)); // Returns null

let password = "abc123"; // Returns true
let password = "123abc"; // Returns true
// Regex needs 3-6 alphanumerics (or underscore) with at least 1 being a number.
let checkPass = /(?=\w{3,6})(?=\D*\d)/; // The order doesn't matter, uses 2 patterns
console.log(checkPass.test(password)); // Both true
// But...
let password = "abc123"; // Returns true
let password = "123abc"; // Returns false
// Regex needs 3-6 alphanumerics (or underscore) with at least 1 being a number.
let checkPass = /(?=\w{3,6}\D*\d)/; // The order does matter, uses just 1 pattern
console.log(checkPass.test(password)); // One true, the other false

let sampleWord = "astronaut"; // Returns false
let sampleWord = "8pass99"; // Returns true
let sampleWord = "astr1on11aut"; // Returns true
// Regex needs 6 or more alphanumerics (or underscore) with at least 2 consecutive numbers.
let pwRegex = /(?=\w{6,})(?=\D*\d\d)/; // The order doesn't matter
console.log(pwRegex.test(sampleWord));

// ================== Grouping of characters, mixed, either/or ===================
// To match an ordered group of characters in a string use parentheses "()".

let testStr = "Pkin"; // true
let testStr = "Pumpkin"; // true
let testStr = "Pmupkin"; // false
let testStr = "Pumpumpkin"; // true
let testRegex = /P(ump)*kin/; // P, zero or more "ump", kin
console.log(testRegex.test(testStr));

// If you want to find either Penguin, Pumpkin or Plantain in a string, you can add the "or" operator in the middle "(|)".
let testStr = "Pumpkin";
let testStr = "Plantain";
let testStr = "He is a sPenguina";
let testRegex = /P(engu|umpk|lanta)in/;
console.log(testRegex.test(testStr)); // All return true

// The exercise
let myString = "Franklin D. Roosevelt"; // true
let myString = "Frank Roosevelt"; // false
let myString = "Eleanor Roosevelt"; // true
let myRegex = /(Franklin|Eleanor)\s.*\s*Roosevelt/; // Change this line
console.log(myRegex.test(myString)); // Change this line

// ================== Capture Groups ===================
// The substring matched by a character group is saved to a temporary "variable", which can be accessed within the same regex using a backslash and the number of the capture group (e.g. \1). Capture groups are automatically numbered by the position of their opening parentheses (left to right), starting at 1.
let repeatStr = "row row your boat"; // 2 "rows" returns false
let repeatStr = "row row row row your boat"; // 4 "rows" returns true
let repeatRegex = /(row) \1 \1/;
// Or, to match an undefined group of characters:
let repeatRegex = /(\w+) \1 \1/; // Matches 3 word groups, the initial, then the reference to the initial "\1" and then the second reference "\1"
console.log(repeatRegex.test(repeatStr)); // Returns true
console.log(repeatStr.match(repeatRegex)); // Returns ["row row row", "row"]

// The exercise
let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/; // String beginning, 1 or more numbers, a space, a first capture group, a space, another first capture group, string ending
// Or
let reRegex = /^(\d+)(\s)\1\2\1$/; // String beginning, 1 or more digits (original capture), followed by whitespace, then a first capture group, then a second capture group (a space), then another first capture group, string ending
console.log(reRegex.test(repeatNum)); // Returns true
console.log(repeatNum.match(reRegex)); // Returns [ '42 42 42', '42' ]

// ================== .replace() ===================
// The inputs for .replace() is first the string or regex pattern you want to search for. The second parameter is the string to replace the match or a function to do something.
let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue"); // Returns "The sky is blue."

// You can also access capture groups in the replacement string with dollar signs ($).
"Code Camp".replace(/(\w+)\s(\w+)/, "$2 $1"); // Returns "Camp Code"

// Capture Groups to Search and Replace
// Exercise, return opposite order
let str = "one two three";
let fixRegex = /(\w+) (\w+) (\w+)/; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result = str.replace(fixRegex, replaceText);
console.log(result); // "three two one"

// Exercise, remove Whitespace from Start and End
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // One or more whitespaces (tab, space, return, etc.) at the beginning or at the end of the string, global (or it would only find the start and not the end)
// Or
let wsRegex = /^ +| +$/g; // One or more spaces at the beginning or at the end of the string, global
let result = hello.replace(wsRegex, ""); // Change this line
console.log(result); // "Hello, World!"
// Note: The String.prototype.trim() method would also work for this

// ===================================================
//            Inter Algo Scripting
// ===================================================
// ================== Spinal Tap Case ===================
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
// Mine using regex
function spinalCase(str) {
    return str
        .replace(/([A-Z])/g, " $1") // Adds a space before any capital letter
        .trim() // Trim any whitespace from beginning/end
        .replace(/\s+/g, "-") // replace the spaces with dashes
        .replace(/_/g, "") // replace any underscore with nothing
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
    return str.replace(/(\w)[ _]?([A-Z])| /g, "$1-$2").toLowerCase(); // Any alphanumeric followed by an optional space or underscore, then either an uppercase letter or space. Return first capture group, dash, second capture group throughout the whole string
}

console.log(spinalCase('This is Spinal Tap')); // this-is-spinal-tap
console.log(spinalCase("The_Andy_Griffith_Show")); // the-andy-griffith-show
console.log(spinalCase("AllThe-small Things")); // all-the-small-things


// ===================================================
//             JavascriptAlgo&DataStruct Projects
// ===================================================
// ================== Telephone Number Validator ===================
// The user may fill out the form field any way they choose as long as it has the format of a valid US number. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.
function telephoneCheck(str) {
    /* Explanation
    This returns true or false for either:
        1. Start of pattern, 10 digits, end of pattern... Or
        2. Start pattern, an optional character group with a 1 and an optional space, a character group with an escaped L paren, 3 digits and an escaped R paren OR just 3 digits, an optional space or dash, 3 digits, a space or dash, 4 digits, end pattern */
    return /^\d{10}$|^(1 ?)?(\(\d{3}\)|\d{3})[ -]?\d{3}[ -]\d{4}$/.test(str);
}

console.log(telephoneCheck("1(555)555-5555")) // should return true.
console.log(telephoneCheck("(555)555-5555")); // should return true.
console.log(telephoneCheck("(555-555-5555")); // should return false.
console.log(telephoneCheck("1 (555) 555-5555")); // should return true.
console.log(telephoneCheck("1 555)555-5555")); // should return false.
console.log(telephoneCheck("(6054756961)")); // should return false.
console.log(telephoneCheck("27576227382")); // should return false.
console.log(telephoneCheck("555-555-5555")); // true
console.log(telephoneCheck("5555555555")); // true
console.log(telephoneCheck("1 555-555-5555")); // true


// ===================================================
//                  Others
// ===================================================
// from stackoverflow.com
// ================== .replace() syntax $&, $', $` ===================
/* $& (dollar sign ampersand) holds the entire regex match.

$' (dollar followed by an apostrophe or single quote) holds the part of the string after (to the right of) the regex match.

$` (dollar backtick) holds the part of the string before (to the left of) the regex match.

- from www.regular-expressions.info/javascript.html
The String.replace() function interprets several placeholders in the replacement text string. If the regexp contains capturing groups, you can use backreferences in the replacement text. $1 in the replacement text inserts the text matched by the first capturing group, $2 the second, and so on until $99. If your regex has more than 1 but fewer than 10 capturing groups, then $10 is treated as a backreference to the first group followed by a literal zero. If your regex has fewer than 7 capturing groups, then $7 is treated as the literal text $7. $& reinserts the whole regex match. $` (backtick) inserts the text to the left of the regex match, $' (single quote) inserts the text to the right of the regex match. $$ inserts a single dollar sign, as does any $ that does not form one of the placeholders described here.

$_ and $+ are not part of the standard but are supported by some browsers nonetheless. In Internet Explorer, $_ inserts the entire subject string. In Internet Explorer and Firefox, $+ inserts the text matched by the highest-numbered capturing group in the regex. If the highest-numbered group did not participate in the match, $+ is replaced with nothing. This is not the same as $+ in Perl, which inserts the text matched by the highest-numbered capturing group that actually participated in the match.

While things like $& are actually variables in Perl that work anywhere, in JavaScript these only exist as placeholders in the replacement string passed to the replace() function. */

// ================== Capitalize the first letter of word(s) ===================
// from codegrepper.com
//capitalize only the first letter of the string. 
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1); // Using string.charAt() instead of string[] could be handy only in edge cases as its default index value is 0 and it tries to convert the index input into a number it can use, e.g. true == 1, 2.37 would be rounded down to 2, any letter would return the default 0 and 00 == 0
}
console.log(capitalizeFirstLetter("this is a string")); // This is a string
// Or simpler
const capFirstLetter = (string) => string[0].toUpperCase() + string.slice(1);
console.log(capFirstLetter("this is a string")); // This is a string

//capitalize all words of a string. 
function capitalizeWords(string) {
    return string.replace(/(?:^|\s)\S/g, function (a) { return a.toUpperCase(); });
}; // The "?:" just means that it is a non-capture group and in this particular case it is actually unnecessary
console.log(capitalizeWords("this is a string")); // This Is A String
// Or
const uppercaseWords = str => str.replace(/^(.)|\s+(.)/g, char => char.toUpperCase());
console.log(uppercaseWords("this is a string")); // This Is A String

// ================== Test the letter case ===================
// from stackoverflow.com Abdennour TOUMI
const isUpperCase = (string) => /^[A-Z]*$/.test(string); // 0 or more all capital letters
console.log(isUpperCase('ALL')); // true
console.log(isUpperCase('All')); // false
// Or simpler
const isUpCase = (string) => /^[A-Z]/.test(string); // First letter of string is capital
console.log(isUpCase('a')); // false
console.log(isUpCase('All')); // true
console.log(isUpCase('ALL')); // true
console.log(isUpCase('aLL')); // false
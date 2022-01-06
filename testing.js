// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (prop != 'tracks' && value != "") {
    records[id][prop] = value;
  }
  else if (prop == 'tracks' && records[id].hasOwnProperty('tracks') == false) {
    records[id][prop] = [value];
  }
  else if (prop == 'tracks' && value != "") {
    records[id][prop].push(value);
  }
  else if (value = "") {
    delete records[id][prop];
  }
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');
updateRecords(recordCollection, 5439, 'tracks', 'This and that');
updateRecords(recordCollection, 5439, 'tracks', 'The other');
updateRecords(recordCollection, 5439, 'awards', 'yellow');
updateRecords(recordCollection, 5439, '234', ['multiple']);
updateRecords(recordCollection, 5439, '11', ['division']);
updateRecords(recordCollection, 5439, 'wonky', '');

console.log(recordCollection);

// ---------------------------
function adding() {
  var result = 0.1 + 0.2;
  console.log(result); // = 0.30000000000000004 (Ha!)
}

adding();

// ----------------------
const arr = [10, 9, 8, 7, 6];

for (let i = 4; i >= 0; i--) {
  console.log(arr[i]);
}

// -----------------------
const myArr = [
  [1, 2], [3, 4], [5, 6]
];

for (let i = 0; i < myArr.length; i++) {
  for (let j = 0; j < myArr[i].length; j++) {
    console.log(myArr[i][j]);
  }
}

// ===================================================
// ;                Random numbers
// ===================================================

// ================== Random fraction ===================
function randomFraction() {
  return Math.random(); // Returns a pseudorandom number between 0 and 1.
}
console.log(randomFraction());

// ================== Random whole number 0 - 9 ===================
function randomWholeNum() {
  return Math.floor(Math.random() * 9); // Math.floor() rounds DOWN to the nearest whole number, "Returns the greatest integer less than or equal to its numeric argument."
}
console.log(randomWholeNum());

// ================== Random whole number within an inclusive range ===================
function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
}
console.log(randomRange(20, 40))

// ===================================================
//      parseInt() Converts a string to an integer
// ===================================================
// ================== Convert string to a whole number ===================
function convertToInteger(str) {
  return parseInt(str); // parseInt first parameter has to be a string
}
console.log(convertToInteger("56"));

// ================== Convert a binary number string to a whole number ===================
function convertToInteger(str) {
  return parseInt(str, 2); // parseInt second parameter "radix", (2) denotes a binary number which is has a number base of 2
}
console.log(convertToInteger("10011"));

// ===================================================
// parseFloat() Converts a string to a floating point number
// ===================================================
function convertToDecimal(str) {
  return parseFloat(str);
}
console.log(convertToDecimal("51.006"));

// ----------------------
const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
  // Only change code above this line
}
console.log(editInPlace());

// -----------------
let magic = () => new Date();
console.log(magic());

// ------------------------
const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));

// ----------------------------
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

console.log(arr2);

// ------------ Using 'let' -----------
function checkScope() {
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i; // Unnecessary?
}
checkScope();

//--------------------------
let a = 8, b = 6;
// Only change code below this line
[a, b] = [b, a];
console.log(a, b);

// -----------------------
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  // Only change code below this line
  const [a, b, ...arr] = list; // Change this line
  // Only change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);

// ---------- From Grasshoppper app -------------
//  Interesting
if (3) { // 0 here produces 4, Any other number produces 2
  if (100) {
    console.log(2)
  } else {
    console.log(3)
  }
} else {
  console.log(4)
}


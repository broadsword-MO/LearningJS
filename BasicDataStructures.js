// ================== Remove and/or Add Items using splice() ===================
/* splice() modifies the original array and returns an array containing the elements that were deleted. It takes up to 3 parameters.
    1. The first represents the zero-based index on the array from which to begin removing consecutive elements
    2. The second (optional) indicates the number of elements to delete (or use 0 for none). If omitted it will go to the end of the array
    3. The third (optional) is one or more elements to insert into the array in place of the deleted elements */
function spliceFunction(arr) {
  let newArr = ["a", 4, "beta", 5, 6];
  let delArr = newArr.splice(1, 2, arr);
  console.log(delArr); // [ 4, 'beta' ]
  console.log(newArr); // [ 'a', [ 9, 8, 'mike' ], 5, 6 ]
}
spliceFunction([9, 8, "mike"]);

// ================== Copy Array Items Using slice() ===================
/* slice() Leaves the original array unmodified and returns a copy or extract of a given number of elements from an array to a new array. It takes up to 2 parameters. For both, a negative index can be used.
    1. The first (optional) is the index at which to begin extracting elements. If undefined, then the slice begins at index 0.
    2. The second (optional) is the index at which to stop extraction (extraction will occur up to, but not including the element at this index). If undefined, then the slice extends to the end of the array. */
function sliceFunction(start, end) {
  let newArr = ["a", 4, "beta", 5, 6];
  let sliceArr = newArr.slice(start, end);
  console.log(sliceArr); // [ 4 ]
  console.log(newArr); // [ 'a', 4, 'beta', 5, 6 ]  Same as original
}
sliceFunction(1, 2);

// ================== Copy an Array with the Spread Operator ===================
// The spread operator allows us to easily copy all of an array's elements, in order with '...arr'
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // newArr.push(...arr); // Or
    // newArr.splice(-1, 0, ...arr); // Or
    newArr = newArr.concat(...arr);
    num--;
  }
  return newArr;
}
// Array and number of times to copy into empty array
console.log(copyMachine([true, false, true], 2)); // [ true, false, true, true, false, true ]

// ================== Combine Arrays with the Spread Operator ===================
// Another advantage of the spread operator is the ability to combine arrays, or to insert all the elements of one array into another, at any index.
function spreadOut() {
  const fragment = ["to", "code"];
  const sentence = ["learning", ...fragment, "is", "fun"]; // Change this line
  return sentence.join(" ");
}
console.log(spreadOut()); // learning to code is fun

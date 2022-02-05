// ================== For loop with .indexOf() ===================
// Filters thru sub-arrays only including ones that do not contain a certain element 
function filteredArray(arr, elem) {
    let newArr = []; // Only change code below this line
    for (let i = 0; i < arr.length; i++) {
        console.log('arr[i] = ' + arr[i]);
        if (arr[i].indexOf(elem) == -1) {
            newArr.push(arr[i]);
            console.log('newArr = ' + newArr);
        }
    }
    return newArr; // Only change code above this line
}
console.log(filteredArray([[3, 2, 3], [1, 6, 2], [3, 13, 26], [19, 3, 9]], 3)); // [ [ 1, 6, 2 ] ]
// Accomplishes the same as below

// ================== Nested For loops ===================
// Filters thru sub-arrays only including ones that do not contain a certain element 
function filteredArray(arr, elem) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let hasElem = false;
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === elem) {
                hasElem = true;
            }
        }
        if (hasElem === false) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(filteredArray([[3, 2, 3], [1, 6, 2], [3, 13, 26], [19, 3, 9]], 3)); // [ [ 1, 6, 2 ] ]
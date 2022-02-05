// ===================================================
//             Ternary recursive functions
// ===================================================

//  Works... Apparently a function statement can't contain a var/let/const declaration 'within' the ternary operators?? And why did the (n < 1) have to be changed to (n <= 1) or (n < 2) to get the same result??? Because otherwise it would run one extra time????
function countup(n) {
    let countArray = [];
    return (n <= 1) ? []
        : countArray = countup(n - 1),
        countArray.push(n),
        countArray;
}
console.log(countup(6)); // [ 1, 2, 3, 4, 5, 6 ]

// The same as this non-ternary recursive for comparison
function countup(n) {
    if (n < 1) {
        return [];
    } else {
        const countArray = countup(n - 1);
        countArray.push(n);
        return countArray;
    }
}
console.log(countup(6)); // [ 1, 2, 3, 4, 5, 6 ]

// ================== from StackOverflow ===================
// Recursion stacks the "rec" function call for "n": 5, 4, 3, 2, 1 and then adds them from the top: 1+2+3+4+5
function rec(n) {
    return n == 1 ? n : n + rec(n - 1);
}
console.log(rec(5)) // 15

// ================== from sidjayisaok on Github Gist ===================
// A factorial recursive function using ternary operator
var fact = function (m) {
    return ((m === 0) ? (1) : m * fact(m - 1));
};
console.log(fact(5)); // 120

// And the same factorial recursive example without ternary
var factorial = function (n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(5)); // 120


// ===================================================
//             Ternary recursive functions
// ===================================================

//  Works... Apparently a function statement can't contain a var/let/const declaration 'within' the ternary operators?? And why did the (n < 1) have to be changed to (n <= 1) or (n < 2) to get the same result??? Because otherwise it would run one extra time????
function countup(n) {
    let countArray = [];
    return (
        n <= 1 ? [] : (countArray = countup(n - 1)),
        countArray.push(n),
        countArray
    );
}
console.log(countup(6)); // [ 1, 2, 3, 4, 5, 6 ]

// The same as this non-ternary recursive for comparison
function countUp(n) {
    if (n < 1) {
        return [];
    }
    const countArray = countUp(n - 1);
    countArray.push(n);
    return countArray;
}
console.log(countUp(6)); // [ 1, 2, 3, 4, 5, 6 ]

// ================== from StackOverflow ===================
// Recursion stacks the "rec" function call for "n": 5, 4, 3, 2, 1 and then adds them from the top: 1+2+3+4+5
function rec(n) {
    return n === 1 ? n : n + rec(n - 1);
}
console.log(rec(5)); // 15

// ================== from sidjayisaok on Github Gist ===================
// A factorial recursive function using ternary operator
const fact = function (m) {
    return m === 0 ? 1 : m * fact(m - 1); // First two internal sets of parentheses were optional
};
console.log(fact(5)); // 120

// And the same factorial recursive example without ternary
const factorial = function (n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
};
console.log(factorial(5)); // 120

// The Fibonacci sequence, in which each number is the sum of the two preceding ones. Return the sum of all odd Fibonacci numbers that are less than or equal to num.

// from fCC forum forkerino, a ternary recursive solution
const sumFibs = (n, prev = 0, curr = 1, sum = 0) =>
    curr > n ? sum : sumFibs(n, curr, prev + curr, sum + (curr % 2 && curr));

console.log(sumFibs(37)); // 44

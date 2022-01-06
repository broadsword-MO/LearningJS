// ===================================================
//             Ternary recursive functions
// ===================================================

//  Works... Apparently a function statement can't contain a var/let/const declaration 'within' the ternary operators?? And why did the (n < 1) have to be changed to (n <= 1) or (n < 2) to get the same result??? Because otherwise it would run one extra time????
function countup(n) {
    let countArray = [];
    return (n <= 1) ? []
    : countArray = countup(n -1),
    countArray.push(n),
    countArray;
}
console.log(countup(6)); // [ 1, 2, 3, 4, 5, 6 ]


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
// Addition downward one at a time
function rec(n) {
    return n == 1 ? n : n + rec(n - 1);
}
console.log(rec(5)) // 15

// ================== from Github Gist ===================
// A factorial recursive function using ternary operator
var fact = function (m) {
    return ((m === 0) ? (1) : m * fact(m - 1));
};
console.log(fact(5)); // 120
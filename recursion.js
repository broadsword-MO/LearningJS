// ------------- from fCC Basic JavaScript -----------
//   -------------- A 'for' loop ----------------
function multiply(arr, n) {
    let product = 1;
    for (let i = 0; i < n; i++) {
        console.log('prod1 = ' + product);
        console.log('i = ' + i);
        product *= arr[i];
        console.log('prod2 = ' + product);
    }
    return product;
}

console.log(multiply([2, 4, 7, 9], 3));

//   Which works the same as this recursion... somehow
function multiply(arr, n) {
    if (n <= 0) {
        return 1;
    } else {
        // console.log('n = ' + n);
        // console.log('place = ' + (arr, n - 1));
        // console.log('num = ' + arr[n - 1]);
        return multiply(arr, n - 1) * arr[n - 1];
    }
}

console.log(multiply([2, 4, 7, 9], 3));

// ---------------- An addition recursion -------------
function sum(arr, n) {
    if (n <= 0) {
        return 0;
    } else {
        return sum(arr, n - 1) + arr[n - 1];
    }
}

console.log(sum([2, 4, 7, 9], 3));

// ---------------- Another recursion example -------------
function revStr(str) {
    if (str === '') return '';
    return revStr(str.substr(1)) + str[0];
}

console.log(revStr('cat')); // Reverses the string to 'tac'

// ===================================================
//      Recursion examples from javascript.info
// ===================================================
// (I added my own console.logs to see what's happening)

// ================== Iterative ===================
function pow(x, n) {
    let result = 1;

    // multiply result by x n times in the loop
    for (let i = 0; i < n; i++) {
        console.log('i = ' + i);
        console.log('x = ' + x);
        console.log('result = ' + result);
        result *= x;
        console.log('run "pow" function')
        console.log('result = ' + result);
    }

    return result;
}

console.log('final = ' + pow(2, 3)); // 8

// ================== The same as ===================
function pow(x, n) {
    if (n == 1) {
        console.log('return x = ' + x);
        return x;
    } else {
        console.log('x = ' + x)
        console.log('n = ' + n)
        console.log('run "pow" function')
        // return x * pow(x, n - 1); Original, replaced by the 2 lines below
        result = x * pow(x, n - 1);
        console.log('result = ' + result);
        return result;
    }
}

console.log('final = ' + pow(2, 4)); // 16

// ================== The same as ===================
function pow(x, n) {
    return (n == 1) ? x : (x * pow(x, n - 1));
}

// ================== from an fCC article on recursion ===================
function randomUntilFive(result = 0, count = 0) {
    if (result === 5) {
        console.log(`The random result: ${result}`);
        console.log(`How many times random is executed: ${count}`);
        return;
    }
    result = Math.floor(Math.random() * (10 - 1 + 1) + 1); // Math.random() returns a decimal number between 0 and 1 (exclusive)
    count++;
    randomUntilFive(result, count);
}
randomUntilFive();

// --------------- The "while" loop version of the same -----------------
function randomUntilFive(result = 0, count = 0) {
    while (result !== 5) {
        result = Math.floor(Math.random() * (10 - 1 + 1) + 1);
        count++;
    }
    console.log(`The random result: ${result}`);
    console.log(`How many times random is executed: ${count}`);
}
randomUntilFive();


// ================== from "Create Countdown" fCC lesson ===================
// Example function, Countup
function countup(n) {
    if (n < 1) {
        return [];
    } else {
        const countArray = countup(n - 1);
        countArray.push(n);
        return countArray;
    }
}
console.log(countup(5)); // [ 1, 2, 3, 4, 5 ]

// Lesson exercise - Countdown function
function countdown(n) {
    if (n < 1) {
        return [];
    } else {
        let myArray = countdown(n - 1);
        myArray.unshift(n);
        return myArray;
    }
}
console.log(countdown(5)); // [ 5, 4, 3, 2, 1 ]

// ================== Recursive number range ===================
function countBetween(m, n) {
    if (n < m) {
        return "Numbers in wrong position";
    } else if (m == n) {
        return [m];
    } else {
        let myArray = countBetween(m, n - 1);
        myArray.push(n);
        return myArray;
    }
}
console.log(countBetween(2, 5));

// ================== A factorial recursion ===================
var factorial = function (n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(5)); // 120

function factorialize(num) {
    if (num === 0) {
        return 1;
    } else {
        return num * factorialize(num - 1);
    }
}

console.log(factorialize(5));

// Some more elaborate attempts of mine
function factorialize(n) {
    let result;
    if (n < 1) {
        return 0;
    } else {
        function factorial() {
            if (n === 0) {
                return 1;
            } else {
                result = n * factorial(n - 1);
                return result;
            }
        }
        return result;
    }
}

console.log(factorialize(5));

// A working nested function for reference
function foo(n) {
    function bar() {
        return 2 * n;
    }
    return bar();
}
console.log(foo(3)); // 6

function foo(n) {
    let result;
    var bar = function () {
        if (n === 0) {
            result = 1;
            return result;
        }
        return n * bar(n - 1);
    }
    return result;
}
console.log(foo(3)); // Should be 6
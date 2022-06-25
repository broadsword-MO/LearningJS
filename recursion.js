// ------------- from fCC Basic JavaScript -----------
//   -------------- A 'for' loop ----------------
// Multiplies the first n number of digits of the array
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

console.log(multiply([2, 4, 7, 9], 3)); // 56

// Which works the same as this recursion... somehow
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

console.log(multiply([2, 4, 7, 9], 3)); // 56

// ---------------- An addition recursion -------------
// Sums all numbers down to zero
function recAdd(num) {
    if (num <= 0) return 0;
    else return num + recAdd(num - 1);
}

console.log(recAdd(5)); // 15

// Sums the first n number of digits of the array
function sum(arr, n) {
    if (n <= 0) {
        return 0;
    } else {
        return sum(arr, n - 1) + arr[n - 1];
    }
}

console.log(sum([2, 4, 7, 9], 3)); // 13

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

console.log('final = ' + pow(2, 3)); // final = 8

// ================== The same as this if/else ===================
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

console.log('final = ' + pow(2, 4)); // final = 16

// ================== Ternary recursive ===================
// The same as this ternary
function pow(x, n) {
    return (n == 1) ? x : (x * pow(x, n - 1));
}
console.log('final = ' + pow(2, 4)); // final = 16

// Sum all odd Fibonacci numbers
// The Fibonacci sequence, in which each number is the sum of the two preceding ones. Return the sum of all odd Fibonacci numbers that are less than or equal to num.

//from fCC forum forkerino, a ternary recursive solution
const sumFibs = (n, prev = 0, curr = 1, sum = 0) => curr > n ? sum : sumFibs(n, curr, prev + curr, sum + (curr % 2 && curr));


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
        console.log(n); // 5, 4, 3, 2, 1
        const countArr = countup(n - 1); // The function shortcircuits until this finishes
        console.log(countArr); // [], [1], [1, 2], [1, 2, 3], [1, 2, 3, 4], [1, 2, 3, 4, 5]
        console.log(n); // 1, 2, 3, 4, 5
        countArr.push(n);
        return countArr;
    }
}
// Or simplified
function countup(n) {
    if (n < 1) return [];
    let arr = countup(n - 1);
    arr.push(n);
    return arr;
}
// A 'while loop' version that accomplishes the same
function countup(n) {
    let arr = [];
    while (n > 0) {
        arr.push(n);
        n--;
    }
    return arr.reverse();
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
console.log(countBetween(2, 5)); // [ 2, 3, 4, 5 ]

// ================== Factorial recursion ===================
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

console.log(factorialize(5)); // 120

// ================== Nested recursion ===================
// Sum all odd Fibonacci numbers
// The Fibonacci sequence, in which each number is the sum of the two preceding ones. Return the sum of all odd Fibonacci numbers that are less than or equal to num.

// from fCC forum johnlreavis
/*The input ‘b’ is the number in the fibonacci sequence. Start calling the recursive function with 0 and 1, to get 1,1,2…
Otherwise counter and while loop are the same as basic solution.*/
function sumFibs(num) {
    let oddsum = 0;
    function fib(a, b) {
        while (b <= num) {
            if (b % 2 === 1) {
                oddsum += b;
            }
            return fib(b, a + b);
        }
    }
    fib(0, 1);
    return oddsum;
}

console.log(sumFibs(10)); // 10
console.log(sumFibs(20)); // 23

// A factorial nested recursive of mine.
function factorialize(n) {
    if (n < 1) return 0;
    function factorial(n) { // "n" parameter necessary here for recursive
        if (n === 0) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }
    }
    return factorial(n); // "n" parameter necessary here for recursive
}

console.log(factorialize(0)); // 0
console.log(factorialize(1)); // 1
console.log(factorialize(5)); // 120
console.log(factorialize(20)); // 2432902008176640000

// An UN-nested factorial recursive version of the same
function factorialize(n) {
    if (n < 1) return 0;
    return factorial(n);
}
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorialize(0)); // 0
console.log(factorialize(1)); // 1
console.log(factorialize(5)); // 120

// A working nested function for reference
function foo(n) {
    function bar() { // "n" parameter unnecessary here for non-recursive
        return 2 * n;
    }
    return bar(); // "n" parameter unnecessary here for non-recursive
}
console.log(foo(3)); // 6

// In process...
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


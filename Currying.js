// ================== Introduction to Currying and Partial Application ===================
// The arity of a function is the number of arguments it requires. Currying a function means to convert a function of N arity into N functions of arity 1. In other words, it restructures a function so it takes one argument, then returns another function that takes the next argument, and so on.
// Some examples
function unCurried(x, y) {
    return x + y;
}

function curried(x) {
    return function (y) {
        return x + y;
    }
}
// Or
const curried = x => y => x + y

console.log(curried(2)(3)); // 5

// This is useful in your program if you can't supply all the arguments to a function at one time. You can save each function call into a variable, which will hold the returned function reference that takes the next argument when it's available. Example:

const varForCurryFunc = curried(1);
console.log(varForCurryFunc(2)); // 3

// Exercise
function various(x) {
    console.log(x); // 10
    return function (y) {
        console.log(y); // 20
        return function (z) {
            console.log(z); // 30
            return x * y / z;
        }
    }
}

console.log(various(10)(20)(30)); // 6.666666666666667
// Or using .bind()
const partialFn = various.bind(this)(10); // Necessary 'this' first .bind() syntax order
console.log(partialFn(20)(30)); // 6.666666666666667
// And
const partialFn = various.bind(this)(10)(20); // Necessary 'this' first .bind() syntax order
console.log(partialFn(30)); // 6.666666666666667

// Similarly, partial application can be described as applying a few arguments to a function at a time and returning another function that is applied to more arguments.
// Partial application using .bind()
function impartial(x, y, z) {
    console.log(x);
    console.log(y);
    console.log(z);
    return x * y / z;
}

const partialFn = impartial.bind(this, 30, 20); // Necessary 'this' first .bind() syntax order
console.log(partialFn(10)); // 60

// fCC
function add(x) {
    return y => z => x + y + z;
}
console.log(add(10)(20)(30)); // 60

// ================== Arguments Optional ===================
// Create a function that sums two arguments together. If only one argument is provided at first, then return a function that expects one argument and returns the sum.
// 1st successful
function addTogether(...args) {
    let sum = 0;
    if (args.length == 1) {
        return function addTwoNums(params) {
            args.push(params);
            if (args.every(num => typeof num == 'number')) {
                for (let para of args) {
                    sum += para;
                }
            } else return undefined;
            return sum;
        }
    } else if (args.length == 2) {
        if (args.every(num => typeof num == 'number')) {
            for (let para of args) {
                sum += para;
            }
        } else return undefined;
        return sum;
    }
}
// 1st trimmed
function addTogether(...args) {
    let sum = 0;
    function sumItUp(args) {
        if (args.every(num => typeof num == 'number')) {
            for (let para of args) {
                sum += para;
            }
            return sum;
        } else return undefined;
    }
    if (args.length == 1) {
        return function addTwoNums(param) {
            args.push(param);
            return sumItUp(args);
        }
    } if (args.length == 2) return sumItUp(args);
}

// Next
function addTogether(...args) {
    const sumItUp = (args) => args.reduce((sum, param) => args.every(num => typeof num == 'number') ? sum + param : undefined);
    if (args.length == 1) {
        return function addTwoNums(param) {
            args.push(param);
            return sumItUp(args);
        }
    } if (args.length == 2) return sumItUp(args);
}

// from fCC forum TheMightyPenguin, a recursive solution
function addTogether() {
    const [a, b] = arguments;
    if (typeof a !== 'number' || (b && typeof b !== 'number')) {
        return undefined;
    }
    if (b) {
        return a + b;
    }
    return c => addTogether(a, c);
}
console.log(addTogether(2, "3")); // undefined
console.log(addTogether(2, 3)); // 5
console.log(addTogether(5)(7)); // 12
console.log(addTogether(2)([3])); // undefined

// ----------- Various examples -----------
const addPartial = (x, y, z) => {
    return x + y + z
}
var partialFunc = addPartial.bind(this, 2, 3);
console.log(partialFunc(5)); // 10

// -------------------
function makeFunction() {
    const name = 'TK';
    function displayName() {
        console.log(name);
    }
    return displayName;
};

console.log(makeFunction());
const myFunction = makeFunction();
myFunction(); // TK

// ================== from Javascript.info/currying-partials ===================
// A recursive solution that takes a function as a parameter, and that function can have an indefinite number of parameters, one or more at a time
function curry(func) {
    return function curried(...args) {
        console.log(`args = ${args}`);
        if (args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return function (...args2) {
                console.log(`args2 = ${args2}`);
                return curried.apply(this, args.concat(args2));
            }
        }
    };
}

// Usage examples:
function sum(a, b, c) {
    return a + b + c;
}

let curriedSum = curry(sum);

console.log(curriedSum(1, 2, 3)); // 6, still callable normally
console.log(curriedSum(1, 2)(3)); // 6, currying of 2nd arg
console.log(curriedSum(1)(2, 3)); // 6, currying of 1st arg
console.log(curriedSum(1)(2)(3)); // 6, full currying

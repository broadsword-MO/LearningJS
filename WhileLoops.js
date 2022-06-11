// ================== Repeat a String Repeat a String ===================
// Mine
function repeatStringNumTimes(str, num) {
    if (num <= 0) return "";
    let repeatStr = "";
    while (num > 0) {
        repeatStr += str;
        num--;
    }
    return repeatStr;
}

console.log(repeatStringNumTimes("abc", 3)); // abcabcabc

// ================== Palindrome Checker ===================
function palindrome(str) {
    console.log(str);
    const lowerStr = str.toLowerCase();
    console.log(lowerStr);
    const regex = /[^a-z0-9]/g;
    const newStr = lowerStr.replace(regex, "");
    console.log(newStr);
    const strArr = [...newStr];
    console.log(strArr);

    while (strArr.length > 0) {
        console.log(strArr.length);
        if (strArr.length === 1) {
            return console.log(true);
        } else if (strArr.shift() === strArr.pop()) {
            console.log(strArr);
            console.log(strArr.length);
            console.log("so far so good");
        } else {
            return console.log(false);
        }
    }
    return console.log(true);
}

// palindrome("almostomla"); // false
palindrome("Ra%ce $car"); // true

// ================== Generate random numbers until five is hit ===================
function randomUntilFive(result = 0, count = 0) {
    while (result !== 5) {
        result = Math.floor(Math.random() * (10 - 1 + 1) + 1);
        count++;
    }
    console.log(`The random result: ${result}`);
    console.log(`How many times random is executed: ${count}`);
}
randomUntilFive();

// ================== A "while" loop using spread ===================
function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
        // Only change code below this line
        newArr.push([...arr]); // Or
        // newArr.splice(-1, 0, [...arr]);
        // Only change code above this line
        num--;
    }
    return newArr;
}
// Array and number of times to copy into empty array
console.log(copyMachine([true, false, true], 2));

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

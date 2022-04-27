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

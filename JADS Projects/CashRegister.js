/* Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key. */

// Initial, didn't quite work all the way
// function checkCashRegister(price, cash, cid) {
//     let cidArr = cid.reverse();
//     let change = 0;
//     let changeArr = [];
//     const changeDue = cash - price;
//     const cidTotal = cid.reduce((total, money) => total + money[1], 0);
//     const map = { 'ONE HUNDRED': 100, 'TWENTY': 20, 'TEN': 10, 'FIVE': 5, 'ONE': 1, 'QUARTER': .25, 'DIME': .10, 'NICKEL': .05, 'PENNY': .01 };

//     function makeChange(arr) {
//         let currencyTotal = arr[1];
//         let currency = map[arr[0]];
//         const changeArrTotal = changeArr.reduce((total, money) => total + money[1], 0)
//         if (changeDue >= currency && currencyTotal > 0 && changeDue > changeArrTotal) {
//             while (change < changeDue && currencyTotal > 0) {
//                 if (change + currency <= changeDue) {
//                     change += currency;
//                     currencyTotal -= currency;
//                 }
//             }
//             changeArr.push([arr[0], change]);
//         }
//         return changeArr;
//     }
//     if (changeDue == cidTotal) return { status: "CLOSED", change: cid.reverse() };
//     for (let subArr of cidArr) {
//         makeChange(subArr);
//     }
//     if (changeDue > cidTotal || change != changeDue) {
//         return { status: "INSUFFICIENT_FUNDS", change: [] };
//     }

//     else return { status: "OPEN", change: changeArr };
// }

// 1st successful, with console logs, finished Jun 15, 2022
function checkCashRegister(price, cash, cid) {
    let cidArr = cid.reverse(); // This mutates the original 'cid' array
    // console.log(cid);
    let changeArr = [];
    let changeArrTotal;
    const changeDue = cash - price;
    // console.log(`changeDue = ${changeDue}`);
    const cidTotal = cid.reduce((total, money) => total + money[1], 0);
    // console.log(`cidTotal = ${cidTotal}`);
    const map = { 'ONE HUNDRED': 100, 'TWENTY': 20, 'TEN': 10, 'FIVE': 5, 'ONE': 1, 'QUARTER': .25, 'DIME': .10, 'NICKEL': .05, 'PENNY': .01 };

    // A rounding function from https://www.delftstack.com/howto/javascript/javascript-round-to-2-decimal-places/
    // function round(num) {
    //     return +(Math.round(num + 'e+2') + 'e-2')
    // } // Or my ES6 version
    const round = (num) => +(Math.round(num + "e+2") + "e-2");

    function makeChange(arr) {
        let change = 0;
        // console.log(`arr = ${arr}`);
        let currencyTotal = arr[1];
        // console.log(`currencyTotal = ${currencyTotal}`);
        let currency = map[arr[0]];
        // console.log(currency);
        changeArrTotal = round(changeArr.reduce((total, money) => total + money[1], 0));
        if (currencyTotal > 0 && changeDue >= round(changeArrTotal + currency)) {
            // console.log(`currencyTotal = ${currencyTotal}`)
            // console.log(`changeDue = ${changeDue}`);
            // console.log(`changeArr = ${changeArr}`);
            // console.log(`changeArrTotal = ${changeArrTotal}`);
            // console.log(`currency = ${currency}`);
            while (round(changeArrTotal + change + currency) <= changeDue && currencyTotal > 0) {
                // console.log('= while loop begin =');
                // console.log('changArT&cha&curr = ' + (changeArrTotal + change + currency))
                // if (changeArrTotal + currency <= changeDue) {
                change += currency;
                // console.log(`changeArrTotal = ${changeArrTotal}`);
                // console.log(`while change = ${change}`)
                // console.log(`currency = ${currency}`)
                currencyTotal -= currency;
                // }
                // console.log('= while loop end =');
            }
            changeArr.push([arr[0], change]);
            // console.log(`changeArr = ${changeArr}`);
            // console.log(`changeArrTotal = ${changeArrTotal}`);
            changeArrTotal = round(changeArr.reduce((total, money) => total + money[1], 0));
            return changeArrTotal;
        }
    }

    if (changeDue == cidTotal) return { status: "CLOSED", change: cid.reverse() };

    for (let subArr of cidArr) {
        // console.log(`subArr = ${subArr}`);
        makeChange(subArr);
    }
    if (changeDue > cidTotal || changeArrTotal != changeDue) {
        // console.log(`changeDue = ${changeDue}`);
        // console.log(`cidTotal = ${cidTotal}`);
        // console.log(`changeArr = ${changeArr}`);
        // console.log(`changeArrTotal = ${changeArrTotal}`);
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }

    return { status: "OPEN", change: changeArr };
}

// 1st successful, without console logs
function checkCashRegister(price, cash, cid) {
    let cidArr = cid.reverse();
    let changeArr = [];
    let changeArrTotal;
    const changeDue = cash - price;
    const cidTotal = cid.reduce((total, money) => total + money[1], 0);
    const map = { 'ONE HUNDRED': 100, 'TWENTY': 20, 'TEN': 10, 'FIVE': 5, 'ONE': 1, 'QUARTER': .25, 'DIME': .10, 'NICKEL': .05, 'PENNY': .01 };

    const round = (num) => +(Math.round(num + "e+2") + "e-2");
    
        if (changeDue == cidTotal) return { status: "CLOSED", change: cid.reverse() };

    function makeChange(arr) {
        let change = 0;
        let currencyTotal = arr[1];
        let currency = map[arr[0]];
        changeArrTotal = round(changeArr.reduce((total, money) => total + money[1], 0));
        if (currencyTotal > 0 && changeDue >= round(changeArrTotal + currency)) {
            while (round(changeArrTotal + change + currency) <= changeDue && currencyTotal > 0) {
                change += currency;
                currencyTotal -= currency;
            }
            changeArr.push([arr[0], change]);
            changeArrTotal = round(changeArr.reduce((total, money) => total + money[1], 0));
            return changeArrTotal;
        }
    }

    for (let subArr of cidArr) {
        makeChange(subArr);
    }
    if (changeDue > cidTotal || changeArrTotal != changeDue) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }

    return { status: "OPEN", change: changeArr };
}

// 2nd better
function checkCashRegister(price, cash, cid) {
    let cidArr = cid.reverse();
    let changeArr = [];
    let changeArrTotal;
    const changeDue = cash - price;
    let changeStillDue = changeDue;
    const cidTotal = cid.reduce((total, money) => total + money[1], 0);
    const currencyMap = { 'ONE HUNDRED': 100, 'TWENTY': 20, 'TEN': 10, 'FIVE': 5, 'ONE': 1, 'QUARTER': .25, 'DIME': .10, 'NICKEL': .05, 'PENNY': .01 };

    if (changeDue == cidTotal) return { status: "CLOSED", change: cid.reverse() };

    const round = (num) => +(Math.round(num + "e+2") + "e-2");

    for (let subArr of cidArr) {
        const currency = currencyMap[subArr[0]];
        const currencyQty = subArr[1] / currency; // Maybe unnecessary
        const maxChangeQty = Math.floor(changeStillDue / currency);
        if (maxChangeQty > 0 && maxChangeQty <= currencyQty) {
            changeStillDue = round(changeStillDue - maxChangeQty * currency);
            changeArr.push([subArr[0], maxChangeQty * currency]);
        } else if (maxChangeQty > 0 && maxChangeQty > currencyQty) {
            changeStillDue = round(changeStillDue - subArr[1]);
            changeArr.push([subArr[0], subArr[1]]);
        }
        changeArrTotal = round(changeArr.reduce((total, money) => total + money[1], 0));
    }

    if (changeDue > cidTotal || changeArrTotal != changeDue) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }

    return { status: "OPEN", change: changeArr };
}
// 3rd, better still
function checkCashRegister(price, cash, cid) {
    let cidArr = cid.reverse();
    let changeArr = [];
    let changeArrTotal;
    const changeDue = cash - price;
    let changeStillDue = changeDue;
    const cidTotal = cid.reduce((total, money) => total + money[1], 0);
    const currencyMap = { 'ONE HUNDRED': 100, 'TWENTY': 20, 'TEN': 10, 'FIVE': 5, 'ONE': 1, 'QUARTER': .25, 'DIME': .10, 'NICKEL': .05, 'PENNY': .01 };

    if (changeDue == cidTotal) return { status: "CLOSED", change: cid.reverse() };

    const round = (num) => +(Math.round(num + "e+2") + "e-2");

    for (let subArr of cidArr) {
        const currency = currencyMap[subArr[0]];
        const currencyQty = subArr[1] / currency;
        const maxChangeQty = Math.floor(changeStillDue / currency);
        const minChange = Math.min(maxChangeQty * currency, subArr[1]);
        if (maxChangeQty > 0 && currencyQty > 0) {
            changeStillDue = round(changeStillDue - minChange);
            changeArr.push([subArr[0], minChange]);
        }
        changeArrTotal = round(changeArr.reduce((total, money) => total + money[1], 0));
    }

    if (changeDue > cidTotal || changeArrTotal != changeDue) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }

    return { status: "OPEN", change: changeArr };
}
// Next is cidArr.map(subArr => )

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])); // {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])); // {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}
console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])); // {status: "OPEN", change: [["QUARTER", 0.5]]}
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])); //  {status: "INSUFFICIENT_FUNDS", change: []}

// Syntax example
// let arr1 = [[1, 2, 3], [4, 5, 6]];
// let arr3 = arr1.filter((subArr) => subArr[2] < 4);
// console.log(arr3);// [ [ 1, 2, 3 ] ]

// This part now works!
function checkCashRegister(price, cash, cid) {
    let changeArr = [];
    const cidArr = cid.reverse();
    let changeDue = cash - price;
    let changeStillDue = changeDue;
    let changeArrTotal;
    const currencyMap = { 'ONE HUNDRED': 100, 'TWENTY': 20, 'TEN': 10, 'FIVE': 5, 'ONE': 1, 'QUARTER': .25, 'DIME': .10, 'NICKEL': .05, 'PENNY': .01 };

    const round = (num) => +(Math.round(num + "e+2") + "e-2");

    for (let subArr of cidArr) {
        const currency = currencyMap[subArr[0]];
        console.log(`cSD1 = ${changeStillDue}`);
        const currencyQty = subArr[1] / currency; // Maybe unnecessary
        const qty = Math.floor(changeStillDue / currency); // first 2 (.05) then 4 (.01)
        changeStillDue = round(changeStillDue % currency);
        console.log(`cSD2 = ${changeStillDue}`);
        if (qty * currency > 0) changeArr.push([subArr[0], qty * currency]);
        changeArrTotal = round(changeArr.reduce((total, money) => total + money[1], 0));
        console.log(changeArrTotal);
    }
    console.log(changeArrTotal);
    return changeArr;
}
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])); // {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}

// console.log(0 % .25); // 0
// console.log(1 % .25); // 0
// console.log(1 % .25 == 0); // true

// function roundToTwo(num) {
//     return +(Math.round(num + "e+2")  + "e-2");
// }
// console.log(roundToTwo(2.005));
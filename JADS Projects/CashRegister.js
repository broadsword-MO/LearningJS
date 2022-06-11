/* Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key. */


function checkCashRegister(price, cash, cid) {
    let cidArr = cid.reverse(); // This mutates the original and may mess with some results
    // console.log(cidArr);
    console.log(cid);
    let changeArr = [];
    let changeArrTotal = changeArr.reduce((total, money) => total + money[1], 0);
    const changeDue = cash - price; // .50, mostly
    // console.log(`changeDue = ${changeDue}`);
    const cidTotal = cid.reduce((total, money) => total + money[1], 0);
    // console.log(`cidTotal = ${cidTotal}`);
    const map = { 'ONE HUNDRED': 100, 'TWENTY': 20, 'TEN': 10, 'FIVE': 5, 'ONE': 1, 'QUARTER': .25, 'DIME': .10, 'NICKEL': .05, 'PENNY': .01 };

    function makeChange(arr) {
        let change = 0;
        console.log(`arr = ${arr}`);
        let currencyTotal = arr[1];
        // console.log(`currencyTotal = ${currencyTotal}`);
        let currency = map[arr[0]];
        // console.log(currency);
        // let currencyQuantity = currencyTotal / currency;
        changeArrTotal = changeArr.reduce((total, money) => total + money[1], 0);
        if (currencyTotal > 0 && changeDue >= changeArrTotal + currency) {
            console.log(`currencyTotal = ${currencyTotal}`)
            console.log(`changeDue = ${changeDue}`);
            console.log(`changeArr = ${changeArr}`);
            console.log(`changeArrTotal = ${changeArrTotal}`);
            console.log(`currency = ${currency}`);
            while ((changeArrTotal + change + currency) <= changeDue && currencyTotal > 0) {
                console.log('= while loop begin =');
                // if (changeArrTotal + currency <= changeDue) {
                change += currency;
                console.log(`changeArrTotal = ${changeArrTotal}`);
                console.log(`change = ${change}`)
                console.log(`currency = ${currency}`)
                currencyTotal -= currency;
                // }
                console.log('= while loop end =');
            }
            changeArr.push([arr[0], change]);
            console.log(`changeArr = ${changeArr}`);
            console.log(`changeArrTotal = ${changeArrTotal}`);
            return changeArrTotal;
        }
    }

    if (changeDue == cidTotal) return { status: "CLOSED", change: cid.reverse() };

    for (let subArr of cidArr) {
        // console.log(`subArr = ${subArr}`);
        makeChange(subArr);
    }
    if (changeDue > cidTotal || changeArrTotal != changeDue) {
        console.log(`changeDue = ${changeDue}`);
        console.log(`cidTotal = ${cidTotal}`);
        console.log(`changeArr = ${changeArr}`);
        console.log(`changeArrTotal = ${changeArrTotal}`);
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }

    else return { status: "OPEN", change: changeArr };
}

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])); // {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}
// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])); // {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}
// console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])); // {status: "OPEN", change: [["QUARTER", 0.5]]}
// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])) //  {status: "INSUFFICIENT_FUNDS", change: []}
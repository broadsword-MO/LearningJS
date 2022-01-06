let numbers = [2, 3, 5];
function sum(numberArray) {
    let output = 0;
    for (var element of numberArray) {
        output += element;
    }
    return output;
};
console.log(sum(numbers)); // 10
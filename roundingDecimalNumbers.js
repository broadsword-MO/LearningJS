// Why rounding is needed REGULARLY in JavaScript!!! Example:
const adding = () => 0.1 + 0.2;
console.log(adding()); // 0.30000000000000004 (Ha!)

// * LINK From DelftStack article on rounding to 2 decimal places. file:///C:/Users/dell/Downloads/MEGA/Doug's%20docs/Coding/Reference/Javascript/Round%20a%20Number%20to%202%20Decimal%20Places%20in%20JavaScript%20_%20Delft%20Stack%20(6_17_2022%2012_00_24%20PM).html

// Number.EPSILON is the difference between 1 and the smallest value greater than 1 that is representable as a Number value (infinitesimally small). It is added to num, then multiplied and divided by 10, 100, 1000, etc. The number of zeros gives you the number of decimal places. So 100 gives 2 decimal places.
function roundToTwo(num) {
    return Math.round((num + Number.EPSILON) * 100) / 100;
}
console.log(roundToTwo(1.005)); // 1.01

// Change both numbers in the function to change how many decimal places. 'e+2' 'e-2' gives 2 decimal places, 'e+3' 'e-3' gives 3 decimal places, etc.
function round(num) {
    return +(Math.round(num + 'e+2') + 'e-2');
    // Or the template literal version
    // return +`${Math.round(`${num}e+2`)}e-2`;
}
console.log(round(1.005)); // 1.01

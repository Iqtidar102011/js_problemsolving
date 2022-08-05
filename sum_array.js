// var nums = [2, 4, 6, 7, 8];
// var sum = 0;
// for (i = 0; i < nums.length; i++) {
//     sum += nums[i];

// }
// console.log(sum);
// // Write a function findOddSum() that will take the array [5, 7, 8, 10, 45, 30]
// as the input parameter and will return the sum of the odd numbers.

// calculate sum of all numbers in an array

function sumArray(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        var index = i;
        var element = numbers[index];
        sum = sum + element;
    }
    return sum;
}

// get odd numbers---------
function getOddNumbers(numbers) {
    var oddNumbers = [];
    for (var i = 0; i < numbers.length; i++) {
        var index = i;
        var element = numbers[i];
        if (element % 2 !== 0) {
            oddNumbers.push(element);
        }
    }
    return oddNumbers;

}

var elements = [5, 7, 8, 10, 45, 30];
var oddNumbers = getOddNumbers(elements);
var oddNumbersum = sumArray(oddNumbers);
console.log(oddNumbersum);


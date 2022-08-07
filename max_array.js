// getting the maximum element of an array

// const arrayOfNumbers = [2, 4, 24, 8, 12];
// const maximum = arrayOfNumbers.reduce((accumulator, current) => Math.min(accumulator, current), 0);
// console.log(maximum);


// reduce method: will reduce all the elements of an array into a single value
// reduce() is a callback function with two parameters: 1. accumulator and current; the accumulattor is the value that we initialize (here 0, if not given anything , it would take the 1st value which would be 2 and then current value would be 4)
// so reuce function has two argument . 1 callback function.
// 2.intitial value for the accumulator , which is 0 here

// how it works---------
// 1.   initially , a=0,c=2;Math.max(a,c)=2;so, a will be 2 after the callback function is executed
// 2.   a=2,c=4 ; a=4;
// 3.    a=4,c=24; a=24;
// 4.   a=24,c=8; a=24;
// 5. a=24,c=8; a=24;
// 6. a=24 , c=12; a=24

function maxFromArray(numbers) {
    const maximum = numbers.reduce((accumulator, current) => Math.max(accumulator, current), 0);
    return maximum
}
var arr = [2, 4, 6, 8, 24, 56, 78];
var result = maxFromArray(arr);
console.log(result);

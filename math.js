const toThePower = Math.pow(2, 3);
console.log(toThePower);

// taking absolute value 
const num1 = 5;
const num2 = 25;
const gap = Math.abs(num1 - num2);
console.log(gap);
// ans 20 , here negative is ignored due to Math.abs()


// convert into round figure
const number = 2.3145;
const fullNumber = Math.round(number);
console.log(fullNumber);
// ans : 2
const number2 = 2.5145;
const fullNumber2 = Math.round(number2);
console.log(fullNumber2);
// ans: 3

// Math.ceil: returns the smallest integer greater than or equal to its numeric argument
// example: 2.0000001 will turn into 3;

// Math.floor-- opposite to ceiling 
// example: 2.999 --> 2;

// random
// find random round number from 1 to 10
// by dafult it will give random number from 0 to 1.
// if we want to have random dumber from 0 to 10, we have to mutiply it with 10
const random = Math.round(Math.random() * 10);
console.log(random);
// can be used in a loop 

// for more read Math documentation on MDN
// Math.max() to find max value
// math.min() to find smallest value


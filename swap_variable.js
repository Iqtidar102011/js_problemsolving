let first = 5;
let second = 7;
// console.log(first, second);
// swap variable- approach 1 -temp
const temp = first;
first = second;
second = temp;
console.log(first, second);


// ---------aproach2 destructuring----------------

[first, second] = [second, first];
console.log(first, second);


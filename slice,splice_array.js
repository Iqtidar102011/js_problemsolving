const a = [1, 2, 3, 4, 5, 8, 58, 67];
// getting part of an array using slice
// const partialOfA = a.slice(0, 4);
// console.log(partialOfA)
// output [ 1, 2, 3, 4 ]

// / splice:Removes elements from an array
//  and, if necessary, inserts new elements in their place, returning the deleted elements.
// will change the original array
// useful to add or remove from the middle
// for end and beginning we will use .push(),.pop(),unshift,shift
const partial = a.splice(2, 5, "a", "b", "c");
console.log(partial);
console.log(a);
// output [ 1, 2, 'a', 'b', 'c', 67]

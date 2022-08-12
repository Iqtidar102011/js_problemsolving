// // for of loop
// const number = [2, 3, 5, 6, 7];
// for (let i = 0; i < number.length; i++) {
//     const num = number[i];
//     console.log(num);
// }
// // simplified version is by using for of loop

// for (const num of number) {
//     console.log(num);
// }

// find the mathced products from this array

function matched(products, search) {
    // to store the matched items in a new array
    const match = [];
    // for of loop to loop through the array products
    // use include of to check if the value is there or not
    // use .push()to push the matched items in the new array
    for (const product of products) {
        if (product.price.includes(search)) {
            match.push(product);
        }
    }
    return match

}
const result = matched(products, "19000");
console.log(result);


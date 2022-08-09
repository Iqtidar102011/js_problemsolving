
// function findCheapest(phones) {
//     let cheapest = phones[0];
//     for (let i = 0; i < phones.length; i++) {
//         const phone = phones[i];
//         if (phone.price < cheapest.price) {
//             cheapest = phone;
//         }

//     }
//     return cheapest;
// }
// const result = findCheapest(phones);
// console.log(result);


// sum total of prices
let phones = [
    { name: "walton", price: 20000, quantity: 5 },
    { name: "samsung", price: 22000, quantity: 2 },
    { name: "oppo", price: 25000, quantity: 1 },
    { name: "oneplus", price: 30000, quantity: 3 },
    { name: "nokia", price: 26000, quantity: 1 },
    { name: "htc", price: 18000, quantity: 2 },

]

function total(phones) {
    let sum = 0;
    for (i = 0; i < phones.length; i++) {
        const product = phones[i];
        const totalProduct = product.price * product.quantity;
        sum = sum + totalProduct;
    }
    return sum
}
const result = total(phones);
console.log(result);
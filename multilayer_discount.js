// if ticket number less than 100, per ticket price:100
// 2.if ticket price is more than 100 but less than 200,first 100 tickets will be 100tk/ticket, resr ticket will be 90 tk per price;
// 3. if purchase more than 200 tickets
// first 100----100tk
// 101-200----90tk
// 200+----70tk

function ticketPrice(ticketQuantity) {
    const first100Rate = 100;
    const second100Rate = 90;
    const restRate = 70;
    if (ticketQuantity <= 100) {
        const price = ticketQuantity * first100Rate;
        return price;
    }
    else if (ticketQuantity <= 200) {
        const price1 = 100 * first100Rate;
        const restticketquantity = ticketQuantity - 100;
        const price2 = restticketquantity * second100Rate;
        const total = price1 + price2;
        return total;
    }
    else {
        const price1 = 100 * first100Rate;
        const price2 = 100 * second100Rate;
        const remainingTicketQuantity = ticketQuantity - 200;
        const price3 = remainingTicketQuantity * restRate;
        const totalPrice = price1 + price2 + price3;
        return totalPrice;

    }
}
const result = ticketPrice(250);
console.log(result);
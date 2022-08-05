function odd_even(num) {
    if (num % 2 == 0) {
        return "even";
    }
    else {
        return "odd";
    }

}
var result = odd_even(12);
console.log(result);
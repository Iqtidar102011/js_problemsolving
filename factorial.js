function factorial(number) {
    var result = 1;
    for (var i = 1; i <= number; i++) {
        result = result * i;
    }
    return result;
}
var result = factorial(5);
console.log(result);
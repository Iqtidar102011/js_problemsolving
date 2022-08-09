function add(num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        return "please enter a number"
    }
    else {
        return num1 + num2;
    }
}
const result = add(12, 12);
console.log(result);



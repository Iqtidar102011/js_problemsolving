// reversing a string
function reverseString(text) {
    let reverse = "";
    for (let i = text.length - 1; i >= 0; i--) {
        const element = text[i];
        reverse = reverse + element;
    }
    return reverse;
}
const str = "my name is iqtidar";
const reversedString = reverseString(str);
console.log(reversedString);
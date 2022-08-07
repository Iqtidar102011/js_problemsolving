function maxFromArray(numbers) {
    let max = numbers[0];
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];

        }
    }

    return max;
}
var arr = [2, 4, 67, 114, 92, 10, 66, 44, 265];
var result = maxFromArray(arr);
console.log(result);
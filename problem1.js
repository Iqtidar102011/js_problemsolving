// input number of jim and della, and pinku and output print the name of the max number owner
function number(m, n, p) {
    if (m > n && m > p) {
        console.log('jim');

    }

    else if (n > m && n > p) {
        console.log("dela");
    }
    else {
        console.log("pinku");
    }
}
number(84, 99, 77);

// but if the number of parameters are very long ,using Math.max()  is better

function num(a, b, c) {
    const max = Math.max(a, b, c);
    return max;
}
console.log(num(84, 99, 77));
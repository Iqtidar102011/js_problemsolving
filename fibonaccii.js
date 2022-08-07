//const fibo= [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
// fibo [3]=fibo[2]+fibo[1];
// fibo[9]=fibo[8]+fib[7];
// fibo[n]=fibo[n-1]+fibo[n-2];
// fib0[i]=fibo[i-1]+fibo[i-2];
const fibo = [0, 1];
for (i = 2; i <= 25; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo);
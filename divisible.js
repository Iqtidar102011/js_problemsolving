// show output from 1-50
// if divisible by 3 then instead of number show foo
// if divisble by 5 .....show 5
// if both 5 and 3 , show foo bar

for (i = 1; i <= 50; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("foobar");
    }
    else if (i % 3 == 0) {
        console.log("foo");
    }
    else if (i % 5 == 0) {
        console.log("bar");
    }
    else {
        console.log(i);
    }
}
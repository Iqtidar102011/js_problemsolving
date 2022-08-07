function leapYear(year) {
    if (year % 4 == 0 && year % 100 !== 0) {
        return true;
    }
    else { return false; }

}
var result = leapYear(2024);
console.log(result);
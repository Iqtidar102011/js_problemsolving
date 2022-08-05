function milesTokm(value) {
    var kilo = value * 1.60934;
    return kilo;
}
var miles = 2;
var result = milesTokm(miles);
console.log(miles, "mile :", result, "km");
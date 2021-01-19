//inch To Feet conversion

function inchToFeet(inch) {
    var feet = inch /12;
    return feet;
}
var nanaFeet = inchToFeet(156);
console.log(nanaFeet);

var naniFeet = inchToFeet(136);
console.log(naniFeet);

var dadaFeet = inchToFeet(190);
console.log(dadaFeet);

var senior = [150, 200, 178];
var seniorFeet = inchToFeet(senior[0]);
console.log(seniorFeet);
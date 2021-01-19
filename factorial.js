
var factorial = 1;
for(var i = 1 ; i <=5 ; i++) {
    factorial = factorial * i;
    console.log(i , factorial);
}
//factorial by recursive function
function fact(n) {
    if(n <=1) {
        return n ;
    }
    return n * fact(n-1);
}
var result = fact(5);
console.log(result);
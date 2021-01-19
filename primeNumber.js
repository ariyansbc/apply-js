
function isPrime(n) {

    for(var i = 2 ; i < n/2 ; i++) {
        console.log( n ,"/" , i ,"=" , n/i);

        if(n % i == 0) {
            return 'Not A Prime number';
        }
    }
    return n + " Is a prime number"
}
var result = isPrime(71);
console.log(result);
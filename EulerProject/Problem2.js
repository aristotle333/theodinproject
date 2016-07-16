/*  Each new term in the Fibonacci sequence is generated by adding the previous two terms.
    By starting with 1 and 2, the first 10 terms will be: 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

    By considering the terms in the Fibonacci sequence whose values do not exceed four million,
    find the sum of the even-valued terms.
 */

function evenFibonacciSum(cap) {
    var sum = 0;
    var arr = [0, 1, 0];
    
    while (arr[2] <= cap) {
        arr[2] = arr[0] + arr[1];
        if (!(arr[2] % 2) && arr[2] <= cap) {
            sum += arr[2];
        }
        arr[0] = arr[1];
        arr[1] = arr[2];
    }
    return sum;
}

var cap = 4000000;

console.log(evenFibonacciSum(cap));
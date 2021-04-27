function fibonacciArray(n) {
    var sum = 0;
    var fibArr = [0, 1];
    for(i = 0; i<n; i++){
       sum = fibArr[i] + fibArr[i+1];
       fibArr.push(sum);
    }
    return fibArr;
}
   
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
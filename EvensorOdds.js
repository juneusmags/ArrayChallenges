
function evensOfOdds(arr) {
    var totalOdds = 0;
    var totalEvens = 0;     
    for(var i = 0; i<arr.length; i++){
        if(arr[i]%2!==0){
            totalOdds+=arr[i];
        }
        else{
            totalEvens += arr[i];
        }
    }
    if(totalOdds < totalEvens){
        return "evens are larger"
    }
    else if(totalOdds > totalEvens){
        return "odds are larger"
    }
    else{
        return "tied";
    }
}


var result = evensOfOdds([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back "evens are larger"
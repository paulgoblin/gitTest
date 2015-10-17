// Array analyzer takes an array of numbers and counts 
// the following

//Count of odd integers
//Count of negative integers
//The average of all integers (round to 2 decimal)
//The median of all integers
// and returns it in an object

var arrayAnalyze = function() {
    
    var ans = {odds: 0, negatives: 0, avg: 0, median:0};
    
    // first put the arguments into an array
    var args = [];
    var n = arguments.length;
    for (var i = 0; i < n; ++i) args[i] = arguments[i];
    
    // push a 0 in there to so we have a marker for where negatives end
    args.push(0);
    
    // Sort the array to make things easy on ourselves
    var compareNum = function(a, b) {
        return a - b;
        }
    args.sort(compareNum);
    
    // find where is zero
    ans.negatives = args.indexOf(0);
    // and get rid of the one we added
    args.splice(ans.negatives, 1);
    
    // find median
    if ( n % 2 === 1 ) {
        ans.median = args[(n-1)/2];
    } else {
        ans.median = (args[n/2 - 1] + args[n/2])/2;
    }
    
    // find odd entries
    // need to mod negatives
    Number.prototype.mod = function(num) {
        return ((this%num)+num)%num;
    };
    
    function isOdd(num) {
        return num.mod(2) === 1;
    }
    
    var oddOnes = args.map(isOdd);
    oddOnes.sort();
    ans.odds = n - oddOnes.indexOf(true);
    
    // average all numbers
    // use closure to sum!
    // Summing with some fancy thing instead of a loop
    // in hopes that I will understand it.
    var sum = args.reduce(
        function(total, num){ return total + num }
        , 0);
    
    // calc avg and round
    ans.avg = Math.round(100*sum/n)/100;
    
    return ans;
}

console.log(arrayAnalyze(7, -3, 0, 12, 44, -5, 3));

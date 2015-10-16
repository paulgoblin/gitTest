//takes a string argument and returns an array of true/false
// values that map to whether the word in that position is
// palindrome or not. Please use well behaved strings ;)

var palindromicMap = function(str){
    var words = str.split(" ");
    
    var flip = function(s){
        return s.split("").reverse().join("");
    }
    
    var isPalindrome = function(s){
        var rev = flip(s);
        return (rev === s);
    }
    
    return words.map(isPalindrome);
}



console.log(palindromicMap("stash and pop on this level"));

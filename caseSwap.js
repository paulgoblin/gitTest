
var swapCase = function(str) {
  // switch the case of each alphabetical character in string, str
  // return string with cases swapped
  
  // split the input string into an array of chars
  var letterArr = str.split("");
  
  // function to swap the case of a letter
  var swapCaseLetter = function (l) {
    if ( l.toLowerCase() === l ) {
      return l.toUpperCase();
    }
    else {
      return l.toLowerCase() ;
    }
  }
  
  // map over the array, looking at each element and swapping case
  return letterArr.map(swapCaseLetter).join("");
  
}

console.log(swapCase("Life is 10% what happens to you, and 90% of how you REACT to it"));
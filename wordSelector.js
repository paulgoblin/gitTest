//takes a sentence as an argument and determines which word in that sentence has the greatest number of repeated letters
//If the sentence has multiple words with the same max of repeated letters, return them all in an Array.
// assumes no special chars like /, ", etc...
// A letter can be any character in the string, so
// elipses (...) could register as word with the most
// repeated letter. To fix this, add a loop over the input 
// to remove non-'letters.'

var wordSelector = function(str) {
    var ans = [];
    
    //first make string into array of words
    var words = str.split(" ");
    
     // takes a string and returns a string with the letters sorted
    var sortLetters = function(s) { 
        return s.split("").sort().join("");
    }
    
    //compares elements of two arrays of equal length.
    // returns array of T/F of whether elements on each
    // index are identical.
    var compare = function(arr1, arr2) {
        var ans = [];
        for(i = 0; i < arr1.length; i++) {
            ans.push(arr1[i] === arr2[i]);
        }
        return ans;
    }
    
    // finds the number of the most repeated letter in a string of sorted letters
    var repLetter = function(s) {
        var arr1 = s.split("");
        var arr2 = s.split("");
        var truthArr =[];
        n = arr1.length;
        
        if (n < 2) {
            return 0;
        }
        count = 0;
        match = true;
        
        while (match && count < n) {
            arr2.pop();
            arr1.shift();
            truthArr = compare(arr1, arr2);
            match = truthArr.indexOf(true) != -1;
            count++;
        }
        
        return count;
    }
    
    // make a new array and sort each word by letter
    // keep this array in order
    var sortedWords = words.map(sortLetters);
    
    //count the number of repeated letters in each word
    var letterCount = sortedWords.map(repLetter);
    
    //find the index (or indices) of the biggest number
    var maxLetterCount = Math.max.apply(Math, letterCount);
    for (i = 0; i < letterCount.length; i++) {
        if (maxLetterCount === letterCount[i]){
            ans.push(words[i]);
        }
    }
    
    if (ans.length === 1) {
        return ans[0];
    }
    else if (ans.length === 0) {
        return "All words have no repeated letters";
    }
    else {
        return ans;
    }
}

console.log(wordSelector("I attribute my success to this: I never gave or took any excuse. -Florence Nightingale"))

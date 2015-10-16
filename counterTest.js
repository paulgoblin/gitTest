// superCounter returns the word count (no. of string segments separated by spaces), character count, average word length, and number of spaces in a string, phrase. phrase can be any string not containing special characters like /,  ", or ' 

var superCounter = function(phrase){
    
    // make sure we're counting a string
    if (typeof phrase != "string") {
        console.log("please provide a string as input");
        return;
    }
    
    var totCount = {
        words: 0,
        chars: phrase.length,
        avgLength: 0,
        spaces: 0,
        };
    
    if (phrase[0] === " ") {
        totCount.spaces++;
    }
    else {
        totCount.words++;
    }
    
    for ( var i = 1; i < totCount.chars; i++) {
        if (phrase[i] === " ") {
            totCount.spaces++;
        }
        else if (phrase[i-1] === " "){
            totCount.words++;
        }

    }
    
   totCount.avgLength = (totCount.chars - totCount.spaces)/totCount.words;
    
    return totCount;
}

console.log(superCounter("Count me in"));


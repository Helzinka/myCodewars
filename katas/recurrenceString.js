// Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

function strCount(str, letter){  
    let t = 0
    for (const i of str) {
        if(letter === i){
            t++
        }
    }
    return t
}

//console.log(strCount("qskjsnd", "s"));
console.log(strCount("sq", "s"));
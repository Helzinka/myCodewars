// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

let arr = [1,-2,3,4,5]

function positiveSum(arr) {
    let t = 0
    for (let i of arr) {
        if(Math.sign(i) >= 1){
            t += i
        }
    }
    return t
}

console.log(positiveSum(arr));
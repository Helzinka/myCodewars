// Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.

function include(arr, item){
    return arr.some(el=> el === item)
}

console.log(include([1,2,5,8], 0));
console.log(include([1,2,5,8], 1));
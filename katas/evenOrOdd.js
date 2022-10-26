// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
    if(number % 2 > 0 || number % 2 < 0){
        return "Odd"
    }
    return "Even"
}

console.log(even_or_odd(45));
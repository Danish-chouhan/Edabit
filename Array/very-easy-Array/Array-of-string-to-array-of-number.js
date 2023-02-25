// Create a function that takes as a parameter an array of "stringified" numbers and returns an array of numbers.
// Example:

// ["1", "3", "3.6"] ➞ [1, 3, 3.6]
// Examples
function toNumberArray(stringified){
    return stringified.map(a => Number(a))
}


console.log(toNumberArray(["9.4", "4.2"])) // [9.4, 4.2]
console.log(toNumberArray(["91", "44"])) // [91, 44]
console.log(toNumberArray(["9.5", "8.8"])) // [9.5, 8.8]
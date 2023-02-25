// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

// Examples

function minMax([arr1,arr2]){
    return [Math.min(arr1),Math.max(arr2)]
}


console.log(minMax([1, 2, 3, 4, 5])) // [1, 5]
console.log(minMax([2334454, 5])) // [5, 2334454]
console.log(minMax([1])) // [1, 1]
// Notes
// All test arrays will have at least one element and are valid.
// Create a function that takes an array of integers and strings. Convert integers to strings and return the new array.

// Examples

function parseArray(array){
    return array.map(a => String(a))
}



console.log(parseArray([1, 2, "a", "b"])) // ["1", "2", "a", "b"]
console.log(parseArray(["abc", 123, "def", 456])) // ["abc", "123", "def", "456"]
console.log(parseArray([1, 2, 3, 17, 24, 3, "a", "123b"])) // ["1", "2", "3", "17", "24", "3", "a", "123b"]
console.log(parseArray([])) // []
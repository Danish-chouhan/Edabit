// Create a function that takes an array and returns the types of values (data types) in a new array.

// Examples

function arrayValuesTypes(arr){
    return arr.map(a => typeof a)
}


console.log(arrayValuesTypes([1, 2, "null", []])) // ["number", "number", "string", "object"]
console.log(arrayValuesTypes(["214", true, false, 2, 2.15, [], null])) // ["string", "boolean", "boolean", "number", "number", "object", "object"]
console.log(arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214])) // ["number", "string", "string", "object", "object", "boolean", "number"]
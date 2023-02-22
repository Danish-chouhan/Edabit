// Create a function that takes an array and returns the types of values (data types) in a new array.

// Examples

function arrayValuesTypes(arr){
    return arr.map(a => typeof a)
}


// console.log(arrayValuesTypes([1, 2, "null", []])) // ["number", "number", "string", "object"]
// console.log(arrayValuesTypes(["214", true, false, 2, 2.15, [], null])) // ["string", "boolean", "boolean", "number", "number", "object", "object"]
// console.log(arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214])) // ["number", "string", "string", "object", "object", "boolean", "number"]

function fiftyThirtyTwenty(ati){
    return {'Needs' : ati * 0.5 , 'Wants' : ati * 0.3, 'Saving' : ati * 0.2} 
}

console.log(fiftyThirtyTwenty(10000)) // { "Needs": 5000, "Wants": 3000, "Savings": 2000 }
console.log(fiftyThirtyTwenty(50000)) // { "Needs": 25000, "Wants": 15000, "Savings": 10000 }
console.log(fiftyThirtyTwenty(13450)) // { "Needs": 6725, "Wants": 4035, "Savings": 2690 }
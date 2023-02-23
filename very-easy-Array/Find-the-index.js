// Create a function that takes an array and a string as arguments and returns the index of the string.

// Examples

function findIndex(arr,str){
    // return arr.findIndex(a => a == str)
    return arr.indexOf(str)
}






console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh")) // 2
console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue")) // 1
console.log(findIndex(["a", "g", "y", "d"], "d")) // 3
console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple")) // 0
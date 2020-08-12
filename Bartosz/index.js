// Arrays: Introduction
// 1. Declare a variable named `myArray` and store an array that contains 5 elements. Print the array.
let myArray = [
    "elementOne",
    "elementTwo",
    "elementThree",
    "elementFour",
    "elementFive"
]

console.log(myArray); // ["elementOne", "elementTwo", "elementThree", "elementFour", "elementFive"]

// 2. Access the 3rd element in the array and save that to another variable named `thirdElement`. Print the `thirdElement`. 
myArray[3] = "thirdElement";
console.log(myArray[3]); // thirdElement

// 3. Reassign the fourth element of the array and give it a value of "fourth element". Print the array once more.
myArray[4] = "fourth element";
console.log(myArray[4]); // fourth element
console.log(myArray); // ['elementOne', 'elementTwo', 'elementThree', 'thirdElement', 'fourth element']
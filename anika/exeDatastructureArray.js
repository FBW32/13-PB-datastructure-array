// # Arrays: Introduction

// **Instructions**
// 1. Declare a variable named `myArray` and store an array that contains 5 elements. Print the array.

let myArray = [4, "cup", true, 2, "tea"];
console.log(myArray); // [ 4, 'cup', true, 2, 'tea' ]

// 2. Access the 3rd element in the array and save that to another variable named `thirdElement`. Print the `thirdElement`.

let thirdElement = myArray.splice(2, 1);
console.log(myArray); // [ 4, 'cup', 2, 'tea' ]
console.log(thirdElement); // [ true ]

// 3. Reassign the fourth element of the array and give it a value of "fourth element". Print the array once more.

myArray.splice(3, 1, "fourth element");
console.log(myArray); // [ 4, 'cup', 2, 'fourth element' ]

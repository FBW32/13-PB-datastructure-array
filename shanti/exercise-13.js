// Arrays: Introduction

/* 1. Declare a variable named myArray and store an array that contains 5 elements. Print the array. */
let myArray = [];
myArray = [
    'Red',
    'Blue',
    'Green',
    'Pink',
    'Yellow'
];
console.log(myArray); // [ 'Red', 'Blue', 'Green', 'Pink', 'Yellow' ]

/* 2. Access the 3rd element in the array and save that to another variable named thirdElement. Print the thirdElement. */
let thirdElement = myArray[2];
console.log(thirdElement); // Green

/* 3. Reassign the fourth element of the array and give it a value of "fourth element". Print the array once more. */
myArray[3] = 'fourth element';
console.log(myArray); // [ 'Red', 'Blue', 'Green', 'fourth element', 'Yellow' ]

/* Declare a variable named myArray and store an array that contains 5 elements. Print the array.
 */
let myArray = [`Maja`, 1979, `Zielona Gora`, `Poland`, `Planet Earth`];
console.log(myArray); // [ 'Maja', 1979, 'Zielona Gora', 'Poland', 'Planet Earth' ]

/* Access the 3rd element in the array and save that to another variable named thirdElement. Print the thirdElement.
 */
let thirdElement = myArray[2];
console.log(thirdElement); //  Zielona Gora

/* Reassign the fourth element of the array and give it a value of "fourth element". Print the array once more.
 */

myArray.splice(4, 1, "fourth element");
console.log(myArray); // [ 'Maja', 1979, 'Zielona Gora', 'Poland', 'fourth element' ]

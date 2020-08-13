// 1. Declare a variable named myArray and store an array that contains 5 elements. Print the array.

let myArray = [
    "Jerry",
    38,
    {veggie: "brokkoli"},
    false,
    function() {(console.log(4 * 3))}
]

console.log(myArray); // [ 'Jerry', 38, { veggie: 'brokkoli' }, false, [Function (anonymous)] ]


// 2. Access the 3rd element in the array and save that to another variable named thirdElement. Print the thirdElement.

myArray[2] = "thirdElement";
console.log(myArray[2]); // thirdElement


// 3. Reassign the fourth element of the array and give it a value of "fourth element". Print the array once more.

myArray[3] = "fourth element";
console.log(myArray); // [ 'Jerry', 38, 'thirdElement', 'fourth element', [Function (anonymous)] ]
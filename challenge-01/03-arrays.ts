// ## Arrays

// ### Challenge 1
// Create an array of numbers

// ```typescript
// // Write your code here:
let numbers: number[] = [1, 2, 3, 4, 5];

// ### Challenge 2
// From the previously create array, access the second-indexed item
// // Write your code here:
let secondItem: number = numbers[2];
console.log(secondItem); // Output: 3

// ### Challenge 3
// Create an array of the two boolean values

// ```typescript
// // Write your code here:
let booleanValues: boolean[] = [true, false];

// ### Challenge 4
// Create an array of a number and a string without type annotation

// ```typescript
// // Write your code here:
let mixedArray = [42, "Hello"];

// ### Challenge 5
// Annotate an array with types number, boolean and string

// ```typescript
// // Write your code here:

let annotatedArray: (number | boolean | string)[] = [42, true, "Hello"];

// ### Challenge 6
// Simulate a Type Error with a number type array by assigning it a string value array

// ```typescript
// // Write your code here:
// const errorArray: number[] = ["Hello", "World"];
// // => Error: Type 'string' is not assignable to type 'number'.

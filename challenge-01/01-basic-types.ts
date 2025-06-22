// # Challenge 1: TypeScript Fundamentals

// ## Basic Types

// ### Challenge 1
// Create a variable with the type number and assign it an arbitrary value
// // Write your code here:
let age: number;
age = 12;

// ### Challenge 2
// Create a variable with the type string and use the addition operator to put two arbitrary words together
// // Write your code here:
const fullname: string = "Thanh" + " " + "Tuấn";

// ### Challenge 3
// Simulate a Type Error by assigning a number to a string
// => Error: Type 'number' is not assignable to type 'string'.
// // Write your code here:
// const error: string = 12;
// console.log(error)

// ### Challenge 4
// Create a variable with the type Boolean and assign it to the logical OR operator comparing two values
// // Write your code here:
const isAvailable: boolean = true || false;
// console.log(isAvailable)

// ### Challenge 5
// Simulate a Type Error by assigning a number to a boolean
// => Error: Type 'number' is not assignable to type 'boolean'.
// const error: boolean = 12;

// ### Challenge 6
// Get the length of an arbitrary string
// // Write your code here:
const countLength: number = fullname.length;
console.log(countLength);

//Type Inference
//Challenge 1
//Assign a number to a variable with no type annotation, what is the variable type inferred by TypeScript?
// =>TypeScript will automatically infer the type of the variable age1 as number.
// // Write your code here:
let age1 = 27;

// ### Challenge 2
// Assign a string to a variable with no type annotation, what is the variable type inferred by TypeScript?
// =>TypeScript will automatically infer the type of the variable myPet as string.
// // Write your code here:
let myPet = "dog";

// ### Challenge 3
// Assign a boolean false to a variable with no type annotation, what is the variable type inferred by TypeScript?
// =>TypeScript will automatically infer the type of the variable isActive as boolean.
// // Write your code here:
let isActive = true;

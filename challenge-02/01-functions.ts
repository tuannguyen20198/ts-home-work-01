// # Challenge 2: Functions and Advanced Concepts

// ## Functions

// ### Challenge 1
// Create a function that returns the multiplication of two arbitrary numbers and returns a type error when passed a string

// ```typescript
// // Write your code here:

function multiplyNumbers(a: number, b: number): number {
  return a * b;
}
console.log(multiplyNumbers(5, 10)); // Output: 50
// console.log(multiplyNumbers(5, "10")); // Output: Error: Argument of type 'string' is not assignable to parameter of type 'number'
// ### Challenge 2
// Simulate a type error for the returned value of a function of arbitrary type

// ```typescript
// // Write your code here:

function returnString(): string {
  return "This is a string";
}
console.log(returnString()); // Output: "This is a string"
// ### Challenge 3
// Create an arrow function that returns the addition of a number and a boolean type

// ```typescript
// // Write your code here:

const addNumberAndBoolean = (num: number, bool: boolean): number => {
  return num + (bool ? 1 : 0);
};
console.log(addNumberAndBoolean(5, true)); // Output: 6
console.log(addNumberAndBoolean(5, false)); // Output: 5
// ### Challenge 4
// Create a function that makes words plural by adding "s"

// ```typescript
// // Write your code here:

function makePlural(word: string): string {
  return word + "s";
}
console.log(makePlural("dog")); // Output: "dogs"
// ### Challenge 5
// Write a function that adds or subtracts 1 from a number based on a boolean evaluation. If the boolean is true, it adds 1 otherwise subtracts 1 from the number

// ```typescript
// // Write your code here:

function adjustNumber(num: number, shouldAdd: boolean): number {
  return shouldAdd ? num + 1 : num - 1;
}
console.log(adjustNumber(5, true)); // Output: 6
console.log(adjustNumber(5, false)); // Output: 4

// ### Challenge 6
// Create a function that takes an array of numbers, then returns it. Does not change the array. If a string is passed, it throws a type error

// ```typescript
// // Write your code here:

function returnNumberArray(arr: number[]): number[] {
  return arr;
}
console.log(returnNumberArray([1, 2, 3])); // Output: [1, 2, 3]
// console.log(returnNumberArray(["1", "2", "3"])); // Output: // Error: Argument of type 'string[]' is not assignable to parameter of type 'number[]'.
// ### Challenge 7
// Create a function that takes an array of tuples consisting of two properties, a name and an age. Return the names in a string array

// ```typescript
// // Write your code here:

function getNamesFromTuples(tuples: [string, number][]): string[] {
  return tuples.map((tuple) => tuple[0]);
}
console.log(
  getNamesFromTuples([
    ["Alice", 30],
    ["Bob", 25],
  ])
); // Output: ["Alice", "Bob"]

// ## Function Types

// ### Challenge 1
// What will the function invocation result in?

// ```typescript
// function multiply(n: number): number {
//   return n * n;
// }
// const result: (n: number) => number = multiply;
// result(11);

// // Write your answer here:

// The function invocation will result in `121`, which is the square of `11`.
// The `multiply` function takes a number as an argument and returns its square. The `
// result` variable is assigned the `multiply` function, which has the type `(n: number) => number`. When `result(11)` is called, it invokes the `multiply` function with `11`, returning `121`.
// console.log(result(11)); // Output: 121

// ### Challenge 2
// What will the function invocation result in?

// ```typescript
// // function addition(n: number): number {
// //   return n + n;
// // }
// // const result: (n: number) => string = addition;
// // result(11);

// // Write your answer here:

// // The function invocation will result in a type error because the `addition` function returns a `number`, but `result` is declared as a function that returns a `string`.
// // TypeScript will raise an error: "Type 'number' is not assignable to type 'string'." This is because the `addition` function can only return a number, but `result` is expected to return a string.
// // console.log(result(11)); // This line will not execute due to the type error

// ### Challenge 3
// Write a function that can accept number, string and boolean as argument types and returns a string type

// ```typescript
// // Write your code here:

function mixedTypeToString(arg: number | string | boolean): string {
  return String(arg);
}
// console.log(mixedTypeToString(42)); // "42"
// console.log(mixedTypeToString("Hello")); // "Hello"
// console.log(mixedTypeToString(true)); // "true"
// console.log(mixedTypeToString(false)); // "false"
// ### Challenge 4
// Write a function that returns an inverted boolean value

// ```typescript
// // Write your code here:

//function invertBoolean(value: boolean): boolean {
function invertBoolean(value: boolean): boolean {
  return !value;
}
// console.log(invertBoolean(true)); // false
// console.log(invertBoolean(false)); // true

// ### Challenge 5
// Write a function that adds 1 to a number, subtracts 1 from a number or does nothing to a number based on a condition. First argument is a number and second argument is either "add", "subtract" or "do nothing"

// ```typescript
// // Write your code here:

function modifyNumber(
  num: number,
  action: "add" | "subtract" | "do nothing"
): number {
  switch (action) {
    case "add":
      return num + 1;
    case "subtract":
      return num - 1;
    case "do nothing":
      return num;
    default:
      throw new Error("Invalid action");
  }
}
// console.log(modifyNumber(5, "add")); // 6
// console.log(modifyNumber(5, "subtract")); // 4
// console.log(modifyNumber(5, "do nothing")); // 5
// console.log(modifyNumber(5, "multiply")); // Error: Invalid action

// ### Challenge 6
// What will the function invocation result in?

// ```typescript
// // function someFunc() {
// // }
// // const myNum: number = someFunc();

// // Write your answer here:

// // The function invocation will result in a type error because `someFunc` does not return any value (it has an implicit return type of `void`), but `myNum` is declared as a `number`.
// // TypeScript will raise an error: "Type 'void' is not assignable to type 'number'." This is because `someFunc` does not return a value, and `myNum` expects a number.
// // console.log(myNum); // This line will not execute due to the type error
// ### Challenge 7
// What will the function invocation result in?

// ```typescript
// function callAnotherFunc(func: (price: number, course: string) => string) {
//   return func(10.99, "TS");
// }

// // let caller = callAnotherFunc(
// //   (price, course) => `The ${course} course has a price of ${price}`
// // );
// // console.log(caller);

// // Write your answer here:

// // The function invocation will result in a string that describes the course and its price.
// // The `callAnotherFunc` function takes a function as an argument, which accepts a `number` and a `string`, and returns a `string`.
// // When `callAnotherFunc` is called with the provided arrow function, it will pass `10.99` as the price and `"TS"` as the course, resulting in the string: "The TS course has a price of 10.99".
// // console.log(caller); // Output: "The TS course has a price of 10.99"

// ### Challenge 8
// Add a type for the function that means it takes no arguments and returns a string

// ```typescript
// // const result: SomeFunc = () => "TS Bootcamp";
// // console.log(result());

// // Write your code here:
type SomeFunc = () => string;
const result: SomeFunc = () => "TS Bootcamp";
console.log(result()); // Output: "TS Bootcamp"

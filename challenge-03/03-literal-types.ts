// ## Literal Types

// ### Challenge 1
// What will the following function invocation result in?

// ```typescript
function courseName(): string {
  return "TS";
}
// let typeScript: "TS" = courseName();

// // Write your answer here:

// The function invocation will result in a type error because `courseName()` returns a string, but `typeScript` is declared as a literal type `"TS"`.
// TypeScript will raise an error: "Type 'string' is not assignable to type
// 'TS'." This is because the function can return any string, but `typeScript` can only hold the specific string value `"TS"`.
// console.log(typeScript); // This line will not execute due to the type error.

// ### Challenge 2
// What will accessing the variable favBook result be?

// ```typescript
type BookType =
  | "And the Mountains Echoed"
  | "The Kite Runner"
  | "A Thousand Splendid Suns";
let favBook: BookType = "The Kite Runner";
favBook;

// // Write your answer here:

// The variable `favBook` will hold the value `"The Kite Runner"`.
// Since `favBook` is declared with the type `BookType`, which is a union type of three specific string literals, it can only be assigned one of those values.
// In this case, it is assigned the value `"The Kite Runner"`, which is one of the valid options in the `BookType` union.
// console.log(favBook); // Output: "The Kite Runner"

// ### Challenge 3
// What will the following code result in?

// ```typescript
// // type BookType =
// //   | "And the Mountains Echoed"
// //   | "The Kite Runner"
// //   | "A Thousand Splendid Suns";
// // let favBook: BookType = "The Shining";
// // favBook;

// // Write your answer here:

// The code will result in a type error because the value `"The Shining"` is not one of the valid options defined in the `BookType` union type.
// TypeScript will raise an error: "Type '"The Shining"' is not assignable to type 'BookType'." This is because `favBook` can only be assigned one of the three specific string literals defined in the `BookType` union: `"And the Mountains Echoed"`, `"The Kite Runner"`, or `"A Thousand Splendid Suns"`.
// console.log(favBook); // This line will not execute due to the type error.

// ### Challenge 4
// What will the following variable assignment result in?

// ```typescript
// // let bool: true = false;

// // Write your answer here:
// The variable assignment will result in a type error because `bool` is declared as a literal type `true`, but it is being assigned the value `false`.
// TypeScript will raise an error: "Type 'false' is not assignable to type 'true'." This is because `bool` can only hold the specific boolean value `true`, and assigning it `false` violates that constraint.
// console.log(bool); // This line will not execute due to the type error.

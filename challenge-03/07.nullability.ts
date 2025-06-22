// ## Nullability

// ### Challenge 1
// What is the result of the following variable assignment?

// ```typescript
// /* Do not comment in unless answered
// let vague: number | undefined = null
// */

// // Write your answer here:

// The variable `vague` will be assigned the value `null`, which is compatible with the type `number | undefined`. In TypeScript, `null` can be assigned to a variable that has a union type that includes `undefined`. Therefore, `vague` will have the value `null`, and its type will be `number | undefined`.
// console.log(vague); // Output: null

// ### Challenge 2
// What is the result of the second variable assignment?

// ```typescript
// /* Do not comment in unless answered
// let vague1: boolean | undefined = true ? true : undefined;
// let vague2: boolean = vague1;
// */

// // Write your answer here:

// The second variable assignment will result in a type error. The variable `vague1` is declared as `boolean | undefined`, which means it can hold either a boolean value or `undefined`. However, when it is assigned to `vague2`, which is declared as `boolean`, TypeScript will raise an error because `vague1` can potentially be `undefined`, and `undefined` cannot be assigned to a variable of type `boolean`.
// To fix this, you can either ensure that `vague1` is always a boolean value before assigning it to `vague2`, or you can change the type of `vague2` to `boolean | undefined`.
// console.log(vague2); // This line will not execute due to the type error.

// ### Challenge 3
// What is the result of the following variable assignment?

// ```typescript
// /* Do not comment in unless answered
// let vague: string | undefined = undefined;
// */

// // Write your answer here:

// The variable `vague` will be assigned the value `undefined`, which is compatible with the type `string | undefined`. In TypeScript, `undefined` can be assigned to a variable that has a union type that includes `undefined`. Therefore, `vague` will have the value `undefined`, and its type will be `string | undefined`.
// console.log(vague); // Output: undefined

// ### Challenge 4
// What is the value of the vague2 variable? Make sure to check for both boolean and undefined values

// ```typescript
// /* Do not comment in unless answered
// let vague1: boolean | undefined = true ? true : undefined;
// // let vague1: boolean | undefined = true ? undefined : true;

// let vague2: boolean;

// if (vague1 === undefined) {
//   vague2 = false;
// } else {
//   vague2 = true;
// }

// console.log(vague2);
// */

// // Write your answer here:

// The value of `vague2` will be `true` in the first case and `false` in the second case.
// In the first case, `vague1` is assigned `true`, so the condition `vague1 === undefined` evaluates to `false`, and `vague2` is assigned `true`.
// In the second case, `vague1` is assigned `undefined`, so the condition `vague1 === undefined` evaluates to `true`, and `vague2` is assigned `false`.
// console.log(vague2); // Output: true (first case) or false (second case)

// ### Challenge 5
// Create a function that produces a value based on the following conditions:

// 1. If the argument passed is a string containing a number, it should return the number
// 2. If the argument passed is a string not containing a number, it should return undefined
// 3. If the argument passed is undefined, it should return undefined

// ```typescript
// // Write your code here:
function parseStringToNumber(arg: string | undefined): number | undefined {
  if (arg === undefined) {
    return undefined;
  }

  const parsedNumber = Number(arg);
  return isNaN(parsedNumber) ? undefined : parsedNumber;
}
// console.log(parseStringToNumber("123")); // 123
// console.log(parseStringToNumber("abc")); // undefined
// console.log(parseStringToNumber(undefined)); // undefined

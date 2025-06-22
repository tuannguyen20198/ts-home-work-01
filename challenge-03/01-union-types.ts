// # Challenge 3: Advanced Types and Real-world Usage

// ## Union Types

// ### Challenge 1
// What will the function invocation result in?

// ```typescript
// function productId(): string | number {
//   return 112233;
// }
// let id: string | number = productId();
// id;

// // Write your answer here:
// The function invocation will result in `id` being assigned the value `112233`, which is of type `number`.
// Since `id` is declared as a union type `string | number`, it can hold either a string or a number. In this case, it holds a number.
// console.log(id); // Output: 112233
// ### Challenge 2
// What will the function invocation result in?

// ```typescript
// function productId(): string | number {
//   return 112233;
// }
// let id: number = productId();
// id;

// // Write your answer here:

// The function invocation will result in a type error because `productId()` returns a union type `string | number`, but `id` is declared as a `number`.
// TypeScript will raise an error: "Type 'string | number' is not assignable to type 'number'." This is because the function can return a string, which cannot be assigned to a variable of type `number`.
// console.log(id); // This line will not execute due to the type error.

// ### Challenge 3
// What will the function invocation result in?

// ```typescript
// function productId(): number {
//   return 112233;
// }
// let id: string | number = productId();
// id;

// // Write your answer here:

// The function invocation will result in `id` being assigned the value `112233`, which is of type `number`.
// Since `id` is declared as a union type `string | number`, it can hold either a string or a number. In this case, it holds a number.
// console.log(id); // Output: 112233

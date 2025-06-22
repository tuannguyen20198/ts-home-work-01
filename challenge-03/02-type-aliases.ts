// ### Challenge 1
// Create a custom type and assign it both boolean values

// ```typescript
// // Write your code here:

// ```

// ### Challenge 2
// What will be the value of variable score?

// ```typescript
// type Score = number;
// let avgScore: string = "11.5";
// let score: Score = avgScore;

// // Write your answer here:
// The code will result in a type error because `avgScore` is of type `string`, but `score` is declared as type `Score`, which is an alias for `number`. TypeScript will raise an error: "Type 'string' is not assignable to type 'number'."
// console.log(score); // This line will not execute due to the type error.

// ### Challenge 3
// What will be the value of variable score?

// ```typescript
// // type Score = number;
// // let avgScore: number = 11.5;
// // let score: Score = avgScore;

// // Write your answer here:

// The code will execute without any type errors. The variable `avgScore` is of type `number`, and it is assigned to `score`, which is also of type `Score` (an alias for `number`). Therefore, `score` will have the value `11.5`.
// console.log(score); // Output: 11.5

// ## Conditionals

// ### Challenge 1
// Return a string "Congratulations" if a person is equal to or older than 21

// ```typescript
// // Write your code here:

function checkAge(age: number): string {
  return age >= 21 ? "Congratulations" : "Not old enough";
}
console.log(checkAge(22)); // Output: "Congratulations"
console.log(checkAge(20)); // Output: "Not old enough"

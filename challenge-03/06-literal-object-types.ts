// ## Literal Object Types

// ### Challenge 1
// Write a function that takes a literal object with one property of name and simply returns the name

// ```typescript
// // Write your code here:

function getName(obj: { name: string }): string {
  return obj.name;
}
console.log(getName({ name: "John Doe" })); // Output: "John Doe"

// ### Challenge 2
// Write a function that takes an object type with one property of online (type boolean) as argument and simply returns the whether the user is online or offline

// ```typescript
// // Write your code here:
function isUserOnline(obj: { online: boolean }): string {
  return obj.online ? "User is online" : "User is offline";
}
console.log(isUserOnline({ online: true })); // Output: "User is online"
console.log(isUserOnline({ online: false })); // Output: "User is offline"

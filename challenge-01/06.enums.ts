// ## Enums

// ### Challenge 1
// Create an enum of product names and display it on the console

// ```typescript
// // Write your code here:
enum ProductNames {
  Laptop = "Laptop",
  Smartphone = "Smartphone",
  Tablet = "Tablet",
}
console.log(ProductNames.Laptop); // Output: "Laptop"
// ### Challenge 2
// Create an enum of product ids and display it on the console

// ```typescript
// // Write your code here:

enum ProductIds {
  Laptop = 101,
  Smartphone = 102,
  Tablet = 103,
}
console.log(ProductIds.Smartphone); // Output: 102

// ### Challenge 3
// Create an enum of a single favorite product detail from the two previously created enums and display it on the console

// ```typescript
// // Write your code here:

enum FavoriteProduct {
  Name = ProductNames.Laptop,
  Id = ProductIds.Laptop,
}
console.log(
  `Favorite Product: ${FavoriteProduct.Name}, ID: ${FavoriteProduct.Id}`
); // Output: Favorite Product: Laptop, ID: 101

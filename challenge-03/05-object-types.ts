// ## Object Types

// ### Challenge 1
// Create an object type that has 3 properties (name, age, job) and create an object from this type

// ```typescript
// // Write your code here:

type Person = {
  name: string;
  age: number;
  job: string;
};
let person: Person = {
  name: "John Doe",
  age: 30,
  job: "Software Engineer",
};

console.log(person);

// Output:
// {
//   name: "John Doe",
//   age: 30,
//   job: "Software Engineer"
// }

// ### Challenge 2
// Access the published property from the following object using the bracket notation and the dot notation

// ```typescript
// // type OnlineCourse = {
// //   name: string;
// //   platform: string;
// //   features: string[];
// //   "meta-data": {
// //     published: boolean;
// //   };
// // };

// // let myCourse: OnlineCourse = {
// //   name: "TS Bootcamp",
// //   platform: "Udemy",
// //   features: ["Practical", "Exercise Oriented", "Modern TS Concepts"],
// //   "meta-data": {
// //     published: true,
// //   },
// // };

// // Write your code here:

// type OnlineCourse = {
//   name: string;
//   platform: string;
//   features: string[];
//   "meta-data": {
//     published: boolean;
//   };
// };

// let myCourse: OnlineCourse = {
//   name: "TS Bootcamp",
//   platform: "Udemy",
//   features: ["Practical", "Exercise Oriented", "Modern TS Concepts"],
//   "meta-data": {
//     published: true,
//   },
// };
// //dot notation
// console.log(myCourse["meta-data"].published); // Output: true
// //bracket notation
// console.log(myCourse["meta-data"]["published"]); // Output: true

// ### Challenge 3
// Fix the error in the following code by modifying the type Product. Do not make changes to the product1 or product2 objects

// ```typescript
// type Product = {
//   name: string;
//   publishedStatus: boolean;
// };

// const product1: Product = { name: "TS Bootcamp" };
// const product2: Product = { name: "TS Bootcamp", publishedStatus: true };

// // Write your code here:
//// => Fix the error by making publishedStatus optional in the Product type
type Product = {
  name: string;
  publishedStatus?: boolean; // Made publishedStatus optional
};
const product1: Product = { name: "TS Bootcamp" };
const product2: Product = { name: "TS Bootcamp", publishedStatus: true };

// ### Challenge 4
// What will the product object log?

// ```typescript
const onlineCourse = { name: "TS Bootcamp", price: 10.99 };
const product = { ...onlineCourse, released: true };
console.log(product);

// // Write your answer here:

// The product object will log:
// {
//   name: "TS Bootcamp",
//   price: 10.99,
//   released: true
// }
// This is because the spread operator `...onlineCourse` copies the properties of `onlineCourse` into the `product` object, and then the `released` property is added with the value `true`.
// The final `product` object will have three properties: `name`, `price`, and `released`.
// console.log(product); // Output: { name: "TS Bootcamp", price: 10.99, released: true }

// ### Challenge 5
// Create a product type and add a holidaySales method that return a string "Sale is On". Finish by creating an object from the type and logging the string on the console

// ```typescript
// // Write your code here:
type ProductWithSale = {
  name: string;
  price: number;
  holidaySales: () => string;
};
const productWithSale: ProductWithSale = {
  name: "TS Bootcamp",
  price: 10.99,
  holidaySales: () => "Sale is On",
};
console.log(productWithSale.holidaySales()); // Output: "Sale is On"

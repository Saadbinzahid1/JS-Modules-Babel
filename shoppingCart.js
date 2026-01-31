"use strict";

console.log("Exporting Module");
const cart = [];
let favDish = "Biryani";
let price = 10;
export function addToCart(product, price) {
  cart.push({ product, price });
}
addToCart("Carrots", 25);
// console.log(cart);

// export default function (product, price) {
//   cart.push({ product, price });
// }

console.log("Started fetching Todos");
await fetch(`https://jsonplaceholder.typicode.com/todos`);
console.log("Finished fetching Todos");

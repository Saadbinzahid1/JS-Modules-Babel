"use strict";

console.log("Exporting Module");
const cart = [];
export function addToCart(product, price) {
  cart.push({ product, price });
}
addToCart("Carrots", 25);
console.log(cart);

"use strict";
import "./shoppingCart.js";

console.log("Importing Module");
// addToCart("Rice", 10);

// import * as ShoppingCart from "./shoppingCart.js";
// ShoppingCart.addToCart(ShoppingCart.favDish, ShoppingCart.price);
// console.log(ShoppingCart.cart);

// import add from "./shoppingCart.js";
// add("Onion", 5);

console.log("Hi from script.js");
async function getLastPost() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();
  console.log(data);
  return { title: data.at(-1).title, body: data.at(-1).body };
}
const lastPost = await getLastPost();
console.log(lastPost);

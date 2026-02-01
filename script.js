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

import deepClone from "lodash-es";
const state = {
  subjects: [
    { mth: "Math", hum: "Psychology" },
    { csc: "Computer", lit: "English" },
  ],
  user: { rollNum: "sp24-bse-153", name: "Saad Bin Zahid", class: "BSE-4A" },
};

const stateClone = Object.assign({}, state);
const stateCloneDeep = deepClone(state);

state.user.name = "Saad Zahid";
console.log(state);
console.log(stateClone);
console.log(stateCloneDeep);

if (module.hot) {
  module.hot.accept();
}

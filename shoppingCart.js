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
console.log("Finished fetching Todos");

const gamingCheckout = (function () {
  const releaseDate = "21-Jan-2025";
  const unitsSold = 1890;
  const genre = "Action-Adventure";

  function calPrice(quantity) {
    console.log(
      `You bought ${quantity} units at 10$ each. Total= ${quantity * 10}$`,
    );
  }

  function checkOut() {
    console.log(`...shipping on your way.`);
  }

  return { releaseDate, unitsSold, calPrice };
})();

gamingCheckout.calPrice();
console.log(gamingCheckout.releaseDate);
console.log(gamingCheckout.genre);

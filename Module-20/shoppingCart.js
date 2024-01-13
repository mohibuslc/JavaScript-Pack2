/* create one Shopping Cart */

const shoppingCart = [
  { name: "shart", Price: 2200, quantity: 2 },
  { name: "pent", Price: 1780, quantity: 4 },
  { name: "T-shirt", Price: 1200, quantity: 4 },
  { name: "show", Price: 1500, quantity: 5 },
  { name: "Cap", Price: 1000, quantity: 1 },
];

function totalCart(products) {

  let sum = 0;
  
  for (let i = 0; i < products.length; i++) {
    let product = products[i];

    let productsExpance = product.Price * product.quantity;

    sum = sum + productsExpance;
  }

  return sum;
}

const result = totalCart(shoppingCart);

console.log("Total Expance :", result);

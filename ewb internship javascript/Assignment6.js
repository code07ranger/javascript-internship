//Assignment 6: Arrays, Objects, and Core Methods


//Task: Create an array of product objects (with name and price properties). Use forEach() to print each product, filter() to find items under a certain price, and map() to create an array of formatted name-price strings.


let products = [
    { name:"Laptop",price:800 },
    { name:"Mouse",price: 25 },
    { name:"Keyboard",price: 45 }
];
console.log("-- All Products (forEach) --");
products.forEach(function(product) {
    console.log(`Item: ${product.name} - Price: $${product.price}`);
});
console.log("\n-- Filtered Products (Price < $50) --");
let filteredProducts = products.filter(product => product.price < 50);
console.log(filteredProducts);
console.log("\n-- Mapped Product Tags (map) --");
let productTags = products.map(product =>
    `${product.name.toUpperCase()} costs $${product.price}`
);
console.log(productTags);
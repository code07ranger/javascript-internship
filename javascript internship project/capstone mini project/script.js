// Product Inventory & Analytics - JS capstone
// runs in the browser (prompt) ; also works in node for testing (see bottom)

// ---------- settings ----------
const BUDGET_LIMIT = 50;      // below this = Budget
const PREMIUM_LIMIT = 500;    // above this = Premium, in between = Standard
const AFFORDABLE_LIMIT = 200;
const MAX_TRIES = 3;

// ---------- starting data ----------
var inventory = [
  { name: "Laptop", price: 800, category: "" },
  { name: "Mouse", price: 25, category: "" }
];

// ---------- 1. input ----------
console.log("--- Initializing Inventory System ---");

function askForProduct() {
  for (let attempt = 1; attempt <= MAX_TRIES; attempt++) {
    let rawName = prompt("Product name?");
    if (rawName === null) {
      console.log("Cancelled, nothing added.");
      return null;
    }
    let rawPrice = prompt("Price of " + (rawName.trim() || "product") + " (in $)?");
    if (rawPrice === null) {
      console.log("Cancelled, nothing added.");
      return null;
    }

    let name = rawName.trim();
    // strip a leading $ if the user typed one, then convert on purpose
    let price = Number(rawPrice.trim().replace("$", ""));

    if (name === "" || rawPrice.trim() === "") {
      console.log("Try " + attempt + ": name or price was empty.");
      continue;
    }
    if (isNaN(price) || price <= 0) {
      console.log("Try " + attempt + ": '" + rawPrice + "' is not a valid price.");
      continue;
    }
    if (findIndexByName(name) !== -1) {
      console.log("Try " + attempt + ": " + name + " is already in the list.");
      continue;
    }
    return { name: name, price: price, category: "" };
  }
  console.log("Too many bad inputs, skipping the new product.");
  return null;
}

// ---------- 3. searching with a loop ----------
function findIndexByName(name) {
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name.toLowerCase() !== name.toLowerCase()) continue;
    return i; // found, stop looking
  }
  return -1;
}

// ---------- 2. category badge ----------
function getCategory(price) {
  let badge;
  // switch(true) so I can use ranges
  switch (true) {
    case price < BUDGET_LIMIT:
      badge = "Budget";
      break;
    case price <= PREMIUM_LIMIT:
      badge = "Standard";
      break;
    default:
      badge = "Premium";
  }
  return badge;
}

// ---------- 4. functions ----------
function getTotalValue(items) {
  let total = 0;
  for (const item of items) {
    total += item.price;
  }
  return total;
}

// the rates live inside the closure, nobody outside can change them
function makePriceAdjuster(taxPercent, discountPercent) {
  const tax = taxPercent / 100;
  const discount = discountPercent / 100;
  return (price) => {
    let afterDiscount = price - price * discount;
    return +(afterDiscount + afterDiscount * tax).toFixed(2);
  };
}

const money = (n) => "$" + n;

// ---------- run it ----------
const newItem = askForProduct();
if (newItem !== null) {
  inventory.push(newItem);
  console.log('[Prompt executed: User adds "' + newItem.name + '" at "' + money(newItem.price) + '"]');
}

inventory.forEach(function (item) {
  item.category = getCategory(item.price);
});

// ---------- 5. output ----------
console.log("\n--- Processing Inventory Roster (forEach) ---");
inventory.forEach((item) => {
  console.log("* Item: " + item.name + " (" + money(item.price) + ") -> Category: " + item.category);
});

console.log("\n--- Financial Analytics ---");
console.log("Total Inventory Value: " + money(getTotalValue(inventory)));

const affordable = inventory
  .filter((item) => item.price < AFFORDABLE_LIMIT)
  .map((item) => item.name);
console.log("Filtered Affordable Items (Under $" + AFFORDABLE_LIMIT + "):", affordable);

const report = inventory.map((item) => item.name.toUpperCase() + ": " + money(item.price));
console.log("Formatted Report List:", report);

// extra: price after 18% tax and 10% discount
const finalPrice = makePriceAdjuster(18, 10);
console.log("\n--- Bonus: price after 10% discount + 18% tax ---");
inventory.forEach((item) => {
  console.log(item.name + ": " + money(item.price) + " -> " + money(finalPrice(item.price)));
});
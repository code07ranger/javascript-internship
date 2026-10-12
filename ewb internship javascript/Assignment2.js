//Assignment 2: Operators, Expressions, and Input Handling

//Task: Read input from the terminal, convert it to numbers, compute the total,
//and log a formatted summary.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function prompt(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer.trim());
    });
  });
}

async function main() {
  const subtotalInput = await prompt('Enter your bill amount: ');
  const tipPercentageInput = await prompt('Enter tip percentage: ');

  const subtotal = Number(subtotalInput);
  const tipPercentage = Number(tipPercentageInput);

  if (Number.isNaN(subtotal) || Number.isNaN(tipPercentage)) {
    console.log('Please enter valid numeric values.');
    rl.close();
    return;
  }

  let tip = subtotal * tipPercentage / 100;
  let total = subtotal;
  total += tip;

  console.log(`Subtotal:${subtotal}`);
  console.log(`Tip Percentage:${tipPercentage}%`);
  console.log(`Calculated Tip:$${tip}`);
  console.log(`Total Amount to Pay:$${total}`);

  rl.close();
}

main();
const raw_price = Number(prompt("Enter Raw Price:"));
const vat = 20.6/100;
const final_price = raw_price * (1 + vat);
console.log(`Final Price: ${final_price}`);

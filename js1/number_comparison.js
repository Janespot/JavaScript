const num1 = Number(prompt("Enter first number: "));
const num2 = Number(prompt("Enter second number: "));

if(num1 > num2){
    console.log(`${num1} is greater than ${num2}`);
}
else if(num2 > num1){
    console.log(`${num2} is greater than ${num1}`);
}
else{
    console.log(`${num1} is equal to ${num2}`);
}

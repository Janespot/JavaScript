const month = Number(prompt("Enter month number to see the number of days:"));

if(month === 1 || month === 3 || month === 5 || month === 7 || month === 9 || month === 11){
    console.log(`Month ${month} has 31 days!`);
}
else if(month === 4 || month ===6 || month === 8 || month === 10 || month === 12){
    console.log(`Month ${month} has 30 days!`);
}
else if(month === 2){
    console.log("February has 28 days or 29 days during leap years.");
}
else{
    console.log("Not a valid month, try again!");
}

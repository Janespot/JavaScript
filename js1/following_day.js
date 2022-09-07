const today = prompt("Enter day today:");

switch(today){
case "Monday":
console.log("Tommorow will be Tuesday");
break;
case "Tuesday":
console.log("Tomorrow will be Wednesday");
break;
case "Wednesday":
console.log("Tomorrow will be Thursday");
break;
case "Thursday":
console.log("Tomorrow will be Friday");
break;
case "Friday":
console.log("Tomorrow is Saturday");
break;
case "Saturday":
console.log("Tomorrow is Sunday");
break;
case "Sunday":
console.log("Tomorrow is Monday");
break;
default:
console.log("Not a valid day");
}

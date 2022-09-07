//enter time: h, m, s

let hours = Number(prompt("Enter the hours:"));
let minutes = Number(prompt("Enter minutes:"));
let seconds = Number(prompt("Enter seconds:"));

//if 0=<h<=23; 0<=m<=59; 0<=s<=59

if( 0<= hours && hours <= 23 && 0 <= minutes && minutes <= 59 && 0 <= seconds && seconds <= 59){ 

//s++

	seconds++;


//    if s==60;s=0

	if(seconds == 60){
        seconds = 0;

//        m++;
        

		minutes++;   
//    if m==60;m=0


		if(minutes == 60){
			minutes = 0;
//        h++


			hours++;
//    if h==24;h=0

			if(hours == 24){

				hours = 0;
//        s++

				seconds++;
    }
    }
    }

	console.log(`The time in one next second will be ${hours}:${minutes}:${seconds}`);

}else {

	alert("Invalid input!");
}

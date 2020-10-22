function clock(){
var canvas = document.getElementById("clockCanvas");

var context = canvas.getContext("2d");

var clockRadius = (canvas.width) / 2;

// DRAWING THE CIRCLE FOR CLOCK FACE

context.beginPath();
context.strokeStyle = "#FFF8DC";
context.lineWidth = 24;
context.arc(clockRadius, clockRadius, clockRadius, 0, 2 * Math.PI);
context.fillStyle = "#FAEBD7";
context.fill();
context.stroke();

context.beginPath();
context.strokeStyle = "black";
context.lineWidth = 2;
context.arc(clockRadius, clockRadius, 12, 0, 2 * Math.PI);
context.fillStyle = "black";
context.fill();
context.stroke();

// ADDING NUMBERS

context.font=clockRadius/10+"px aerial";
context.fillStyle="black";
context.textAlign="center";
context.textBaseline="middle";
for(var i=1;i<=12;i++){
    context.fillText(i,clockRadius+clockRadius*0.85*Math.sin(i*2*Math.PI/12),clockRadius-clockRadius*0.85*Math.cos(i*2*Math.PI/12))
}

// GETTING THE TIME

var date = new Date();
var hours= date.getHours(); //24 hour format
var minutes= date.getMinutes();
var seconds= date.getSeconds();
var fullHour=(hours%12)+ (minutes/60)+ (seconds/3600);

// GETTING THE ANGLE

var hourAngle=fullHour*2*Math.PI/12;
var minuteAngle=minutes*2*Math.PI/60;
var secondsAngle=seconds*2*Math.PI/60;

// CREATING HOUR, MINUTE AND SECONDS HAND

context.strokeStyle="black";
context.lineWidth=10;
context.moveTo(clockRadius,clockRadius);
context.lineTo(clockRadius+clockRadius*0.5*Math.sin(hourAngle),clockRadius-clockRadius*0.5*Math.cos(hourAngle));
context.stroke();

context.strokeStyle="black";
context.lineWidth=3;
context.moveTo(clockRadius,clockRadius);
context.lineTo(clockRadius+clockRadius*0.7*Math.sin(minuteAngle),clockRadius-clockRadius*0.7*Math.cos(minuteAngle));
context.stroke();


context.lineWidth=2;
context.moveTo(clockRadius,clockRadius);
context.lineTo(clockRadius+clockRadius*0.9*Math.sin(secondsAngle),clockRadius-clockRadius*0.9*Math.cos(secondsAngle));
context.strokeStyle="black";
context.stroke();
    
}

setInterval(clock,1000);
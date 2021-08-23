Canvas=document.getElementById("myCanvas");
ctx=Canvas.getContext("2d");

var color="grey"
ctx.beginPath();
console.log(color);
ctx.strokeStyle = color;
ctx.lineWidth = 4;
ctx.rect(150, 143, 430, 200);
ctx.stroke();

var color="blue"
ctx.beginPath();
ctx.strokeStyle = color;
console.log(color);
ctx.lineWidth=5;
ctx.arc(230,220,40,0,2 * Math.PI);
ctx.stroke();

var color="yellow"
console.log(color);
ctx.strokeStyle = color;
ctx.beginPath();
ctx.lineWidth=5;
ctx.arc(275,265,40,0,2 * Math.PI);
ctx.stroke();

var color="black"
console.log(color);
ctx.strokeStyle = color;
ctx.beginPath();
ctx.lineWidth=5;
ctx.arc(320,220,40,0,2 * Math.PI);
ctx.stroke();

var color="green"
console.log(color);
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth=5;
ctx.arc(365,265,40,0,2 * Math.PI);
ctx.stroke();

var color="red"
console.log(color);
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth=5;
ctx.arc(410,220,40,0,2 * Math.PI);
ctx.stroke();
Canvas=document.getElementById("myCanvas");
ctx=Canvas.getContext("2d");

var color="grey"
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 4;
ctx.rect(150, 143, 430, 200);
ctx.stroke();

var color="blue"
ctx.stokeStyle = color;
ctx.beginPath();
ctx.lineWidth=5;
ctx.arc(230,220,40,0,2 * Math.PI);
ctx.stroke();

var color="yellow"
ctx.stokeStyle = color;
ctx.beginPath();
ctx.lineWidth=5;
ctx.arc(275,265,40,0,2 * Math.PI);
ctx.stroke();

var color="black"
ctx.stokeStyle = color;
ctx.beginPath();
ctx.lineWidth=5;
ctx.arc(320,220,40,0,2 * Math.PI);
ctx.stroke();

var color="green"
ctx.stokeStyle = color;
ctx.beginPath();
ctx.lineWidth=5;
ctx.arc(365,265,40,0,2 * Math.PI);
ctx.stroke();

var color="red"
ctx.stokeStyle = color;
ctx.beginPath();
ctx.lineWidth=5;
ctx.arc(410,220,40,0,2 * Math.PI);
ctx.stroke();
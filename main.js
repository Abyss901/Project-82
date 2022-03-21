 mouseEvent = ""
 canvas = document.getElementById("canvas");
 ctx = canvas.getContext("2d");
 width = document.getElementById("Width");
 col = document.getElementById("Colour");
 radius = document.getElementById("Radius");
 x = ""
 y = ""
 canvas.addEventListener("mousedown", my_mousedown);

 function my_mousedown(e) {
     col = document.getElementById("Colour").value;
     width = document.getElementById("Width").value;
     radius = document.getElementById("Radius").value;
     mouseEvent = "mousedown";
 }

 function my_mouseup(e) {
     col = document.getElementById("Colour").value;
     width = document.getElementById("Width").value;
     radius = document.getElementById("Radius").value;
     mouseEvent = "mouseup";
 }

 function my_mousemove(e) {
     x = e.clientX - canvas.offsetLeft;
     y = e.clientY - canvas.offsetTop;

     if (mouseEvent == "mouseDown")
         console.log("Current pos of and y: ");
     console.log("x = " + x + "y = " + y);
     ctx.beginPath();
     ctx.strokeStyle = col;
     ctx.lineWidth = width;
     ctx.arc(x, y, 0, 2 * Math.Pi);
     ctx.stroke();
     mouseEvent = "mousemove";
 }

 function my_mouseleave(e) {
     mouseEvent = "mouseleave";
 }
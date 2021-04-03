}
window.addEventListener("keydown",my_keydown );
function my_keydown(e) { keyPressed = e.keyCode;
console.log(keyPressed); if(keyPressed == '38') { up(); console.log("up"); }
if(keyPressed == '40') { down(); console.log("down");
} if(keyPressed == '37') { left(); console.log("left");
} if(keyPressed == '39') { right();
console.log("right");}
}
function up() { if(car1_y >=0) { car1_y = car1_y - 10;
console.log("When up arrow is pressed, x = " + car1_x + " | y = " +car1_y);
uploadBackground();
uploadrover(); } }

function down() { if(rover_y <=500) { car1_y =car1_y+ 10;
console.log("When down arrow is pressed, x = " + car1_x + " | y = " +car1_y);
uploadBackground();
uploadrover(); }
}

function left() { if(rover_x >= 0) { car1_x =car1_x - 10;
console.log("When left arrow is pressed, x = " + car1_x + " | y = " +car1_y);
uploadBackground();
uploadrover(); } }

function right() { if(car1_x <= 700) { car1_x =rover_x + 10; console.log("When right arrow is pressed, x = " + car1_x + " | y = " +car1_y);
uploadBackground();
 uploadrover(); } }


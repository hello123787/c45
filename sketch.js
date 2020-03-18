var player
var bg
function preload(){
  bg = loadImage("images/map image.png");
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  player = new Player(displayWidth /2 - 50,displayHeight - 370);
}

function draw() {
  background(bg);  
player.display();
if(keyDown(LEFT_ARROW)){
  player.move( - 2,0);
}
if(keyDown(RIGHT_ARROW)){
  player.move(2,0);
}
if(keyDown(UP_ARROW)){
  player.move(0, - 2);
}
if(keyDown(DOWN_ARROW)){
  player.move(0,2);
}


}
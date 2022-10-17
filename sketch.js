var button;

function setup() {
  createCanvas(100, 100);
  background(0);
  button.position(19, 19);
  button.mousePressed(changeBG);
}

function changeBG() {
  var val = random(255);
  background(val);
}
let bg;
let y = 0;
function setup() {
  
  bg = loadImage('Clouds-1.png');
  createCanvas(600, 400);
}

function draw() {
  background(bg);
    

  stroke(226, 204, 0);
  line(600, y, width, 400);

  y++;
  if (y > height) {
    y = 400;
}
  
}
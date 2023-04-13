
var x = 0, y =0;
var stepSize = 50;
var letters = "Angela Andal";
var angleDistortion = 0.0;
var counter = 10;
let rate = 10;


function setup() {
	myFont = loadFont('FiraCode-Bold.ttf');

  createCanvas(windowWidth, windowHeight);
  background(1);
  smooth();
	
		 
  x = random(width);
  y = random(height);

  textAlign(LEFT);
}

function mouseClicked() {

  if (rate === 0) {
    rate = 255;
  } else {
    rate = 0;
  }
}

function draw() {

  // background(0,90);

	
  if (mouseIsPressed) {
		
    var d = dist(x,y, mouseX,mouseY);
    textFont('MyFont');
    textSize(80),
		// stroke(255);
		// strokeWeight(1);
		noStroke();
		fill(255);
    var newLetter = letters.charAt(counter);
    stepSize = textWidth(newLetter);

    if (d > stepSize) {
      var angle = atan2(mouseY-y, mouseX-x); 

      push();
      translate(x, y);
      rotate(angle + random(angleDistortion));
      text(newLetter, 0, 0);
      pop();

      counter++;
     if (counter > letters.length) counter = 0;

      x = x + cos(angle) * stepSize;
      y = y + sin(angle) * stepSize; 
			
			rate += .5;
    }
  }
}

function keyTyped() {
  if (key == 's' || key == 'S') save("INARI.png");
}

function keyPressed() {
  if (keyCode == DELETE || keyCode == BACKSPACE) background(255);
  if (keyCode == UP_ARROW) angleDistortion += 0.1;
  if (keyCode == DOWN_ARROW) angleDistortion -= 0.1; 
}
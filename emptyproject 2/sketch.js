// draw the base grid

function setup() {
  createCanvas(800,800);
}


function draw() {
  drawGrid();
 
}

function drawGrid() {
	background(255);
	for (var x = 0; x < width; x += width / 10) {
		for (var y = 0; y < height; y += height / 10) {
			stroke(255);
			strokeWeight(1);
			line(x, 0, x, height);
			line(0, y, width, y);
		}
	}
}
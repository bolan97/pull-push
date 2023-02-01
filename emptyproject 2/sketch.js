// draw the base grid
let cellSize = 40;
let tempDiff = [];

function setup() {
  createCanvas(900,900);
  smooth();
}


function draw() {
 
  drawGrid();
  drawLines();
 
}

function drawGrid() {
	background(0);
	for (var x = 0; x < width; x += width / 10) {
		for (var y = 0; y < height; y += height / 10) {
			stroke(255);
			strokeWeight(1);
			line(x, 0, x, height);
			line(0, y, width, y);
		}
	}
}

function drawLines() {
	for (let j=0; j<width; j+= cellSize)
	{
	  for (let i=0; i<height; i+= cellSize)
	  {
	let cellNum = (j/cellSize * width/cellSize) + i/cellSize;
	   let lines = tempDiff[cellNum];
		// for each square, draw num lines in a single direction
		let direction = int(random(6));
		if (lines < -10)
		{
		   stroke(8, 60, 41);
		   lines = abs(lines);
		}
		else if (lines == 0)
		{
		  stroke(255, 255, 255);
		  lines = 1;
		}
		else if (lines < 0 &&lines >= -10)
		{
		   stroke(16, 103, 174);
		   lines = abs(lines);
	 }
	 else if (lines <= 10 &&lines > 0)
		{
		   stroke(107, 45, 131);
		  
	 }
	 else if (lines > 10)
		{
		   stroke(80, 28, 34);
		  
	  }
	}
  }
}
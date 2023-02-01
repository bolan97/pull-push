// draw the base grid
let cellSize = 40;
let tempDiff = [];

function setup() {
  createCanvas(900,900);
  smooth();
}


function draw() {
	randomSeed(1024);
	background(0);
	strokeWeight(0.3);
	stroke(0);

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

      switch(direction)
      {
        // left to right
        case 0:
          for (let k=0; k<lines; k++)
          {
            let jitter = random(cellSize);
            ftline(i, j+jitter, i+cellSize, j+jitter);
          }
        break;
        
        // top to bottom
        case 1:
          for (let k=0; k<lines; k++)
          {
            let jitter = random(cellSize);
            ftline(i+jitter, j, i+jitter, j+cellSize);
		
          }
        break;
        
        // top right to bottom left
        case 2:
          for (let k=0; k<lines; k++)
          {
            let jitter = random(cellSize/2);
            if (int(random(2))==1)
              ftline(i+cellSize-jitter, j, i, j+cellSize-jitter);
            else
              ftline(i+cellSize, j+jitter, i+jitter, j+cellSize);
			
          }
        break;
        
        // top left to bottom right
        default:
          for (let k=0; k<lines; k++)
          {
            let jitter = random(cellSize/2);
            if (int(random(2))==1)
              ftline(i+jitter, j, i+cellSize, j+cellSize-jitter);
            else
              ftline(i, j+jitter, i+cellSize-jitter, j+cellSize);
			
          }
		}
	}
  }
}

function ftline(x1,y1,x2,y2 ) {
	noFill();
	beginShape();
	vertex( x1 + random(-3,3), y1 +random(-3,3));
	curveVertex( x1 + random(-3,3), y1 +random(-3,3));
	curveVertex( x1+(x2 -x1)/3 + random(-3,3), y1 + (y2-y1)/3 +random(-3,3));
	curveVertex( x1+2*(x2-x1)/3 + random(-3,3), y1+ 2*(y2-y1)/3 +random(-3,3)); 
	curveVertex( x2 + random(-3,3), y2 +random(-3,3));
	vertex( x2 + random(-3,3), y2 +random(-3,3));
	endShape();  
  }
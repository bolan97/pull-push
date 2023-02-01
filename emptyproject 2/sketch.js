let cellSize = 40;
let tempDiff = [ 10,0,-30,5,20,250,-30,20,-5,0,50,-2,250,
                -100,-200,-10,-5,0,0,0,0,0,250, -10,-40,0,0,40,20,10,39,250,
                 90,70,10,0,-10,-5,-30,10,8,250, 20, 50, 90, 0,0,-5, -20,-50,0,250,
                10,5,15,-10,-100,1,0,50,0,250,0,50,0,0,0,20,40,-20,-30,250,
			          100,0,0,10,5,-20,-5,-3,0,250,-20,30,0,20,10,80,-80,250,
			        	10,5,-10,1,100,5,40,-3,250,29,30,-35,-80,3,0,7,20,250,
                10,-10,5,0,0,0,100,60,-30,250];

function setup() {
  createCanvas(800,800);
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
	stroke(0);
      for (let i=0; i<width; i+=cellSize)
    {
      
		ftline(i, 0, i, height);
    }
    for (let j=0; j<height; j+=cellSize)
    {
      ftline(0, j, width, j);
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
		let direction = int(random(7));
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
	 else if (lines >= 10 && lines < 100)
		{
		   stroke(80, 28, 34);
		  
	  }
	  else if (lines > 100)
		{
		   stroke(255, 255, 255);
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
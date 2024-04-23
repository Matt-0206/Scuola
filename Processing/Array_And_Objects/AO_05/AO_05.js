let rectXY = []; //comincia con una lista vuota

function setup() {

    createCanvas(400,400);
  
}


function draw() {

  background(50);
  noStroke();
  rectMode(CENTER);
  fill(255);
  
  for( let i = 0; i < rectXY.length; i++ ){
  
    rect( rectXY[i][0], rectXY[i][1], 50, 24 );
      
    rectXY[i][1] += 1;
    
  }
  
}


function mousePressed(){

  rectXY.push([mouseX, mouseY]); //posizione X e Y del mouse
  
  print(rectXY);
  
}

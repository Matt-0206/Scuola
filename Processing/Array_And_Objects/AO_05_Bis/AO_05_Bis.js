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
  
    fill(rectXY[i][2]); // colora i rettangoli con il valore casuale
    
    rect( rectXY[i][0], rectXY[i][1], 50, 24 );
      
    rectXY[i][1] += rectXY[i][3];
    
  }
  
}


function mousePressed(){

  rectXY.push([mouseX, mouseY, random(255), random(10)]); //posizione X e Y del mouse, numero casuale da 0 a 255
  
  print(rectXY);
  
}

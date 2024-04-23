let rectX = []; //comincia con una lista vuota
let rectY = []; //comincia con una lista vuota

// console.log(rectY.length);

function setup() {

    createCanvas(400,400);
  
}


function draw() {

  background(50);
  noStroke();
  rectMode(CENTER);
  fill(255);
  
  for( let i = 0; i < rectY.length; i++ ){
  
    rect( rectX[i], rectY[i], 50, 24 );
      
    rectY[i] += 1;
    
  }
  
}


function mousePressed(){

  rectX.push(mouseX); //posizione X del mouse
  rectY.push(mouseY); //posizione Y del mouse
  
}

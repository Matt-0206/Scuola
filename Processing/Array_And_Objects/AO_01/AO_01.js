let hasClicked = false;
let xpos = 0;
let ypos = 0;

function setup() {

    createCanvas(400,400);
  
}


function draw() {

  background(50);
  noStroke();
  rectMode(CENTER);
  fill(255);
  
  if(hasClicked){
   
    rect(xpos,ypos,50,25);
    
     ypos += 1;
    
  }
  
  
}

function mousePressed(){
  
   hasClicked = true;
   xpos = mouseX;
   ypos = mouseY;
  
}

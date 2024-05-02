let rectObjs = []; //comincia con una lista vuota

function setup() {

    createCanvas(400,400);
  
}


function draw() {

  background(50);
  noStroke();
  rectMode(CENTER);
  fill(255);
  
  for( let i = 0; i < rectObjs.length; i++ ){
  
    fill(rectObjs[i].fillColor);
    
    rect( rectObjs[i].xpos, rectObjs[i].ypos, 50, 24 );
      
    rectObjs[i].ypos+= rectObjs[i].up_down; 
    
    rectObjs[i].xpos += rectObjs[i].left_right;

    // se "ypos" e "xpos" sono maggiori dell'altezza o della larghezza oppure se "ypos" e "xpos" sono minori di 0 (confini del canvas)
    // moltiplica "up_down" o "left_right" per -1 (oppposto della direzione originale)

    if( rectObjs[i].ypos > height || rectObjs[i].ypos < 0 ){ 
      
      rectObjs[i].up_down *= -1;  
      
    }else if( rectObjs[i].xpos > width || rectObjs[i].xpos < 0 ){
      
      rectObjs[i].left_right *= -1;
      
    }

  }
  
}


function mousePressed(){

//  rectObjs.push({ xpos: mouseX, ypos: mouseY, fillColor: random(255), speed: random(10)});
  
  rectObjs.push({ xpos: mouseX, ypos: mouseY, fillColor: random(255), up_down: random(-8, 8), left_right: random(-8, 8)});

  console.log(rectObjs);
  
}

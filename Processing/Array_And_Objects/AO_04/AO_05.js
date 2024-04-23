let rectY = [ 0, 15, 30 ];

console.log(rectY.length);

function setup() {

    createCanvas(400,400);
  
}


function draw() {

  background(50);
  noStroke();
  rectMode(CENTER);
  fill(255);
  
  for( let i = 0; i < rectY.length; i++ ){
  
    rect( 200, rectY[i], 50, 24 );
      
    rectY[i] += 1;
    
  }
  
}


function mousePressed(){

  //rectY.push(0);
  
  rectY.push(200);
 
  print(rectY);
  
}

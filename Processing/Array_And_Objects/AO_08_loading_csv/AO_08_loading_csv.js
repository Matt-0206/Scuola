let season; // dichiarazione array
let dimension = 5; //dimensione cerchi

function preload(){
 
  season = loadTable( 'UTA_2021.csv', 'csv', 'header' );
  
}

function setup() {

  createCanvas(400, 400);
  noLoop();
  noStroke();
  
  
}


function draw() {

  background(40);
  
  for( let i  = 1; i < season.getRowCount(); i++ ){
    
    fill(255);
    
    ellipse(i * 5, 100 + season.getNum(i, 'Tm'), dimension, dimension);
    
    fill(0);
    
    ellipse(i * 5, 100 + season.getNum(i, 'Opp'), dimension, dimension);
    
    fill(0,255,0);
    
    ellipse(i * 5, 100 + season.getNum(i, 'W'), dimension, dimension);
    
    fill(255,0,0);
    
    ellipse(i * 5, 100 + season.getNum(i, 'L'), dimension, dimension);
    
  }
  
}

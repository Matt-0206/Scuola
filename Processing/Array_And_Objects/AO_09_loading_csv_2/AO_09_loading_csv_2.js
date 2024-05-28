let season; // dichiarazione array
let dimension = 7; //dimensione cerchi

function preload(){
 
  passengers = loadTable( 'titanic_dataset.csv', 'csv', 'header' );
  
}

function setup() {

  createCanvas(windowWidth, windowHeight);
  noLoop();
  noStroke();
  
  
}


function draw() {

  background(40);
  
  for( let i  = 1; i < passengers.getRowCount(); i++ ){
    
    //morti e vivi
    
    if(passengers.getNum(i, 'Survived') === 1){
      
      ellipse(i * 10, 100 + passengers.getNum(i, 'Survived'), dimension, dimension);
      
      fill(0,255,0);
    
    }else{
      
      ellipse(i * 10, 100 + passengers.getNum(i, 'Survived'), dimension, dimension);
      
      fill(255,0,0);
    
    }
    
    //---------
    
    if(passengers.getNum(i, 'Pclass') === 1){
      
      ellipse(i * 10, 80 + passengers.getNum(i, 'Pclass'), dimension, dimension);
        
      fill(239,212,40);
      
    }else if(passengers.getNum(i, 'Pclass') === 2){
      
      ellipse(i * 10, 80 + passengers.getNum(i, 'Pclass'), dimension, dimension);
        
      fill(18,198,253);
      
    }else{
        
        
      ellipse(i * 10, 80 + passengers.getNum(i, 'Pclass'), dimension, dimension);
        
      fill(253,128,18);  
        
    }
      
  }

}

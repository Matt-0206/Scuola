let walker;

let walker2;

function setup() {

  createCanvas(640, 240);
  
  walker = new Walker();
  
  walker2 = new Walker();
  
  walker3 = new WalkerSuperior();
  
  background(230);
  
}


function draw(){

   walker.show();
   walker.step();
  
   walker2.show();
   walker2.step();
   
   walker3.show();
   walker3.step();
}

// 1 creazione della classe

class Walker{
  
   constructor(){
     
     this.x = width / 2;
     this.y = height / 2;
     
   }
  
  show(){
  
    stroke(0);
    point(this.x, this.y);
      
  }
  
  step() {
   
    const choice = floor( random (4) );
    
    if(choice === 0){
    
      this.x++;
      
    }else if(choice === 1){
    
      this.x--;
      
    }else if(choice === 2){
    
      this.y++;
      
    }else{
      
      
      this.y--;
      
    }
    
  }
}

class WalkerSuperior{
  
   constructor(){
     
     this.x = width / 2;
     this.y = height / 2;
     
   }
  
  show(){
  
    stroke(255,0,0);
    point(this.x, this.y);
      
  }
  
  step() {
   
    const choice = floor( random (4) );
    
    if(choice === 0){
    
      this.x += 2;
      
    }else if(choice === 1){
    
      this.x -= 2;
      
    }else if(choice === 2){
    
      this.y += 2;
      
    }else{
      
      
      this.y -= 2;
      
    }
    
  }
}

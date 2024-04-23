function setup() {

    createCanvas(400,400);
  
    let kitties = [
    
      {age: 14, weight: 12.2},
      {age: 3, weight: 8.9},
      {age: 8, weight: 11.0}
    
    ];
 
   console.log(kitties[2].weight); 
  
    let pesoTot = 0;
    
    for(let i = 0; i < kitties.length; i++){
     
      pesoTot += kitties[i].weight;
      
    }
    
    console.log(pesoTot);
  
}


function draw() {
  
}

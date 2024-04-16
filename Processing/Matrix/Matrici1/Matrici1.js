function setup() {

   createCanvas(400,400);
  
}


function draw() {

   background(204);
   
   push(); // Isolo la matrice del primo rettangolo (push / pop)
   translate(33,0);
   rect(0,20,66,30);
   pop();
   
   
   rect(0,50,66,30);
  
}

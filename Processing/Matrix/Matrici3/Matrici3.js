let matrix = [ //creiamo una matrice

   [1,2,3],
   [4,5,6],
   [7,8,9]
  
];


function setup() {

   createCanvas(400,400);
   textSize(20);
  
}

function draw(){ 
  
  background(220);
  
  translate(140,100);
 
  // creiamo un ciclo annidato per rappresentare graficamente sul canvas la nostra matrice
 
  for(let i=0; i<matrix.length;i++){ // "i" rappresenta le righe della matrice
 
   for(let j=0; j<matrix[i].length;j++){ // "j" rappresenta le colonne della matrice
   
     text(matrix[i][j], j*50, i*50); // rappresentiamo graficamente sotto forma di testo la matrice utilizzando i valori "i" e "j"
     
   }
   
 }
  
}

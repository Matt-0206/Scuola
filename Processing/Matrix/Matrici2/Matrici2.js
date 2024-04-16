let matrix = [ //creiamo una matrice

   [1,2,3],
   [4,5,6],
   [7,8,9]
  
];


function setup() {

   printMatrix(matrix); //richiamiamo la funzione sul valore "matrix"
  
}

function printMatrix(){ //creiamo una funzione per stampare la matrice nella console
  
   for(let i=0; i<matrix.length; i++){
     
     console.log(matrix[i].join("\t"));
     
   }
  
}

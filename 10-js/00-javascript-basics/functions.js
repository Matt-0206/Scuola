// funzione senza argomenti
function foo(){


alert("La funzione si è attivata");



}

//chiamata della funzione 



foo();




// funzione con argomenti

var test = [1, 2, 3, 4, 5];

// console.log(test.length);

function alertArraySize(arr){


	alert(arr.length);


}

alertArraySize(test);



// funzione che ritorna un valore 

function addNumbers(a, b){

	return a + b;


}


alert(addNumbers(7, 13));
var lista=["Lenarduzzi","Curir","Zufferli","Donatini","Rossi","Josan","Carluccio"]

function longestWord(strings){

	var longest = strings[0];

	// prendoi il primo elemento dell'array, ci servirà per compararlo con tutti gli altri


		for(let i = 1;i < strings.length; i++){

			/*
				Se la lunghezza di un elemento dell'array è maggiore rispetto a longest gli dirò di aggiornare
				l'elemento di "longest" con la parola che ho trovato
			*/

			if(strings[i].length > longest.length){

				longest = strings[i];

			}

		}


alert(longest);

}

longestWord(lista);
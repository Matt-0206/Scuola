// function greatestOfTwo(first, second){

// 	if(first > second){

// 		return first;

// 	}else{

// 		return second;

// 	}

// }


// alert( greatestOfTwo(45,33)  );


function greatestOfTwo(first, second){

		const myResult = document.getElementById("output");

	if(first > second){

		myResult.textContent = first;

	}else{

		myResult.textContent = second;

	}

}
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const STAR_COUNT = 400
let result = ""
for(let i = 0; i < STAR_COUNT; i++){
    result += `${randomNumber(-50, 50)}vw ${randomNumber(-50, 50)}vh ${randomNumber(0, 1)}px ${randomNumber(0, 1)}px #fff,`
}


//------------------------------------------------------------

async function populate(){

    const requestURL = "https://matt-0206.github.io/my-repository/astros.json"; // gli viene assegnato un link 

    const request = new Request(requestURL) // crea un nuovo oggetto

    const response = await fetch(request); // 
    
    const spacePeople = await response.json(); //

    populateTable(spacePeople);

}


function populateTable(obj){

    //const para1 = document.getElementById('1');
    //para1.textContent = obj.name;

    const people = obj.people;

    const myList = document.createElement('ul');

}

populate();
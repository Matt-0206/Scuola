// https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json

async function populate(){

    const requestURL = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"; // gli viene assegnato un link 

    const request = new Request(requestURL) // crea un nuovo oggetto

    const response = await fetch(request); // 
    
    const superHeroes = await response.json(); //

    populateHeader(superHeroes);

}

// funzione per popolare l'header della pagina html

function populateHeader(obj){

    const header = document.querySelector('header');

    const myH1 = document.createElement('h1');

    myH1.textContent = obj.squadName;

    header.appendChild(myH1);

    // creazione di un paragrafo

    const myPara = document.createElement('p');

    myPara.textContent = `Hometown: ${obj.homeTown} // Formed: ${obj.formed}`

    header.appendChild(myPara);

    const myPara2 = document.createElement('p');

    myPara2.textContent = `secretBase: ${obj.secretBase}`

    header.appendChild(myPara2);

}

//chiamata della funzione principale

populate();
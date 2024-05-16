// https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json

async function populate(){

    const requestURL = "https://matt-0206.github.io/my-repository/superheroes.json"; // gli viene assegnato un link 

    const request = new Request(requestURL) // crea un nuovo oggetto

    const response = await fetch(request); // 
    
    const superHeroes = await response.json(); //

    populateHeader(superHeroes);
    populateHeroes(superHeroes);
    populateFooter(superHeroes);

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

function populateHeroes(obj){

    const section = document.querySelector('section');

    const heroes = obj.members;

    for(const hero of heroes){

        // creiamo elementi html

        const myArticle = document.createElement('article');

        const myH2 = document.createElement('h2');

        const myPara1 = document.createElement('p');

        const myPara2 = document.createElement('p');

        const myPara3 = document.createElement('p');

        const myList = document.createElement('ul');

        // popolo gli elementi 

        myH2.textContent = hero.name;

        myPara1.textContent = `Secret Identity: ${hero.secretIdentity}`;

        myPara2.textContent = `Age: ${hero.age}`;

        myPara3.textContent = 'Powers: ';

        const superPowers = hero.powers;        

        for(const power of superPowers){

            const listItem = document.createElement('li');

            listItem.textContent = power;

            myList.appendChild(listItem);

        }

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);

        section.appendChild(myArticle);

    }



}

function populateFooter(obj){

    const footer = document.createElement('footer');

    for(const element of obj){

        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');

        p1.textContent = `Nome del progetto: ${element.name}`;
        p2.textContent = `Fatto da: ${element.by}`;
        p3.textContent = `Ultimo aggiornamento: ${element.update}`;
        
        footer.appendChild(p1);
        footer.appendChild(p2);
        footer.appendChild(p3);
    }

}

function populateFooter(obj){

    const footer = document.querySelector('footer');
    const myFooter = document.createElement('p');
    myFooter.textContent = `Squad Name: ${obj.name}  Made By: ${obj.by} Last Update: ${obj.update}`;
    footer.appendChild(myFooter);

}

//chiamata della funzione principale

populate();
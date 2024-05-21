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

    populatePeople(spacePeople);


}
    //const para1 = document.getElementById('1');
    //para1.textContent = obj.name;

function populatePeople(obj){

    const myH2 = document.querySelector('h2');
       
    myH2.textContent = `There are ${obj.number} people in space right now.`;
       
    const members = obj.people;
    
    for (const member of members) {
    
        const myUl = document.getElementById('myUl1'); 
        const myLi = document.createElement('li');  
        myLi.textContent = member.name;
        myUl.appendChild(myLi);
    
    }

    for (const member of members) {
    
        const myUl2 = document.getElementById('myUl2'); 
        const myLi2 = document.createElement('li');  
        myLi2.textContent = member.craft;
        myUl2.appendChild(myLi2);
    
    }
       
}  

populate();
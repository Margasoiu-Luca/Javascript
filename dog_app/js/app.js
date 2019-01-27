/**
 * Endpoint-uri Dog API:
 * imagine random: https://dog.ceo/api/breeds/image/random
 * toate rasele: https://dog.ceo/api/breeds/list
 * imagine random dintr-o rasa anume: https://dog.ceo/api/breed/{hound}/images/random
 */

// ------------------------------------------
//  Referinte la Elementele HTML pe care le vom folosi in cod
// ------------------------------------------

const select = document.getElementById('breeds');
const card = document.querySelector('.card'); 
const form = document.querySelector('form');
var img=document.createElement('img')


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------

// PAS 1: exploreaza in consola un response HTTP de la server:
//   - functionalitatea de baza a metodei fetch(), 
//   - cum gestionam un Response cu metoda .then(),
//   - parsarea unui string JSON cu metoda Response.json()   

card.appendChild(img)
// PAS 2: obtine o imagine random (https://dog.ceo/api/breeds/image/random) 
// Apeleaza functia generateImage(), care afiseaza raspunsul in <div>  

function generateImage(){

    var newElement=fetch(`https://dog.ceo/api/breeds/image/random`)

    .then( (value) => value.json())
    .then( (res) => img.src=res.message )
}
generateImage()

var textCaine = document.createElement('div')
textCaine.innerText='Apasati aici pentru a vedea poze cu Affenpinscher'
card.appendChild(textCaine)
    
// PAS 3: obtine o lista de rase de caini (https://dog.ceo/api/breeds/list)
// Apeleaza functia generateOptions(), care afiseaza raspunsul in <select> 

function myfunc(variable){
    for(i=0;i < variable.message.length; i++){
        var x = document.createElement('option');
        x.value=variable.message[i]
        x.innerText=variable.message[i]
        select.appendChild(x)
        console.log(variable.message[i])
    }
}

var newVar=fetch('https://dog.ceo/api/breeds/list')
    .then( (value) => value.json() )
    .then( (res) => myfunc(res) )
    

// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------

// PAS 4: la schimbarea optiunii din <select> afiseaza o imagine din rasa selectata

select.addEventListener('change',function(){
    const breed = this.value;  
    const url = 'https://dog.ceo/api/breed/' + breed + '/images/random';  
    fetch(url)  
      .then(response => response.json())
      .then(data => img.src=data.message)
    textCaine.innerText='Apasati aici pentru a vedea poze cu '+capitalizeFirstLetter(breed)
})

// PAS 5: la click in interiorul <div>-ului afiseaza alta imagine din rasa selectata

card.addEventListener('click', function(){
    const breed = select.value;
    const url = 'https://dog.ceo/api/breed/' + breed + '/images/random';
    fetch(url)  
      .then(response => response.json())
      .then(data => img.src=data.message);
    textCaine.innerText='Apasati aici pentru a vedea poze cu '+capitalizeFirstLetter(breed)
})

// PAS 6: Creati o functie fetchData(url) care sa automatizeze primii doi pasi dintr-un request 
// (trimiterea request-ului si parsarea raspunsului JSON)


// PAS 7 - atasati cu metoda .catch() un handler care sa afiseze in consola un mesaj custom de eroare 
// si eroarea primita de la server. Ca sa va asigurati ca functioneaza, schimbati url-ul catre care
// trimiteti request-ul cu unul gresit.


// PAS 8 - integrati primele doua comenzi .fetch() intr-o singura comanda Promise.all()



// ------------------------------------------
//  POST DATA
// ------------------------------------------


// PAS 9 - Transmiteti datele completate in formular printr-un request POST, catre https://jsonplaceholder.typicode.com/posts 
// Printati in consola raspunsul primit de la server, impreuna cu un mesaj custom.  

const buton=document.getElementById("submit")
const nume=document.getElementById("name")
const comentariu = document.getElementById("comment")

buton.addEventListener("click",(ev)=>{
    ev.preventDefault()

    const obj = {
        nume:nume.value,
        comentariu:comentariu.value
    }
    fetch("https://jsonplaceholder.typicode.com/posts",{
    method:"POST",
    headers:{
        "Content-Type": "aplication/json"
    },
    body:JSON.stringify(obj)})
    .then(res=>res.json())
    .then(data=>console.log(data))
})

// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------

// generateImage(src, alt)
// Functie custom, care afiseaza o imagine in interiorul <div>-ului  


// generateOptions(data)
// Functie custom, care completeaza optiunile din <select>




//variabilele globale

var select = document.querySelector(".custom-select")

var butonPisica = document.querySelector(".btn-primary")

const login = {
    headers: {
        ["x-api-key"]: "ab525340-fb43-4eab-b726-2fa11820d918"
    }
}

//generarea raselor
function generateBreeds(temp) {
    for (var i = 0; i < temp.length; i++) {
        var newOption = document.createElement('option');
        newOption.value = temp[i].name;
        newOption.innerText = temp[i].name;
        newOption.id = temp[i].id
        select.appendChild(newOption);
    }
}
//afisarea lor
fetch('https://api.thecatapi.com/v1/breeds')
    .then(res => res.json())
    .then(data => generateBreeds(data))


//functia care genereaza poza cu pisica
function generateCat() {
    currentId = select.childNodes[select.selectedIndex + 1].id
    fetch("https://api.thecatapi.com/v1/images/search?breed_ids=" + currentId, login)
        .then(res => res.json())
        .then(data => {
            //se repeta codul daca imaginea creata este identica 
            if (document.querySelector("img:nth-child(1)").src === data[0].url) {
                generateCat()
            }
            document.querySelector("img:nth-child(1)").src = data[0].url
        })

}



//schimbarea imaginii care se face atunci cand se apasa pe buton
butonPisica.addEventListener('click', (ev) => {
    ev.preventDefault()
    generateCat()

})


//schimbarea imaginii care se face atunci cand se va schimba rasa de pisici
select.addEventListener('change', (ev) => {
    ev.preventDefault()
    generateCat()

})


var y = Array.from(document.querySelectorAll('.btn-secondary'))
y.forEach(el => el.addEventListener('click', checkBtnSecondary))

function checkBtnSecondary(ev){
    console.dir(ev.target)
    ev.target.classList.add('clicked-once')
}

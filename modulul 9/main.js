//variabilele globale

var select = document.querySelector(".custom-select")

var butonPisica = document.querySelector(".btn-primary")

const login = {
    headers: {
        ["x-api-key"]: "ab525340-fb43-4eab-b726-2fa11820d918"
    }
}

var inputBox = document.querySelector('.form-control')

var total_breeds

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
    .then(data => {
        generateBreeds(data)
        total_breeds = data
    })


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
            document.querySelector("img:nth-child(1)").title = data[0].breeds[0].name
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


//introducerea imaginilor dupa categorie cand se schimba aceasta
document.getElementById('secondary_search').addEventListener('click', (ev) => {
    var x = document.querySelectorAll('.poza_secundara')
    x.forEach(el => {
        fetch('https://api.thecatapi.com/v1/images/search?category_ids=' + document.querySelector('.active').firstElementChild.id, login)
            .then(res => res.json())
            .then(data => {el.src = data[0].url
                            el.title=""})
    })
})

//event listener pentru clear
document.getElementsByClassName('btn-secondary')[8].addEventListener('click', () => {
    var x = document.querySelectorAll('.poza_secundara')
    x.forEach(el => {el.src = "http://vignette1.wikia.nocookie.net/dynastywarriors/images/6/60/Link_-_HW.png/revision/latest?cb=20140526003852"
                    el.title="Placeholder"})
})


//aici se face selectia la intamplare a imaginilor care vor aparea
function searchCatFunction(x,arrLength){
    for (let i = 0; i < 4; i++) {
        //pisica care se alege la intamplare 
        var rand_cat = Math.floor(Math.random() * arrLength)
        //poza care se alege din cele 6 generate
        var rand2_index= Math.floor(Math.random() * 6)
        var reference=document.getElementById(`img${i+1}`)
        reference.src=x[rand_cat][rand2_index].url
        reference.title=x[rand_cat][rand2_index].breeds[0].name
        // console.dir(x[rand_cat][rand2_index])
    }}


//netflix-like search event listener pe input
inputBox.addEventListener('keyup', (ev) => {
    if (ev.target.value.length >= 2) {
        //aceasta linie de cod va filtra arrayul de pisici pentru a crea un nou array cu rasele de pisisci care contin numele
        var filteredBreeds = total_breeds.filter(item => item.name.toLowerCase().indexOf(inputBox.value.toLowerCase()) !== -1)
        //dupa acea se va face un map care va schimba arrayul de pisici intr-un aray de promise
        var promiseList = filteredBreeds.map(item => fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${item.id}&limit=6`, login).then(res => res.json()))

        Promise.all(promiseList)
            .then(data => searchCatFunction(data,promiseList.length))

    }

})
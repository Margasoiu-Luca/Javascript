var select= document.querySelector(".custom-select")

var butonPisica=document.querySelector(".btn-primary")


function generateBreeds(temp){
    for(var i=0;i<temp.length;i++){
        var newOption=document.createElement('option');
        newOption.value=temp[i].name;
        newOption.innerText=temp[i].name;
        newOption.id=temp[i].id
        select.appendChild(newOption);
    }
}

function generateCat(){
    currentid=select.childNodes[select.selectedIndex+1].id
    fetch(`https://api.thecatapi.com/v1/images/search?breed_id=${currentid}`)
        .then( res => res.json() )
        .then(data => console.dir(data) )

}




fetch('https://api.thecatapi.com/v1/breeds')
    .then( res => res.json() )
    .then( data =>generateBreeds(data) )

butonPisica.addEventListener('click',generateCat)
var select= document.querySelector(".custom-select")

function generateBreeds(temp){
    for(var i=0;i<temp.length;i++){
        var newOption=document.createElement('option');
        newOption.value=temp[i].name;
        newOption.innerText=temp[i].name;
        select.appendChild(newOption);
    }
}

fetch('https://api.thecatapi.com/v1/breeds')
    .then( res => res.json() )
    .then( data =>generateBreeds(data))
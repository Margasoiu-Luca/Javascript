const images = [
    { "src": "img1.jpg", "alt": "1 Nature" },
    { "src": "img2.jpg", "alt": "2 Fjords" }, 
    { "src": "img3.jpg", "alt": "3 Mountains" },
    { "src": "img4.jpg", "alt": "4 Lights" }
];

var index = 0

var buton_inainte=document.getElementById("inainte")

var buton_inapoi=document.getElementById("inapoi")

//buton_inapoi.hidden=true

function showImage(){
    var x=document.querySelector('img')
    x.src='img/' + images[index].src;
    x.alt=images[index].alt; 
}
window.onload=showImage()


for(let i=0;i<4;i++){
    console.log(images[i].alt+images[i].src)
}

buton_inainte.addEventListener('click',function(){
    if(index===3)
    //buton_inainte.hidden=true
        index=0;
    else{
        //buton_inapoi.hidden=false
        index++
    }
    var activTemp1=document.getElementsByClassName('activ')
    activTemp1[0].classList.remove('activ')
    var activtemp2=document.querySelector('div:nth-child(2)')
    activtemp2.children[index].classList.add('activ')
    showImage()
})


buton_inapoi.addEventListener('click',function(){
    if(index===0)
    //buton_inapoi.hidden=true
       index=3;
    else{
        //buton_inainte.hidden=false
        index--
    }
    var activTemp1=document.getElementsByClassName('activ')
    activTemp1[0].classList.remove('activ')
    var activtemp2=document.querySelector('div:nth-child(2)')
    activtemp2.children[index].classList.add('activ')
    showImage()
})


function meniubilute(){
    var temp= document.getElementById('meniu')
    
    for(var i=0;i<images.length;i++) {
        var y = document.createElement("span");
        y.classList.add('biluta')
        y.id=`biluta${i}`
        if (i === index){
            y.classList.add('activ');
        }
        y.addEventListener('click',function(){
            var activTemp1=document.getElementsByClassName('activ')
            activTemp1[0].classList.remove('activ');
            // obtine nr bilutei active, uitandu-se la string-ul din id
            var number= Number(this.id.replace( /^\D+/g, ''))
            var activtemp2=document.querySelector('div:nth-child(2)')
            activtemp2.children[number].classList.add('activ')
            index=number
            showImage()
        })
        temp.appendChild(y); 
    }
}



/*function makeBiluta(index){
    return function(){
        showImage(index);
        meniuBilute(index);
    }
} */

meniubilute()
var id_buton = 0

var lista_initiala=document.querySelector('ul')

var lista_finala=document.querySelector('ul:nth-child(2)')

var Add=document.querySelector('button')

var input_box=document.querySelector('input')





// functia care introduce elementele in prima lista
var myfunc = function(ev){
    alert(ev.target.key)
    var temp_li=document.createElement('li')
    // id-ul este generat dinamic si va contribui la remove
    temp_li.id=id_buton
    id_buton++
    temp_li.className='my-2' 

    

    //se creaza un span cu continutul din input_box, care dupa este adaugat la li
    var temp_span=document.createElement('span')
    temp_span.innerText=input_box.value
    input_box.value=''
    temp_li.appendChild(temp_span)



    //se creaza cele 3 butoane, care sunt adaugate ulterior la 
    var temp_buton1 = document.createElement('button');
    temp_buton1.className='buton_lista mx-2'
    temp_buton1.innerText='Edit';
    temp_li.appendChild(temp_buton1)
    temp_buton1.addEventListener('click',function(){
        
    })


    finalize_function= function(ev){
        var x = ev.target.parentElement
        lista_finala.appendChild(x)
        x.removeChild(x.lastElementChild)
        x.removeChild(x.lastElementChild)
        x.removeChild(x.lastElementChild)
        x.classList.add('Final')
    }

    var temp_buton2=document.createElement('button')
    temp_buton2.className='buton_lista mx-2'
    temp_buton2.innerText='Finalize'
    temp_li.appendChild(temp_buton2)
    temp_buton2.addEventListener('click',finalize_function)


    
    var temp_buton3=document.createElement('button')
    temp_buton3.classList.add('buton_lista')
    temp_buton3.classList.add('mx-2')
    temp_buton3.classList.add('remove_buton')
    temp_buton3.innerText='Remove'
    temp_li.appendChild(temp_buton3)
    temp_buton3.addEventListener('click',function(){
        var list=Array.from(document.getElementsByClassName('remove_buton'))
        // alert(list.length)
            var index
            index = list.findIndex(x=>
                x.parentElement.id===this.parentElement.id)
            list[index].parentElement.parentElement.removeChild(list[index].parentElement)

    })  


    lista_initiala.appendChild(temp_li)
}
//se creaza event-handler pentru butonul Add
Add.addEventListener('click',myfunc)

//input_box.addEventListener('keyup',myfunc)

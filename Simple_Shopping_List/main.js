
var id_button= 3;
			
var list= document.querySelector('ul')

  var obj = document.querySelector('input:nth-child(2)')

var inputbox = document.querySelector('input:nth-child(1)')

var itemArray=Array.from(document.getElementsByClassName('itemButton'))


obj.addEventListener('click', function(){
  
    var x=document.createElement('li')
    x.id=`${id_button}`
    id_button++

    var sp1=document.createElement('span')
    sp1.innerText=inputbox.value
    inputbox.value=''

    sp1.classList.add('my-3') 
    sp1.classList.add('mx-2')

    var sp2=document.createElement('span')
    sp2.classList.add('mx-2')

    var button=document.createElement('input')

    button.type='submit'
    button.value='Delete'
    button.className='itemButton'
    
    sp2.appendChild(button)

    x.appendChild(sp1)

    x.appendChild(sp2)

    x.style.marginBottom="10px"

    list.appendChild(x)

    itemArray=Array.from(document.getElementsByClassName('itemButton'))

    
itemArray.forEach(function(element) {

  element.addEventListener('click',function(){

     var index = itemArray.findIndex(x=>
          //  alert(element.parentElement.parentElement.id)
        x.parentElement.parentElement.id==element.parentElement.parentElement.id
      )

    itemArray[index].parentElement.parentElement.remove()
  })
});
})












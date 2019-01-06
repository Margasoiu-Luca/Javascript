

			
var list= document.querySelector('ul')

var obj = document.querySelector('input:nth-child(2)')

var inputbox = document.querySelector('input:nth-child(1)')

var itemArray=Array.from(document.getElementsByClassName('itemButton'))


obj.addEventListener('click',function(){

    var x=document.createElement('li')

    var sp1=document.createElement('span')
    sp1.innerText=inputbox.value
    inputbox.value=''

    var sp2=document.createElement('span')
    
    var button=document.createElement('input')

    button.type='submit'
    button.value='Delete'
    button.className='itemButton'
    
    sp2.appendChild(button)

    x.appendChild(sp1)

    x.appendChild(sp2)

    
    list.appendChild(x)

    itemArray=Array.from(document.getElementsByClassName('itemButton'))

    
itemArray.forEach(function(element) {

    element.addEventListener('click',function(){
  
       var index = itemArray.findIndex(x=>
  
          x.parentElement.parentElement.firstElementChild.innerText==element.parentElement.parentElement.firstElementChild.innerText)
  
      itemArray[index].parentElement.parentElement.remove()
    })
  });
 
})

itemArray.forEach(function(element) {

  element.addEventListener('click',function(){

     var index = itemArray.findIndex(x=>

        x.parentElement.parentElement.firstElementChild.innerText==element.parentElement.parentElement.firstElementChild.innerText)

    itemArray[index].parentElement.parentElement.remove()
  })
});











Javascript

var list= document.querySelector('ul')

var obj = document.querySelector('input:nth-child(2)')

var inputbox = document.querySelector('input:nth-child(1)')

var itemArray=Array.from(document.getElementsByClassName('itemButton'))


obj.addEventListener('click',function(){

    var x=document.createElement('li')

    var sp1=document.createElement('span')
    sp1.innerText=inputbox.value
    inputbox.value=''

    var sp2=document.createElement('span')
    
    var button=document.createElement('input')

    button.type='submit'
    button.value='Delete'
    button.className='itemButton'
    
    sp2.appendChild(button)

    x.appendChild(sp1)

    x.appendChild(sp2)

    
    list.appendChild(x)

    itemArray=Array.from(document.getElementsByClassName('itemButton'))

    
itemArray.forEach(function(element) {

    element.addEventListener('click',function(){
  
       var index = itemArray.findIndex(x=>
  
          x.parentElement.parentElement.firstElementChild.innerText==element.parentElement.parentElement.firstElementChild.innerText)
  
      itemArray[index].parentElement.parentElement.remove()
    })
  });
 
})

itemArray.forEach(function(element) {

  element.addEventListener('click',function(){

     var index = itemArray.findIndex(x=>

        x.parentElement.parentElement.firstElementChild.innerText==element.parentElement.parentElement.firstElementChild.innerText)

    itemArray[index].parentElement.parentElement.remove()
  })
});










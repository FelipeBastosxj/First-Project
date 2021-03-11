logo = document.querySelector('.pegar')

setTimeout(() =>{
   logo.classList.add('mostrando')

},1)

setInterval(() =>{

   logo.classList.toggle('mostrando')
   logo.classList.toggle('mostrando2')
   
},5000)

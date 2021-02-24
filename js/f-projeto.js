logo = document.querySelector('.pegar')

console.log(logo)
setTimeout(() =>{
   logo.classList.add('mostrando')

},1)

setInterval(() =>{

   logo.classList.toggle('mostrando')
   logo.classList.toggle('mostrando2')
   
},3000)

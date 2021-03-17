/* SLIDER INICIAL*/

logo = document.querySelector('.pegar')

setTimeout(() =>{
   logo.classList.add('mostrando')

},1)

setInterval(() =>{

   logo.classList.toggle('mostrando')
   logo.classList.toggle('mostrando2')
   
},5000)


/* ANIMA CLICK DESCIDA*/

let sessoes = document.querySelectorAll(".p")

function Ascroll(event){
   event.preventDefault()

   href = event.currentTarget.getAttribute('href')

   elemento = document.querySelector(href)

   console.log(elemento)

   
  elemento.scrollIntoView({
     block: 'start', 
     behavior: "smooth"
  })

}

sessoes.forEach(e => {
   e.addEventListener('click', Ascroll)
});

/* SCROLL DECENDO APARECER */

let aparecer = document.querySelectorAll('.s')

function Sscroll(){
   aparecer.forEach(e =>{
     altura = e.getBoundingClientRect().top

      if(altura < 350){
         e.classList.add('ativo')
      }else{
         e.classList.remove('ativo')
      }
   })
 
}



window.addEventListener('scroll', Sscroll)



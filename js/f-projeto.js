logo = document.querySelectorAll('.pegar')
i = 0


setInterval(() =>{
    logo.forEach(e=>{
        e.classList.remove('mostrando')
    })

    i++
    if(i==2){
        i=0
    }
    logo[i].classList.add('mostrando')
    console.log(i)
},5000)


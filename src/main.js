
let boton = document.querySelector('.btn')
boton.addEventListener('click',()=>{
    let num = Math.floor(Math.random() * 200)
    let peticion = fetch(`https://pokeapi.co/api/v2/pokemon/${num}`)
peticion
    .then( respuesta => respuesta.json())
    .then(respuesta => {
        localStorage.setItem('pokeApi', JSON.stringify(respuesta))
        console.log(respuesta);
        document.querySelector('.nombre').innerHTML = respuesta.name
        document.querySelector('.cont__2image').setAttribute('src', respuesta.sprites.front_default)
        document.querySelector('.tipo').innerHTML = respuesta.types[0].type.name
        document.querySelector('.peso').innerHTML =`${parseInt(respuesta.weight) / 10} kg` 
        document.querySelector('.altura').innerHTML =`${parseInt(respuesta.height) / 10} m` 
        document.querySelector('.exp').innerHTML =`${respuesta.base_experience} ` 
    })
   
    }
)

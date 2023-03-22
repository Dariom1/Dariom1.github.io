

const nombre = document.querySelector('#nombre');
const correo = document.querySelector('#correo');
const telefono = document.querySelector('#telefono');
const foto = document.querySelector('#foto');

const generarUsuario = async () => {
    //consultar a la API
    const url = 'https://randomuser.me/api/';
    const respuesta = await fetch(url);
    const { results } = await respuesta.json();
    const datos = results[0];

    foto.src = datos.picture.medium;
    nombre.textContent = datos.name.first;
    correo.textContent = datos.email;
    telefono.textContent = datos.phone;
}


document.addEventListener('DOMContentLoaded', generarUsuario);

//boton arriba-no pude ver el error para que funcione



window.onscroll = function (){
  if(document.documentElement.scrollTop > 50){
    document.querySelector('.go-top-container')
   show.classList.remove('show');
  }else{
    document.querySelector('.go-top-container')
    classList.remove('show')
  }
}

document.querySelector('.go-top-container')
 Element.addEventListener('click', () => {
  window.scrollTo({
  top: 0,
  behavior: 'smooth'
  })
})

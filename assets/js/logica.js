let nombre= prompt("cual es tu nombre?")

while(nombre===null || nombre.trim() === "" ){
    nombre= prompt("cual es tu nombre?")
    }

alert(`hola ${nombre} te damos la bienvenida a repelis.`)


const mostrarBoton= document.getElementById('mostrarFormulario');
const ocultarBoton= document.getElementById('ocultarFormulario');
const Formu= document.getElementById('formu');


mostrarBoton.addEventListener('click', function() {
    Formu.style.display='block'
});
ocultarBoton.addEventListener('click', function() {
    Formu.style.display='none'
});


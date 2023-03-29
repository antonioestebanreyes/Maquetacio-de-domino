





/* var input = document.getElementById('input')
var boton = document.getElementById('boton')
var respuesta = document.getElementById('respuesta')
respuesta.innerHTML = input.value */


var nombre  = document.getElementById('nombre')
var direccion = document.getElementById('direccion')
var tel = document.getElementById('tel')
var boton = document.getElementById('boton')
var t= document.getElementsByTagName("table")
var respuesta = document.getElementById('respuesta')
var respuesta1 = document.getElementById('respuesta1')
var respuesta2 = document.getElementById('respuesta2')
var respuesta3 = document.getElementById('respuesta3')
var respuesta5 = document.getElementById('respuesta5')
boton.addEventListener('click', evaluar)
function evaluar(){
if (!(nombre.value === " " && direccion.value ===" " && tel.value ===" ") ) {
    nombre.classList.add("input")
    direccion.classList.add("input")
    tel.classList.add("input")

    
}   if(!(nombre.value === "" && direccion.value ==="" && tel.value ==="") ){
    var suma= nombre.value
var suma1= direccion.value
var suma2=tel.value
respuesta1.innerHTML="Nombre :"+suma;
respuesta2.innerHTML="Dirrecion :"+suma1;
respuesta3.innerHTML="Numero Telefonico :"+suma2;
 respuesta5.classList.add("imag"   )
}



}

/* if (typeof  tel.value  !== Number) {
    tel.classList.add("input")   
}

 console.log( typeof nombre.value)   

/*  /*
var x=["A", "B"," C"," D", "E"," F"," G", "H"," I", "J", "K"," L"," M"," N", "Ñ", "O", "P"," Q"," R"," S", "T"," U", "V", "W"," X", "Y" , "Z"]

    
    if (x[0]!== nombre.value.toUpperCase()) {
       alert("listo")  
         
    }
 */

  

    




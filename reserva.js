let contenedor = document.getElementById("contenedor");
 let bandera = true
contenedor.addEventListener("click", function(evento){
 
    if(evento.target.classList.contains("w-100"))    {
evento.target.src="img/rojo.png"
    }
    else if (evento.target.classList.contains("w-100")){
        evento.target.src="img/rojo.png"
        bandera= false
    }
})

let boton=document.getElementById("boton")
boton.addEventListener("click",recibirDatos)
function recibirDatos(event){
 event.preventDefault();

 let select=document.getElementById("select").value
 let cantidad=document.getElementById("cantidad").value
 let selector=document.getElementById("selector").value
 let boleta= 5000
 let cantTotal = cantidad * boleta

 if (selector == "Preferencial"){
  boleta= 6500
 } else {
 let boleta = 5500
}

 console.log(select)
 console.log(cantidad)
console.log(selector)
alert("Su valor a pagar es de " + cantTotal)

}
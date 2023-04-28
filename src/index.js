
import validator from './validator.js';


const boton=document.getElementById("boton");
//console.log(boton);
boton.addEventListener('click', mostrar);



function mostrar() {
  const nombre=document.getElementById("nombre").value;
  const number= document.getElementById("cardnumber").value;
  const month= document.getElementById("month").value;
  const  year= document.getElementById("year").value;
  const  cvv= document.getElementById("cvv").value;
  //sin campos vacios.
  if (nombre ==="" || number==="" || month ==="" || year ==="" ||cvv ==="") {
    alert("Por favor completa todos los campos"); return;} // este ultimo return evita que se envie cero por no tener datos y asi no sale true


  //console.log("Nombre: " + nombre);
  //console.log("Numero de tarjeta "+ number);
  //console.log( "Fecha de caducidad " + month + "/" + year);
  //console.log("CVV es: " + cvv);   

  const tnumero= document.getElementById("tnumero");
  tnumero.innerHTML= number;

  const tnombre= document.getElementById("tnombre");
  tnombre.innerHTML= nombre;

  const tcvv= document.getElementById("tcvv");
  tcvv.innerHTML= cvv;

  const tdate= document.getElementById("tdate");
  tdate.innerHTML= month + "/" + year;

  if (validator.isValid(number)) {
    document.getElementById("mresult").innerHTML = "Tu compra fue realizada con exito";
  } else {
    document.getElementById("mresult").innerHTML = "Ups!, tu tarjeta fue rechazada";
  }
  //console.log(result);

  const encript= validator.maskify(number)

  const mencript= document.getElementById("mencript");
  mencript.innerHTML= encript;

  const pop= document.getElementById("popup");

  boton.addEventListener('click',openPopup());

  function openPopup(){
    pop.classList.add("open-popup");
  }
}



// const button=document.getElementById("button");
// button.addEventListener('click', closePopup);
// function closePopup(){
  
//   button.classList.add("open-popup");
// }



//console.log(validator);
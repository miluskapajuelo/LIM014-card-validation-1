import validator from './validator.js';

console.log(validator);

var validacion1;
var letsplay = document.getElementById('validar');
letsplay.addEventListener("click", press1);

function press1(){
  validacion1 = document.getElementById('card').value;
  if(validacion1){
    document.getElementById('validar').innerHTML= validacion1
    
    document.getElementById("inicio").classList.add("hide");
    document.getElementById("inicio").classList.remove("display");

    document.getElementById("incorrecto").classList.add("display");
    document.getElementById("incorrecto").classList.remove("hide");
  }
else{
  alert("Debe colocar el dni para iniciar")
}
}


var retorna;
var letsplay2 = document.getElementById('entendido1');
letsplay2.addEventListener("click", press2);

function press2(){
       
    document.getElementById("incorrecto").classList.add("hide");
    document.getElementById("incorrecto").classList.remove("display");

    document.getElementById("inicio").classList.add("display");
    document.getElementById("inicio").classList.remove("hide");
}

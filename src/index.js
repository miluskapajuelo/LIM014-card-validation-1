import validator from './validator.js';

let letsplay = document.getElementById('validar');


letsplay.addEventListener("click", ()=>{
let validacion1 = document.getElementById('card').value;
let dni = document.getElementById("dni").value
let valido = validator.isValid(validacion1)
  
   if(dni){ 
    if(validacion1.length<16 || dni.length<8){
      /* document.getElementById('mensaje1').innerHTML= "El campo debe contener 16 dígitos " */
      return false;
    }
    else{
      let maskify = validator.maskify(validacion1)      
      
      document.getElementById('mensaj1').innerHTML= "Dígitos: " + maskify;
      document.getElementById('mensaj2').innerHTML= "Dígitos: " + maskify;
    
    }

    if(valido == true){
      document.getElementById("inicio").classList.add("hide");
      document.getElementById("inicio").classList.remove("display");
  
      document.getElementById("correcto").classList.add("display");
      document.getElementById("correcto").classList.remove("hide");

      document.getElementById('txtnew1').innerHTML= "La tarjeta es válida";

      }
    else{
      document.getElementById("inicio").classList.add("hide");
      document.getElementById("inicio").classList.remove("display");
  
      document.getElementById("incorrecto").classList.add("display");
      document.getElementById("incorrecto").classList.remove("hide");

      document.getElementById('txtnew2').innerHTML= "La tarjeta no es válida ";

    }
    }
    });

let letsplay2 = document.getElementById('entendido1');
letsplay2.addEventListener("click", function press2(){
       
    document.getElementById("incorrecto").classList.add("hide");
    document.getElementById("incorrecto").classList.remove("display");

    document.getElementById("inicio").classList.add("display");
    document.getElementById("inicio").classList.remove("hide");
});


let letsplay3 = document.getElementById('entendido2');
letsplay3.addEventListener("click", function press3(){
       
    document.getElementById("correcto").classList.add("hide");
    document.getElementById("correcto").classList.remove("display");

    document.getElementById("inicio").classList.add("display");
    document.getElementById("inicio").classList.remove("hide");
});

 
let card = document.getElementById("card");
 card.addEventListener("keypress", function soloNumeros(e){
  var key = card.event ? e.which : e.keyCode;
      if (key < 48 || key > 57) {
        e.preventDefault();
       }
      }); 

let dni = document.getElementById("dni");
 dni.addEventListener("keypress", function soloNumeros(o){
  var key = card.event ? o.which : o.keyCode;
      if (key < 48 || key > 57) {
        o.preventDefault();
       }
      }); 
      
let mostrar= false;
let eye = document.getElementById("eye");
eye.addEventListener("click", function toggle(){
  if(mostrar){
    document.getElementById("card").setAttribute("type","password");
    mostrar=false;
  }   
  else{
    document.getElementById("card").setAttribute("type","text");
    mostrar=true;
  }});
  

console.log(validator); 
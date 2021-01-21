import validator from './validator.js';

let letsplay = document.getElementById('validar');
let elemento = document.getElementById("checkbox").checked;

letsplay.addEventListener("click", ()=>{
let validacion1 = document.getElementById('card').value;
let valido = validator.isValid(validacion1)
console.log(typeof(validacion1))

  if(validacion1){
    if(validacion1.length<16){
      //document.getElementById('mensaje1').innerHTML= "El campo debe contener 16 dígitos "
      return isValid;
    }
    else{
      let maskify = validator.maskify(validacion1)      
      
      document.getElementById('mensaj1').innerHTML= "Dígitos: " + maskify;
      document.getElementById('mensaj2').innerHTML= "Dígitos: " + maskify;
    
    }

    if(valido){
      document.getElementById("inicio").classList.add("hide");
      document.getElementById("inicio").classList.remove("display");
  
      document.getElementById("correcto").classList.add("display");
      document.getElementById("correcto").classList.remove("hide");

      document.getElementById('txtnew1').innerHTML= "La tarjeta es válida";

      if(elemento==false){
        document.getElementById("card").value="";
          document.getElementById("dni").value="";
          return false
          }
        else{
        return true

        }
      }
    else{
      document.getElementById("inicio").classList.add("hide");
      document.getElementById("inicio").classList.remove("display");
  
      document.getElementById("incorrecto").classList.add("display");
      document.getElementById("incorrecto").classList.remove("hide");

      document.getElementById('txtnew2').innerHTML= "La tarjeta no es válida ";

      if(elemento==false){
        document.getElementById("card").value="";
          document.getElementById("dni").value="";
          return false
          }
        else{
        return true
        }
    }
    }});

let letsplay2 = document.getElementById('entendido1');
letsplay2.addEventListener("click", press2);

function press2(){
       
    document.getElementById("incorrecto").classList.add("hide");
    document.getElementById("incorrecto").classList.remove("display");

    document.getElementById("inicio").classList.add("display");
    document.getElementById("inicio").classList.remove("hide");
};


let letsplay3 = document.getElementById('entendido2');
letsplay3.addEventListener("click", press3);

function press3(){
       
    document.getElementById("correcto").classList.add("hide");
    document.getElementById("correcto").classList.remove("display");

    document.getElementById("inicio").classList.add("display");
    document.getElementById("inicio").classList.remove("hide");
};

 
let card = document.getElementById("card");
 card.addEventListener("keypress", function soloNumeros(e){
  var key = card.event ? e.which : e.keyCode;
      if (key < 48 || key > 57) {
        e.preventDefault();
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
  }})

  
console.log(validator); 
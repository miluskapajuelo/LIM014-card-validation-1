import validator from './validator.js';

/* Agregamos funcionalidad al boton para mostrar que está activo */
const form = document.getElementById("form")
form.addEventListener("input",() =>{
  let dni = document.getElementById("dni").value
  let InputNumber = document.getElementById('card').value;
  const validar = document.getElementById("validar")
  if(InputNumber.length ==16 && dni.length==8){
    validar.removeAttribute("disabled")
  } else{
    validar.setAttribute("disabled","disabled");
  }
});

/* Con el click del botón "enviar" para utilizar las funciones */
const validar = document.getElementById('validar');
validar.addEventListener("click", ()=>{

let dni = document.getElementById("dni").value
let InputNumber = document.getElementById('card').value;
let valido = validator.isValid(InputNumber)

  
   if(dni){ 
    if(InputNumber.length<16 || dni.length<8){
      /* document.getElementById('mensaje1').innerHTML= "El campo debe contener 16 dígitos " */
      return false;
    }
    else{

      let maskify = validator.maskify(InputNumber);      
      
      document.getElementById('mensaj1').innerHTML= "Dígitos: " + maskify;
      document.getElementById('mensaj2').innerHTML= "Dígitos: " + maskify;
    
    }
/* Se muestra la página y se ocultan páginas anteriores */
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
/* Se habilita un botón para regresar el inicio */
const validar2 = document.getElementById('entendido1');
validar2.addEventListener("click", function press2(){
       
    document.getElementById("incorrecto").classList.add("hide");
    document.getElementById("incorrecto").classList.remove("display");

    document.getElementById("inicio").classList.add("display");
    document.getElementById("inicio").classList.remove("hide");

    document.getElementById("card").value = "";
    document.getElementById("dni").value = "";

    document.getElementById("validar").setAttribute("disabled","disabled");
    
});

/* Se habilita un botón para regresar el inicio */
const validar3 = document.getElementById('entendido2');
validar3.addEventListener("click", function press3(){
       
    document.getElementById("correcto").classList.add("hide");
    document.getElementById("correcto").classList.remove("display");

    document.getElementById("inicio").classList.add("display");
    document.getElementById("inicio").classList.remove("hide");
    
    document.getElementById("card").value = "";
    document.getElementById("dni").value = "";

    document.getElementById("validar").setAttribute("disabled","disabled");
});

 /* Sólo se aceptan valores numéricos en "card" */
const card = document.getElementById("card");
 card.addEventListener("keypress", function soloNumeros(e){
  var key = card.event ? e.which : e.keyCode;
      if (key < 48 || key > 57) {
        e.preventDefault();
       }
      }); 

/* Sólo se aceptan valores numéricos en "DNI" */
const dni = document.getElementById("dni");
 dni.addEventListener("keypress", function soloNumeros(o){
  var key = card.event ? o.which : o.keyCode;
      if (key < 48 || key > 57) {
        o.preventDefault();
       }
      }); 

/* Se muestran los valores del input password */
let mostrar= false;
const eye = document.getElementById("eye");
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
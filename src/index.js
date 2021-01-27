import validator from './validator.js';

/* Agregamos funcionalidad al boton para mostrar que está activo */
const form = document.getElementById("form")
form.addEventListener("input",() =>{
  let TypeDocument = document.getElementById("TypeDocument").value
  let creditCardNumber = document.getElementById('NumberCard').value;
  const btnValidate = document.getElementById("btnValidate")
  if(creditCardNumber.length ==16 && TypeDocument.length==8){
    btnValidate.removeAttribute("disabled")
  } 
  else{
    btnValidate.setAttribute("disabled","disabled");
  }
});

/* Con el click del botón "enviar" para utilizar las funciones */
const btnValidate = document.getElementById('btnValidate');
btnValidate.addEventListener("click", ()=>{

let TypeDocument = document.getElementById("TypeDocument").value
let creditCardNumber = document.getElementById('NumberCard').value;
let IsValid1 = validator.isValid(creditCardNumber)

  
   if(TypeDocument){ 
    if(creditCardNumber.length<16 || TypeDocument.length<8){
      /* document.getElementById('mensaje1').innerHTML= "El campo debe contener 16 dígitos " */
      return false;
    }
    else{

      let maskify = validator.maskify(creditCardNumber);      
      
      document.getElementById('FirstMessage').innerHTML= "Dígitos: " + maskify;
      document.getElementById('SecondMessage').innerHTML= "Dígitos: " + maskify;
    
    }
/* Se muestra la página y se ocultan páginas anteriores */
    if(IsValid1 == true){
      document.getElementById("FirstPage").classList.add("hide");
      document.getElementById("FirstPage").classList.remove("display");
  
      document.getElementById("CorrectPage").classList.add("display");
      document.getElementById("CorrectPage").classList.remove("hide");

      document.getElementById('txtnew1').innerHTML= "La tarjeta es válida";

      }
    else{
      document.getElementById("FirstPage").classList.add("hide");
      document.getElementById("FirstPage").classList.remove("display");
  
      document.getElementById("NotCorrectPage").classList.add("display");
      document.getElementById("NotCorrectPage").classList.remove("hide");

      document.getElementById('txtnew2').innerHTML= "La tarjeta no es válida ";
        }
      }
  });
/* Se habilita un botón para regresar el inicio */
const ReturnPage1 = document.getElementById('entendido1');
ReturnPage1.addEventListener("click", function press2(){
       
    document.getElementById("NotCorrectPage").classList.add("hide");
    document.getElementById("NotCorrectPage").classList.remove("display");

    document.getElementById("FirstPage").classList.add("display");
    document.getElementById("FirstPage").classList.remove("hide");

    document.getElementById("NumberCard").value = "";
    document.getElementById("TypeDocument").value = "";

    document.getElementById("btnValidate").setAttribute("disabled","disabled");
    
});

/* Se habilita un botón para regresar el inicio */
const ReturnPage2 = document.getElementById('entendido2');
ReturnPage2.addEventListener("click", function press3(){
       
    document.getElementById("CorrectPage").classList.add("hide");
    document.getElementById("CorrectPage").classList.remove("display");

    document.getElementById("FirstPage").classList.add("display");
    document.getElementById("FirstPage").classList.remove("hide");
    
    document.getElementById("NumberCard").value = "";
    document.getElementById("TypeDocument").value = "";

    document.getElementById("btnValidate").setAttribute("disabled","disabled");
});

 /* Sólo se aceptan valores numéricos en "card" */
const NumberCard = document.getElementById("NumberCard");
NumberCard.addEventListener("keypress", function soloNumeros(e){
  var key = NumberCard.event ? e.which : e.keyCode;
      if (key < 48 || key > 57) {
        e.preventDefault();
       }
  }); 

/* Sólo se aceptan valores numéricos en "DNI" */
const TypeDocument = document.getElementById("TypeDocument");
TypeDocument.addEventListener("keypress", function soloNumeros(o){
  var key = TypeDocument.event ? o.which : o.keyCode;
      if (key < 48 || key > 57) {
        o.preventDefault();
       }
    }); 

/* Se muestran los valores del input password */
let show= false;
const eye = document.getElementById("eye");
eye.addEventListener("click", function toggle(){
  if(show){
    document.getElementById("NumberCard").setAttribute("type","password");
    show=false;
  }   
  else{
    document.getElementById("NumberCard").setAttribute("type","text");
    mostrar=true;
  }});
  

console.log(validator); 
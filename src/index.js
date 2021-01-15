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
    console.log(typeof(validacion1)) ;
    var a = validacion1.split("").reverse().join("");
    console.log(a[0]);
    console.log(a[a.length-1]);
    console.log(a.length);
    var c = Array.from(a);
    console.log(c);
    
    for(var i=0; i<c.length; i++){
      if(i%2==0){
        var d = c[i]*2;
        if(d >10){
          console.log(d);
        }
        else{
          console.log("hola mundo")
        }
      }
      
    }
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

var card = document.getElementById("card");
var hola = [];
var NameValues=[];
card.addEventListener("keypress", function soloNumeros(e){
      var key = card.event ? e.which : e.keyCode;
      if (key < 48 || key > 57) {
        e.preventDefault();
       }
    })



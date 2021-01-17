import validator from './validator.js';

console.log(validator);

var validacion1;
var letsplay = document.getElementById('validar');
letsplay.addEventListener("click", press1);

function press1(){
  validacion1 = document.getElementById('card').value;
  
  if(validacion1){
    if(validacion1.length<16){
      alert("Este campo requiere 16 dígitos")
      
    }
    else{
    document.getElementById('validar').innerHTML= validacion1
    }
      
    //console.log(typeof(validacion1)) ;
    var a = validacion1.split("").reverse();
    console.log(a[0]);
    console.log(a[a.length-1]);
    console.log(a.length);
    var total=[];

    for(var i=0; i<a.length; i++){
      if(i%2==0){
        var d = a[i]*2;
        if(d >=10){
          var f= d.toString();
          var suma = parseInt(f[0]) +parseInt(f[1]);
        }
        else{
          total.push(d); 
        }
      }
      else{
        total.push(parseInt(a[i]));
      }
     }
    const guardar = validacion1.slice(-4);
    console.log("PRUEBA" + validacion1.slice(-4)) ;
    
    
    let sumatotal = 0;
    total.forEach(function(a){sumatotal += a;});
    console.log(sumatotal);

    if(sumatotal%10==0){
      document.getElementById("inicio").classList.add("hide");
      document.getElementById("inicio").classList.remove("display");
  
      document.getElementById("correcto").classList.add("display");
      document.getElementById("correcto").classList.remove("hide");

      document.getElementById('txtnew1').innerHTML= "La tarjeta es válida" + sumatotal;
      }
    else{
      document.getElementById("inicio").classList.add("hide");
      document.getElementById("inicio").classList.remove("display");
  
      document.getElementById("incorrecto").classList.add("display");
      document.getElementById("incorrecto").classList.remove("hide");

      document.getElementById('txtnew2').innerHTML= "La tarjeta no es válida " + sumatotal;
    }
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


var letsplay3 = document.getElementById('entendido2');
letsplay3.addEventListener("click", press3);

function press3(){
       
    document.getElementById("correcto").classList.add("hide");
    document.getElementById("correcto").classList.remove("display");

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


var mostrar= false;
var eye = document.getElementById("eye");

eye.addEventListener("click", function toggle(){
  
  if(mostrar){
    document.getElementById("card").setAttribute("type","password");
    mostrar=false;
  }   
  else{
    var ese = document.getElementById("card").value.slice(-4);
    document.getElementById("card").setAttribute("type","text");
    mostrar=true;
  } 
})

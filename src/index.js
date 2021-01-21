import validator from './validator.js';

console.log(validator); 

var validacion1;

var letsplay = document.getElementById('validar');
var elemento = document.getElementById("checkbox").checked;

letsplay.addEventListener("click", isValid);

function isValid(){
  
  validacion1 = document.getElementById('card').value;
  if(validacion1){
    if(validacion1.length<16){
      //alert("Complete los datos");
      //document.getElementById('mensaje1').innerHTML= "El campo debe contener 16 dígitos "
      return isValid;
    }
    else{
      
      let k=validacion1;
      let t= k.slice(0,k.length -4)
      let mia = []
      for(var j =0;j<t.length;j++){
        mia.push(t.replace(t,"#"))
      }
      let pass = mia.join("") + k.slice(-4);
      
      document.getElementById('mensaj1').innerHTML= "Dígitos: " + pass;
      document.getElementById('mensaj2').innerHTML= "Dígitos: " + pass;
    
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
    
    var sumatotal = 0;
    total.forEach(function(a){sumatotal += a;});
    console.log(sumatotal);

    if(sumatotal%10==0){
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
    }};

var retorna;
var letsplay2 = document.getElementById('entendido1');
letsplay2.addEventListener("click", press2);

function press2(){
       
    document.getElementById("incorrecto").classList.add("hide");
    document.getElementById("incorrecto").classList.remove("display");

    document.getElementById("inicio").classList.add("display");
    document.getElementById("inicio").classList.remove("hide");
};


var letsplay3 = document.getElementById('entendido2');
letsplay3.addEventListener("click", press3);

function press3(){
       
    document.getElementById("correcto").classList.add("hide");
    document.getElementById("correcto").classList.remove("display");

    document.getElementById("inicio").classList.add("display");
    document.getElementById("inicio").classList.remove("hide");
};

 
var card = document.getElementById("card");
 card.addEventListener("keypress", function soloNumeros(e){
  const key = card.event ? e.which : e.keyCode;
      if (key < 48 || key > 57) {
        e.preventDefault();
       }
      }); 
      
var mostrar= false;
var eye = document.getElementById("eye");
eye.addEventListener("click", function toggle(){
  if(mostrar){
    document.getElementById("card").setAttribute("type","password");
    mostrar=false;
  }   
  else{
    document.getElementById("card").setAttribute("type","text");
    mostrar=true;
  }})
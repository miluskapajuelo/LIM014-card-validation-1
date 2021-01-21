const validator = {
    
    isValid : function(validacion1) {
        var validacion1;
        var a = validacion1.split("").reverse();
        var total=[];
        
        for(var i=0; i<a.length; i++){
            if(i%2==0){
                var d = a[i]*2;
                if(d >=10){
                    var f= d.toString();
                    var suma = parseInt(f[0]) +parseInt(f[1]);
                }
                else{
                    total.push(d);}}
            else{
                total.push(parseInt(a[i]));
            }
        }
        var sumatotal = 0;
        total.forEach(function(a){sumatotal += a;});

        if(sumatotal%10==0){
            return true 
        }
        else{
            return false
        }
    },

    maskify : function(k) {
          
    let t= k.slice(0,k.length -4)
    let mia = []
    for(var j =0;j<t.length;j++){
      mia.push(t.replace(t,"#"))
    }
    let pass = mia.join("") + k.slice(-4);
    return pass
}};
export default validator

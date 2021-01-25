const validator = {
    
    isValid : function(validacion1) {
        let a = validacion1.split("").reverse();
        let total=[];
        
        for(let i=0; i<a.length; i++){
            if(i%2!=0){
                let d = a[i]*2;
                if(d >=10){
                    let f= d.toString();
                    let suma = parseInt(f[0]) +parseInt(f[1]);
                    total.push(suma);
                    
                }
                else{
                    total.push(d);
                    
                }}
            else{
                total.push(parseInt(a[i]));
                
            }
        }
        let sumatotal = 0;
        total.forEach(function(a){sumatotal += a;});

        if(sumatotal%10==0 && sumatotal != 0){
            return true;
        }
        else{
            return false;
        }
        
    },

    maskify : function(k) {
          
    let t= k.slice(0,k.length -4);
    let mia = [];
    for(let j =0;j<t.length;j++){
      mia.push(t.replace(t,"#"));
    }
    let pass = mia.join("") + k.slice(-4);
    return pass;
    
}};
export default validator

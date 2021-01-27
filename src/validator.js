const validator = {
    
    isValid : function(creditCardNumber) {
        let ReverseString = creditCardNumber.split("").reverse();
        let totalNumbers=[];
        
        for(let i=0; i<ReverseString.length; i++){
            if(i%2!=0){
                let ByTwo = ReverseString[i]*2;
                if(ByTwo >=10){
                    let NumberString= ByTwo.toString();
                    let SumaDigitos = parseInt(NumberString.charAt(0)) +parseInt(NumberString.charAt(1));
                    totalNumbers.push(SumaDigitos);
                    
                }
                else{
                    totalNumbers.push(ByTwo);
                    
                }}
            else{
                totalNumbers.push(parseInt(ReverseString[i]));
                
            }
        }
        let SumTotal = 0;
        totalNumbers.forEach(function(a){SumTotal += a;});

        if(SumTotal%10==0 && SumTotal != 0){
            return true;
        }
        else{
            return false;
        }
        
    },

    maskify : function(creditCardNumber) {
          
    let ForNumbers= creditCardNumber.slice(0,creditCardNumber.length -4);
    let NewArra = [];
    for(let j =0;j<ForNumbers.length;j++){
        NewArra.push(ForNumbers.replace(ForNumbers,"#"));
    }
    let TotalOutput = NewArra.join("") + creditCardNumber.slice(-4);
    return TotalOutput;
    
}};
export default validator

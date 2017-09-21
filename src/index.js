module.exports = function zeros(expression) {
    var res = "1", substring = [], pos = 0, num, str, fact;
    
    function multiply(first, second) {
        var result = [], f, s, transfer, resLine, l;
        l = first.length + second.length;
        for (let k=0; k<l; k++) {
            result[k] = 0;
        }    
        for (let i=0; i<first.length; i++) {
            transfer = 0;
            for (let j=0; j<second.length; j++) {
                
                f = (i > 0) ? first.slice(-(i + 1), -i ) : first.slice(-1) ;
                s = (j > 0) ? second.slice(-(j + 1), -j) : second.slice(-1);
    
                result[i + j] += f * s + transfer;
                transfer = (result[i + j] / 10) ^ 0;
                result[i + j] = result[i + j] % 10;
            }
            result[i + second.length] += transfer;
        }
        if (result[l-1] === 0){
            result.pop();
        }
        result.reverse();
        resLine = result.join('');   
        return resLine; 
    }
    
    function factorial(n) {
        return +n ? multiply(n,  factorial(String(n - 1))) : "1";
    }
    
    function doubleFactorial(n) {
        return (+n > 1) ? multiply(n, doubleFactorial(String(n - 2))) : "1"; 
    }
       
    for (let i=0; i<expression.length; i++) {
        pos = expression.indexOf("*", i);
        
        if (pos < 0){
            substring.push(expression.slice(i));
            i = expression.length;
        }else{
            substring.push(expression.slice(i, pos));
            i = pos;
        }
    }
       
    for (let i=0; i<substring.length; i++) {
        str = substring[i];
       
        if (str.slice(-2) === '!!'){
            fact = doubleFactorial(str.slice(0, str.length - 2));
        }else{
            fact = factorial(str.slice(0, str.length - 1));
        }
            
        res = multiply(res, fact);
    }    
   
    for (let i=0; i<res.length; i++) {
        zero = (i > 0) ? res.slice(-(i + 1), -i ) : res.slice(-1) ;   
        if (zero != "0"){
            return i;
        }
    }
    
}



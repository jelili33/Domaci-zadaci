
function najveciBroj (a,b,c){
   
           
        if (a>b && a>c){
            return a;
        }
        if (b>c){
            return b;
        }
        if (c>=b) {
            return c;
        }
}

console.log(najveciBroj(4,5,2));
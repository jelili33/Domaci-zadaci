function najmanjiBroj (a,b,c){
       
   var min=0;
    if (a<b && a<c){
       return a;
   }
   if (b<=c){
       return b;
   }
   else {
       return c;
   }
   }

// console.log(najmanjiBroj(1000,0,522));

function cenaPiceCm2 (cena, poluprecnik){
    var povrsina= Math.pow(poluprecnik,2)*Math.PI;
    return cena/povrsina;
    
    }
    // console.log(cenaPiceCm2(1000,10));

    function najmanjaCenaPice(cena1, poluprecnik1,cena2,poluprecnik2,cena3,poluprecnik3) {
    
    return najmanjiBroj (cenaPiceCm2 (cena1, poluprecnik1), cenaPiceCm2 (cena2, poluprecnik2), cenaPiceCm2 (cena3, poluprecnik3));}

console.log(`${najmanjaCenaPice(1000,10,1000,5,1000,2)}`);

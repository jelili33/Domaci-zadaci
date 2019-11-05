function cenaPiceCm2 (cena, poluprecnik){
var povrsina= Math.pow(poluprecnik,2)*Math.PI;
return cena/povrsina;

}

console.log(cenaPiceCm2(100,20));


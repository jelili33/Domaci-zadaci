//Zadatak 3.
class Satojak{

    
    constructor (imeSastojka,kolicina,cena){
        this.imeSastojka=imeSastojka;
        this.kolicina=kolicina;
        this.cenaPoJedinici=cena;}

        ispisSastojka(){
            console.log(this.imeSastojka);
        }

        ukupnaCenaSastojka(){
            let sum=this.kolicina*this.cenaPoJedinici;
            return sum;
                      
        }
}
    
let sastojak1R1=new Satojak ("secer kasicica",3,5);
let sastojak2R1=new Satojak ("voda casa",3,0);
let sastojak3R1=new Satojak ("dunja",2,10);

let sastojak1R2=new Satojak ("mleko casa",3,25);
let sastojak2R2=new Satojak ("jaje",2,15);
let sastojak3R2=new Satojak ("secer kasicica",6,5);
let sastojak4R2=new Satojak ("ulje soljica",0.5,20);
let sastojak5R2=new Satojak ("orah casa",0.2,960);

let sastojak1R3=new Satojak ("mleko casa",1,25);
let sastojak2R3=new Satojak ("badem", 0.1,1000);
let sastojak3R3=new Satojak ("banana",2,20);
let sastojak4R3=new Satojak ("keks",0.1,180);
 
let sastojak1R4=new Satojak  ("belanac",2,15);
let sastojak2R4=new Satojak  ("secer",0.25,60);
let sastojak3R4=new Satojak  ("cokolada",1.5,100);
let sastojak4R4=new Satojak  ("brasno",0.3,65);
let sastojak5R4=new Satojak ("margarin",0.5,50);


class Recept{
   
    constructor (ime,tezina,sastojci){
        this.ime=ime;
        this.tezina=tezina;
        this.sastojci=sastojci;
    }

    ispis(){

        console.log(`${this.ime}:`);
        console.log(`Tezina: ${this.tezina}`);
        let imenaSastojaka = "";

         this.sastojci.forEach(function(value){
             
            imenaSastojaka=imenaSastojaka+value.imeSastojka+",";
        
        })
         console.log(`Sastojci: ${imenaSastojaka}`);
    }
            
    cenaRecepta (){

        let receptKosta=0;

        this.sastojci.forEach (function (element){

            receptKosta+=element.ukupnaCenaSastojka();
            
                    }

        )
        return receptKosta;
    }

}

//Zadatak 1 
//let recept1=new Recept ("Kompot","Pocetni",["secer kasicica", "voda casa", "dunja"]); 

//Zadatak 4.
let recept1=new Recept ("Kompot","Pocetni",[sastojak1R1, sastojak2R1, sastojak3R1]);
let recept2=new Recept ("Palacinke sa orasima i secerom","Srednji",[sastojak1R2, sastojak2R2, sastojak3R2, sastojak4R2 ,sastojak5R2]);
let recept3=new Recept ("Smoothie sa breskvom i bananom","Lak",[sastojak1R3, sastojak2R3, sastojak3R3 ,sastojak4R3]);
let recept4=new Recept ("Jež kolač","Tezak",[sastojak1R4, sastojak2R4, sastojak3R4,sastojak4R4,sastojak5R4]);




//Zadatak 1.
recept1.ispis();

//Zadatak 2.
let nizRecepata=[recept1, recept2, recept3, recept4];

function ispisPoTezini (niz){
    niz.forEach(function (element){
                         if (element.tezina=="Pocetni" || element.tezina=="Lak"){
                            element.ispis();
                         }

                    }

            );
                }

                ispisPoTezini(nizRecepata);


// Zadatak 5.
let cena1=recept3.cenaRecepta();

console.log(cena1);



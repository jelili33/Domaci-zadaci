class FluentnostBudzeta{
    constructor(opis,iznos,tip,procenatRashoda){
        this.opis=opis;
        this.iznos=iznos;
        this.tipTransakcije=tipTransakcije;
        this.procenatRashoda=procenatRashoda;

    }

    
}


let dugmeSubmit=document.getElementById("dugmeSubmit");
let inputIznos=document.getElementById("iznos");
let inputOpis=document.getElementById("OpisTransakcije");
let prihodiContainer=document.getElementById("prihodi-container");
let rashodiContainer=document.getElementById("rashodi-container");
let tipTransakcije=document.getElementById("tip");
let divSumPrihodi=document.getElementById("sumPrihodi");
let divSumRashodi=document.getElementById("sumRashodi");
let divSumOstatak=document.getElementById("sumsOstatak");
let divProcenatRashodi=document.getElementById("procenatRashodi");


tip.addEventListener("change", upisiTip)


function upisiTip(){
    if (tip.value=="-"){
        inputOpis.placeholder='Opis rashoda';
    }
    else {
        inputOpis.placeholder='Opis prihoda';
    }
}

dugmeSubmit.addEventListener("click",prihodiIrashodi);

let sumPrihodi=0;
let sumRashodi=0;
let sumOstatakBudzeta=0;
let procenatRashodi=0;

function prihodiIrashodi(){

    if (inputOpis.value==""){

        return alert('Molimo vas unesite opis transakcije');
    }

    if (inputIznos.value<=0 || isNaN(parseInt(inputIznos.value)) || inputIznos.value==""){

        return alert('Molimo vas unesite validnu vrednost u polje "iznos".Pozitivan broj.');
    }

      
     if (tip.value=="+"){

         let divPrihodi=document.createElement("div");
         divPrihodi.classList.add("row");
         prihodiContainer.appendChild(divPrihodi);
         divPrihodi.addEventListener("mouseover", pojavljivanjeDugmeta);
         divPrihodi.addEventListener("mouseout", nestajanjeDugmeta);

         let paragrafPrihodi=document.createElement("p");
         paragrafPrihodi.classList.add("col-sm-8");
         paragrafPrihodi.innerHTML=`#${inputOpis.value}`;
         let dugmeBrisanjePrihodi=document.createElement("button");
         dugmeBrisanjePrihodi.classList.add("col-sm-1");
         dugmeBrisanjePrihodi.innerHTML="X";
         dugmeBrisanjePrihodi.classList.add("btn-warning");
         dugmeBrisanjePrihodi.classList.add("btn");
         dugmeBrisanjePrihodi.style.display="none";

         let spanPrihodContainer=document.createElement("span");
         spanPrihodContainer.innerHTML=parseInt(inputIznos.value);
         spanPrihodContainer.classList.add("col-sm-3");


         divPrihodi.appendChild(paragrafPrihodi);
         divPrihodi.appendChild(spanPrihodContainer);
         divPrihodi.appendChild(dugmeBrisanjePrihodi);
         

         dugmeBrisanjePrihodi.addEventListener("click",brisanjePerentaPrihod);

         sumPrihodi+=parseInt(inputIznos.value);
       
        
                
           }

    else {
        
         let divRashodi=document.createElement("div");
         divRashodi.classList.add("row");
         rashodiContainer.appendChild(divRashodi);
         divRashodi.addEventListener("mouseover", pojavljivanjeDugmeta);
         divRashodi.addEventListener("mouseout", nestajanjeDugmeta);
        
         
         let paragrafRashodi=document.createElement("p");
         paragrafRashodi.classList.add("col-sm-7");
         paragrafRashodi.innerHTML=`#${inputOpis.value}`;
         let dugmeBrisanjeRashodi=document.createElement("button");
         dugmeBrisanjeRashodi.classList.add("col-sm-1");
         dugmeBrisanjeRashodi.innerHTML="X";
         dugmeBrisanjeRashodi.classList.add("btn-warning");
         dugmeBrisanjeRashodi.classList.add("btn");
         dugmeBrisanjeRashodi.style.display="none";


         let spanRashodiontainer=document.createElement("span");
         spanRashodiontainer.innerHTML=parseInt(inputIznos.value);
         spanRashodiontainer.classList.add("col-sm-2");

         let spanProcenatZaTajRashod=document.createElement("span");
         sumRashodi+=parseInt(inputIznos.value);
         spanProcenatZaTajRashod.innerHTML=`${parseInt(inputIznos.value)*100/sumPrihodi}%`;
         spanProcenatZaTajRashod.classList.add("col-sm-2");

         divRashodi.appendChild(paragrafRashodi);
         divRashodi.appendChild(spanRashodiontainer);
         divRashodi.appendChild(spanProcenatZaTajRashod);
         divRashodi.appendChild(dugmeBrisanjeRashodi);

         dugmeBrisanjeRashodi.addEventListener("click",brisanjePerentaRashod);

        

            
            }

    function pojavljivanjeDugmeta(e){

        e.currentTarget.lastChild.style.display="inline";
    }

    function nestajanjeDugmeta(e){

        e.currentTarget.lastChild.style.display="none";
    }

    function brisanjePerentaPrihod(e){

        e.target.parentElement.remove();

        let spanAfectedValue=e.target.previousSibling.innerHTML;

       sumPrihodi=sumPrihodi-parseInt(spanAfectedValue);
       
       updateStanje();

    }

    function brisanjePerentaRashod(e){

        e.target.parentElement.remove();

        let spanAfectedValue=e.target.previousSibling.previousSibling.innerHTML;

        sumRashodi=sumRashodi-parseInt(spanAfectedValue);
       
       updateStanje();

    }

    updateStanje();
   
}

function updateStanje(){
    sumOstatakBudzeta=sumPrihodi-sumRashodi;
    divSumOstatak.innerHTML=sumOstatakBudzeta;

    procenatRashodi=sumRashodi*100/sumPrihodi;
    divSumRashodi.innerHTML=sumRashodi;

    divSumPrihodi.innerHTML=sumPrihodi;

    if(sumRashodi==0){
        divProcenatRashodi.innerHTML="";
    }
    else{
        divProcenatRashodi.innerHTML=`${procenatRashodi}%`;
    }    
    updateProcenatRashoda();

    inputOpis.value="";
    inputIznos.value="";
}

function updateProcenatRashoda(){
    document.querySelector("#rashodi-container").childNodes.forEach(function(rashodDiv){
        if (rashodDiv.nodeType != Node.TEXT_NODE){
            let cenaRashoda  = rashodDiv.childNodes[1].innerHTML;
            let cenaRashodaNumber = parseInt(cenaRashoda);
            rashodDiv.childNodes[2].innerHTML = `${cenaRashodaNumber*100/sumPrihodi}%`;
        }
    })
}
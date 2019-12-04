import { listMessages } from "../components/listMessages";
import { getAllMessages, addMessageForUser , getAllMessagesForUser} from "../utilities/services";
import Button from "../components/button";
import Input from "../components/inputForm";
import Div from "../components/divWrapper";
import { Message } from "../components/message";

class Main{

    constructor(){

    this.divMainContainer=document.createElement("div");
    this.divMainContainer.className="main-div";
    this.divZaPorukeSve= document.createElement("div");
    this.divZaPorukeSve.className="svePoruke";
    this.divZaUsera= document.createElement("div");
    this.divMojePorukeContainer=document.createElement("div");
        
    this.divZaNovuPoruku=document.createElement("div");


    this.divMainContainer.appendChild(this.divZaUsera);
    this.divMainContainer.appendChild(this.divMojePorukeContainer);
    this.divMainContainer.appendChild(this.divZaPorukeSve);
    this.divMainContainer.appendChild(this.divZaNovuPoruku);

    getAllMessages().then(data => {

        let allMessages=new listMessages(data.data);
        this.htmlAllMessages=allMessages.getNode();
        this.divZaPorukeSve.appendChild(this.htmlAllMessages);
        

    });

    let inputImeKorisnika=new Input("Ime korisnika");
    let htmlInputImeKorisnika=inputImeKorisnika.getNode();

    let defaultUser="Nepoznati korisnik";

    let buttonPotvrdiImeKorisnika=new Button("Potvrdi ime korisnika",()=>{
        defaultUser=htmlInputImeKorisnika.value;
             }
    );

    let htmlButton1=buttonPotvrdiImeKorisnika.getNode();

    let wrapperKorisnik=new Div(htmlInputImeKorisnika,htmlButton1);
    let htmlWrapperKorisnik=wrapperKorisnik.getNode();
    this.divZaUsera.appendChild(htmlWrapperKorisnik);

    // *********************************************************************

    let inputPoruka=new Input("Upiši poruku");
    let htmlInputPoruka=inputPoruka.getNode();

    let buttonDodajPoruku=new Button("Dodaj poruku",()=>{

        addMessageForUser(defaultUser, htmlInputPoruka.value).then(data => {

                    
            if(data.success == true){

                let vreme=new Date();

                let vremeMilisekunde=vreme.getTime();

                let porukaNew=new Message(htmlInputImeKorisnika.value, htmlInputPoruka.value, vremeMilisekunde);
                let htmlPorukaNew=porukaNew.getNode();
                this.htmlAllMessages.appendChild(htmlPorukaNew);
                console.log("uspesno sacuvano");
                
            }
        })
        
    });
    let htmlButtonDodajPoruku=buttonDodajPoruku.getNode();

    let wrapperDodavanjePoruke=new Div(htmlInputPoruka,htmlButtonDodajPoruku);
    let htmlWrapperDodavanjePoruke=wrapperDodavanjePoruke.getNode();
    this.divZaNovuPoruku.appendChild(htmlWrapperDodavanjePoruke);

    let buttonMojePoruke=new Button("Moje poruke", ()=>{

        getAllMessagesForUser(htmlInputImeKorisnika.value).then(data=>{

            divMojePoruke.innerHTML="";

       if (data.messages.length > 0){

        let nasUser=new listMessages(data.messages);
        let stvarnoNasUser=nasUser.getNode();
        divMojePoruke.appendChild(stvarnoNasUser); 

       }

       else{
        divMojePoruke.innerHTML="Ovaj korisnik ne postoji u bazi ili nema poruke";

       }

    })

     });
    



    let htmlButtonMojePoruke=buttonMojePoruke.getNode();
    this.divMojePorukeContainer.appendChild(htmlButtonMojePoruke);

    let divMojePoruke=document.createElement("div");
    this.divMojePorukeContainer.appendChild(divMojePoruke);


    }

    getNode(){
        return this.divMainContainer;
    }

}

export {
    Main
}
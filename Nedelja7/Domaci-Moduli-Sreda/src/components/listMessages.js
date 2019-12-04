import { Message } from "./message";

class listMessages {

    constructor(array){

    this.div=document.createElement("div");
    this.div.className ="poruke-div";
    
        array.forEach(element=>{
    
            let message=new Message(element.username, element.message, element.timestamp);
            let htmlMessage=message.getNode();
            this.div.appendChild(htmlMessage);
    
        })
        
    }
    getNode(){
        return this.div;
    }
    
    }
    
    export {
    
        listMessages
    }
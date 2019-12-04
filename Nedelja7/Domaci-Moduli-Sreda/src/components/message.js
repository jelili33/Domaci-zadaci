class Message{

    constructor(author,message,dateMiliseconds){
        this.node=document.createElement("div");

        this.autor=document.createElement("p");
        this.autor.innerHTML=author;

        this.poruka=document.createElement("p");
        this.poruka.innerHTML=message;

        this.date=document.createElement("p");
        let time=new Date (dateMiliseconds);
        this.date.innerHTML=`${time.getHours()}:${time.getUTCMinutes()}:${time.getSeconds()}`

        this.node.appendChild(this.autor);
        this.node.appendChild(this.poruka);
        this.node.appendChild(this.date);

        

}

getNode(){
    return this.node;
}

}

export{
    Message
}
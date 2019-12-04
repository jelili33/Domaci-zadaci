export default class Button{

    constructor(innerName,myfunction){

        this.button=document.createElement("button");
        this.button.className="button";
        this.button.innerHTML=innerName;
        this.button.addEventListener("click",myfunction)
    }

    getNode(){

        return this.button
    }
}
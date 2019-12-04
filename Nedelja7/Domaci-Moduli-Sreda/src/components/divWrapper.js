export default class Div{

    constructor(element1,element2){

        this.div=document.createElement("div");
        this.div.appendChild(element1);
        this.div.appendChild(element2);

    }

    getNode(){

        return this.div;
    }

}
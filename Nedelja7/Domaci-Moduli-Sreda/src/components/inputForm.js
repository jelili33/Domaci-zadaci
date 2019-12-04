export default class Input{

    constructor(innerName){

        this.input=document.createElement("input");
        this.input.className="input-style";
        this.input.placeholder=innerName;
    }

    getNode(){

        return this.input;
    }
}
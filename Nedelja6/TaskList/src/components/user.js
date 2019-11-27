class User {

    constructor(){
        this.divUserContainer=document.createElement("div");

        this.inputForUser=document.createElement("input");
        this.inputForUser.type='text';
        this.inputForUser.id='txt-user';
        this.inputForUser.placeholder='User';

        this.btnConfirmUser=document.createElement('input');
        this.btnConfirmUser.type='submit';
        this.btnConfirmUser.id='btn-user';
        this.btnConfirmUser.value='Go';

        
        this.divUserContainer.appendChild(this.inputForUser);
        this.divUserContainer.appendChild(this.btnConfirmUser);
    }

    getNode(){
        return this.divUserContainer;
    }   

    btnConfirmUserOnClick(ourUserfunction){
        this.btnConfirmUser.addEventListener('click',ourUserfunction);
    }

}

export {
    User, 
}
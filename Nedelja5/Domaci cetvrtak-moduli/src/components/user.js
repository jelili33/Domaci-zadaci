class User{
    

    constructor(
        firstName,
        lastName,
        mail,
        ){
            
        this.firstName=firstName,
        this.lastName=lastName,
        this.mail=mail
                            
    }

    getUser(){
        console.log('Init user');
        return `<p>User ${this.firstName}  ${this.lastName}</p>`
    }
}

export default new User("Francisco","Goya","fg@gmail.com");
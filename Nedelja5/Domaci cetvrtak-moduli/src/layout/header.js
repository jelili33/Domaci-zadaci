import User from '../components/user'

class Header{
    constructor(){}
    getHtml(){
        console.log('Init header');
        return `<header>Header${ User.getUser()}</header>`;

    }
}

export default Header;
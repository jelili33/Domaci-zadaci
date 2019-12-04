import {Main} from './layout/main';

const app = document.getElementById('app');
let main = new Main(); 
app.appendChild(main.getNode());
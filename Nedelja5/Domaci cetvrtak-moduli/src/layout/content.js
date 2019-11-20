import {Students} from '../components'
import {Teachers} from '../components'

class Content{
    constructor(){
        console.log('Init content');
    }
    getHtml(){
        const students = new Students();
        let html = '<div>';
         html +=  students.getStudents();
        const teachers = new Teachers();
         html +=  teachers.getTeachers();
         html+= '</div>';
         console.log('Init content');
         return html;
         
    }
}

export default Content;
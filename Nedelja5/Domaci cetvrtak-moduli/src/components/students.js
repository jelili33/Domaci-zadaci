import Student from './student';
import { countItems } from '../services/utils';
import Content from '../layout/content';
const studentLists = [
    {
        firstName: 'Prvi',
        lastName: 'Student',
        age: 20,
        gender: 0,
        yearsOfStudy: 1
    },
    {
        firstName: 'Drugi',
        lastName: 'Student',
        age: 21,
        gender:1,
        yearsOfStudy: 2
    }
];

export class Students {
    constructor() {}
    getStudents() {
        let html = '<ul>';
        studentLists.forEach(student => {
            let item = new Student(student.firstName, student.lastName, student.age, student.gender, student.yearsOfStudy);
            html += item.getStudent();
        });
        html += '</ul>';
        console.log('Init students', countItems(studentLists));
        return html;
    }
}
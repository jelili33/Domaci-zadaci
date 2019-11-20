import Teacher from './teacher';
import { countItems } from '../services/utils';

const teacherLists = [
    {
        firstName: 'Dobrivoje',
        lastName: 'Teacher',
        age: 96,
        gender: 0,
        yearsOfExperience: 14
    },
    {
        firstName: 'Marija',
        lastName: 'Teacher',
        age: 51,
        gender: 1,
        yearsOfExperience: 40
    }
];

export class Teachers {
    constructor() {}
    getTeachers() {
        let html = '<ul>';
        teacherLists.forEach(teacher => {
            let item = new Teacher(teacher.firstName, teacher.lastName, teacher.age, teacher.gender, teacher.yearsOfExperience);
            html += item.getTeacher();
        });
        html += '</ul>';
        console.log('Init teachers', countItems(teacherLists));
        return html;
    }
}
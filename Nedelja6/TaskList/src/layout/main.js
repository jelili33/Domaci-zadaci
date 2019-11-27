
import { TaskList } from "../components/taskList";
import { InputForm } from "../components/inputForm";
import { Task } from "../components/task";
import { getToDo, addToDo, deleteToDo } from "../utilities/todo-service";
import { User } from "../components/user";

class Main {
    constructor() {
        this.inputForm = new InputForm();
        this.taskList = new TaskList();
        this.divUser = new User();

        this.node = document.createElement('main');
        this.node.appendChild(this.inputForm.getNode());
        this.node.appendChild(this.divUser.getNode());
        this.node.appendChild(this.taskList.getNode());
        

        this.divUser.btnConfirmUserOnClick(this.getAllToDoForUser.bind(this)),

        this.inputForm.setBtnAddOnClick(this.addTask.bind(this))
       
    }
    getNode(){
        return this.node;
    }

    getAllToDoForUser (){
        getToDo(this.divUser.inputForUser.value).then(data => {
            let items = data.items;
            this.taskList.emptyList();
            items.forEach(item => {
                let task = new Task(item.title);
                task.setBtnDeleteClickEvent(() => {
                    this.deleteTask(item.title);
                })
                this.taskList.addTask(task);
            })
        })
    }
    
    addTask(){
        let text = this.inputForm.txtTitle.value;
        text = text.trim();

        if (text == '') return;

        addToDo(this.divUser.inputForUser.value, text).then(data => {

            if(data.success == "true"){
                this.getAllToDoForUser();
            }
        })
    }


    deleteTask(text){
        deleteToDo(this.divUser.inputForUser.value, text).then(data => {

            if(data.success == "true"){
                this.getAllToDoForUser();
            }
        })
    }

}

export {
    Main
}
import { LightningElement , track ,wire} from 'lwc';
import getAllTodos from "@salesforce/apex/ToDoController.getAllTodos";
export default class TodoList extends LightningElement {
    @track todos = [];
    @wire(getAllTodos)
    wiredResult({ error, data }) {
        // console.log("hi");
        if (data) {
            // Process data
            console.log(data);
            this.groupTodos(data);
        } else if (error) {
            console.log("hi");
            console.log(error);
            // Handle error
        }
    }
    
    // getAllTodoItems() {
    //     getAllTodos().then((response) => {
    //         if (response) {
    //             this.groupTodos(response);
    //             console.log("length of the response id : ", response);
    //         } else console.log("response is null or undefined");
    //     }).catch((err) => console.log(err));
    // }

    groupTodos(todoslist) {
        if (todoslist) {
            let todomap = new Map();
            todoslist.forEach((todo) => {
                if (!todomap.has(todo.todoDate)) {
                    todomap.set(todo.todoDate, []);
                }
                todomap.get(todo.todoDate).push(todo);
            });

            let arr = [];
            for (let key of todomap.keys()) {
                let obj = {
                    date: key,
                    item: todomap.get(key)
                }
                arr.push(obj);
            }
            this.todos = arr;
        }


    }
}
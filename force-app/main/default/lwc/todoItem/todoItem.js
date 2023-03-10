import { LightningElement, api } from 'lwc';
import updateTodoItem from "@salesforce/apex/TodoController.updateTodo";
import deleteTodo from "@salesforce/apex/TodoController.deleteTodo";
// import todosOfToday from "@salesforce/apex/TodoController.todosOfToday";
export default class TodoItem extends LightningElement {
		@api todoName ;
		@api todoId;
		@api done = false;
		
		get containerClass(){
				return this.done===true ? "todo completed" : "todo upcoming";
		}
	
	updateTodoHandler() {
		// this.done = true;
		let obj = {
			todoName: this.todoName,
			todoId: this.todoId,
			done: !this.done
		}
		updateTodoItem({ payload: JSON.stringify(obj) }).then((result) => {
			console.log("success in todoItem.js --> udateTodoItem()", result);
			let updateEvent = new CustomEvent('update');
			this.dispatchEvent(updateEvent);
		}).catch((err) => console.log("success in todoItem.js --> udateTodoItem()", err));
		// todosOfToday();
	}

	deleteTodoHandler() {
		if (this.done === true) {
			// this.dispatchEvent(new CustomEvent("notdeletable", { detail: this.todoId }));
			console.log('competed item can not be deleted');
		} else {
			deleteTodo({ todoId: this.todoId })
				.then(result => {
					//on successful delete, fire an event to notify parent component
					this.dispatchEvent(new CustomEvent("delete", { detail: this.todoId }));

				})
				.catch(error => {
					console.error("Error in updatig records ", error);
				});
		}
	}
}
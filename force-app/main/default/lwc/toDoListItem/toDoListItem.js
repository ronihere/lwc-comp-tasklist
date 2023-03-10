import { LightningElement, api } from 'lwc';

export default class ToDoListItem extends LightningElement {
    @api todoName;
    @api todoId;
    @api done;

    get containerClass() {

    return this.done ? "todo completed" : "todo upcoming";

  }
}
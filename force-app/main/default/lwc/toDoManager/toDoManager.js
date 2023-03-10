import { LightningElement, track } from 'lwc';
import addToDo from "@salesforce/apex/ToDoController.addToDo";
import todosOfToday from "@salesforce/apex/TodoController.todosOfToday";
export default class ToDoManager extends LightningElement {
		time="8:15 PM";
   greeting = "Good Evening";
   @track todos =[];

   connectedCallback(){
     this.getTime();
		//  this.populateDemoTodoItems();    ---> populates demo data for the FE
     this.getTasksOfToday();
     setInterval(()=>{
       this.getTime();
     },1000*60);
   }

   getTime(){
     let date = new Date();
     let hour = date.getHours();
     let min = date.getMinutes();

     this.time = `${this.getHour(hour)}:${this.getDoubleDigit(min)} ${this.getMidDay(hour)}`;
     this.greeting = `${this.setGreeting(hour)}`
   }


   getHour(hour){
     return (hour===0) ? 12 : (hour>12) ? (hour-12) : hour;
   }
   getMidDay(hour){
     return hour>=12 ? "PM" : "AM";
   }
   getDoubleDigit(digit){
     return digit<10 ? "0"+digit : digit;
   }
   setGreeting(hour){
     if(hour<12)return this.greeting = "Good Morning";
     else if(hour<17)return this.greeting = "Good Afternoon";
     else return this.greeting="Good Evening";
   }

   addTodoHandler(){
     let inputBox = this.template.querySelector('lightning-input');
     console.log(inputBox.value);
     let task={
      //  todoId: this.todos.length,
       todoName : inputBox.value,
       done: false
      //  todoDate : new Date()
     }
     addToDo({ payload: JSON.stringify(task) })
       .then((response) => {
         console.log("SuccessFully stringified");
         this.getTasksOfToday();
       })
       .catch(error => console.log('error in stringifying the FE data for backend func call: ' + error));
     this.todos.push(task);
    //  this.upcomingTasks();
     inputBox.value="";
   }
   get upcomingTasks(){
      return this.todos && this.todos.length ? this.todos.filter(todo => !todo.done) : [];
   }

   get completedTasks(){
      return this.todos && this.todos.length ? this.todos.filter(todo => todo.done) : [];
   }

		populateDemoTodoItems(){
				let demoArray = [
					{
					 todoId: 0,
					 todoName : "Read JS Documentation",
					 done: false,
					 todoDate : new Date()
				 },
				 {
					 todoId: 1,
					 todoName : "Meet her",
					 done: true,
					 todoDate : new Date()
				 },
					{
					 todoId: 2,
					 todoName : "Do a DSA problem",
					 done: false,
					 todoDate : new Date()
				 }
				];
				this.todos = demoArray;
    }
  getTasksOfToday() {
    todosOfToday().then((response) => {
      if (response) {
        this.todos = response;
        console.log("length of the response id : ", response.length);
      } else console.log('empty response from the todosOfToday() apex method' );
    }).catch((err) => console.log("can't retrieve data from the org for todays task . APEX method called ---> todosOdToday()", err));
  }

  updateHandler() {
    this.getTasksOfToday();
  }
  deleteHandler() {
    this.getTasksOfToday();
  }
}
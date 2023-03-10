public with sharing class ToDoController {
    @AuraEnabled
    public static string addToDo(String payload){
        try {
            ToDo payloadObject = (ToDo) JSON.deserialize(payload, ToDo.class);
            SObject task_todo = (SObject) Type.forName('ToDo__c').newInstance();
            task_todo.put('Name',payloadObject.todoName);
            task_todo.put('Done__c',payloadObject.done);
            insert task_todo;
            return String.valueOf(task_todo.Id);
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled
    public static List<ToDo> todosOfToday(){
        try {
            List<SObject> tasksOfToday = Database.query('SELECT Id , Name , CreatedDate , Done__c FROM ToDo__c WHERE CreatedDate = TODAY ORDER BY CreatedDate DESC ');
            return convertIntoTodoClass(tasksOfToday);
        } catch (Exception e) {
            System.debug('catch in the tasksOfToday class');
            throw new AuraHandledException(e.getMessage());
        }
    }
    
    @AuraEnabled(cacheable=true)
    public static List<ToDo> getAllTodos(){
        try {
            List<SObject> alltodolist = Database.query('SELECT Id, Name, Done__c , CreatedDate FROM ToDo__c WHERE CreatedDate = LAST_N_DAYS:7 ORDER BY CreatedDate DESC');
            system.debug(alltodolist);
            return convertIntoTodoClass(alltodolist);
        } catch (Exception e) {
            System.debug('catch in the getAllTodos class');
            throw new AuraHandledException(e.getMessage());
        }
    }
    
    @AuraEnabled(cacheable=true)
    public static void updateTodo(String payload){
        try {
            ToDo payloadObject = (ToDo) JSON.deserialize(payload, ToDo.class);
            SObject obj = (SObject) Type.forName('ToDo__c').newInstance();
            obj.put('Done__c', payloadObject.done);
            obj.put('Name',payloadObject.todoName);
            obj.put('Id' , payloadObject.todoId);
            update obj ;
        
        }catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    
    @AuraEnabled
    public static void deleteTodo(String todoId){
        try {
            SObject todo = (Sobject) Type.forName('ToDo__c').newInstance();
            todo.put('Id', todoId);
            delete todo;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    // @AuraEnabled(cacheable=true)
    public static List<ToDo> convertIntoTodoClass(List<SObject> todayTodoList){
        
            List<ToDo> newList = new List<ToDo>();
            for(SObject i : todayTodoList){
               // String datee = (String)i.CreatedDate;
                System.debug(i);
                Todo obj = new ToDo();
                obj.todoName = String.valueOf(i.get('Name'));
                obj.todoId = i.Id;
                obj.done = Boolean.valueOf(i.get('Done__c'));
                //obj.todoDate = Date.valueOf(i.get('CreateDate'));
                // obj.todoDate= "10-12-2020";
                newList.add(obj);
            }
            System.debug(newList);
            return newList;
        
    }
    class ToDo{
        @AuraEnabled
        public String todoId;
        @AuraEnabled
        public String todoName;
        @AuraEnabled
        public Date todoDate;
        @AuraEnabled
        public Boolean done;

    }
         
        
}
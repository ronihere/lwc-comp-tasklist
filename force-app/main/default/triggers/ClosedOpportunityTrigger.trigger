trigger ClosedOpportunityTrigger on Opportunity (After insert , After update) {
    // List<Opportunity> opp_list = [SELECT Id , Name,StageName from Opportunity WHERE Id IN : trigger.new];
    List<Task> task_list = new List<Task>();
    for (Opportunity opp  : trigger.new) {
        if(trigger.isInsert || trigger.isUpdate){
            if(opp.StageName=='Closed Won'){
                task_list.add(new Task(Subject='Follow Up Test Task',WhatId=opp.Id));
            }
        }
    }
    insert task_list;

}
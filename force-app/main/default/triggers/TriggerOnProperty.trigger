trigger TriggerOnProperty on Property__c (before insert,before update) {
    if(trigger.isBefore && trigger.isInsert){
        TriggerHelper.beforeInsert(trigger.new);
    }
    else if(trigger.isBefore && trigger.isUpdate){

    }

}
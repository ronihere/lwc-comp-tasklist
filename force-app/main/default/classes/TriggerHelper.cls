public with sharing class TriggerHelper {

    public static void beforeInsert(List<Property__c> property_list){
        List<Property__c> property_list_withAgent = new List<Property__c>();
        for(Property__c p : property_list){                                 //adding all the properties with agent into a list
            if(p.Agent__c != null) property_list_withAgent.add(p);
        }
        validateAgentLicense(property_list_withAgent);
    }





    public static void validateAgentLicense(List<Property__c> p_list){
        Map<String,License__c> agent_licenseMap = new Map<String,License__c>();  
        Set<Id> agentId_set = new Set<Id>();
        Set<String> state_set = new Set<String>();
        for(Property__c p : p_list){
            agentId_set.add(p.Agent__c);
            state_set.add(p.State__c);
        }
        // now I have two set of AgentId and StateId , we have to query if we have such in license table whose expiration date is > Today
        List<License__c> license_list = [SELECT Agent__c , State__c FROM License__c WHERE Agent__c IN : agentId_set AND State__c IN : state_set AND Expiry_Date__c > Today];
        //storing all the agentId+stateId+exporyDate>today wala licenses in a map
        for(License__c l : license_list){
            agent_licenseMap.put(l.Agent__c+'-'+l.State__c,l);
        }
        //when I am unable to get such a key , will throw a error

        for(Property__c p : p_list){
            if(!agent_licenseMap.ContainsKey(p.Agent__c+'-'+p.State__c)){
                p.addError('No such License');
            }
        }
    }



    public TriggerHelper() {

    }
}
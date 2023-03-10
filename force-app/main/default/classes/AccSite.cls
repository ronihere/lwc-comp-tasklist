public class AccSite implements Database.Batchable<sObject> {
	public Integer numOfAccProcessed = 0;
    //	 calling ---> anonymous class
 	//   AccSite accsiteobj = new AccSite();
	//	 Id batchId = Database.executeBatch(accsiteobj);
    public Database.QueryLocator start(Database.BatchableContext bc){
        return Database.getQueryLocator([SELECT Id , Name from Account]);
    }
    
    public void execute(Database.BatchableContext bc , List<Account> acc_list){
     
        for(Account acc : acc_list){
            StringBuilder sb = new StringBuilder();
            
            for(Integer i=0;i<acc.Name.length();i++){
                if(acc.Name.charAt(i)!=32)  sb.add(acc.Name.substring(i,i+1));
            }
            acc.Site =  sb.getStringValue() + '.com';
        }
        update acc_list;
        numOfAccProcessed = numOfAccProcessed  + acc_list.size();
    }
    
    public void finish(Database.BatchableContext bc){
        System.debug(bc.getJobId());
        System.debug('numOfAccProcessed: '+numOfAccProcessed);
    }
}
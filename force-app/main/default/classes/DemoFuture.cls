public class DemoFuture {
		@future
    	public static void addNoOfConInAcc(List<Id> accid_list){
            List<Account> acc_list = [SELECT Id,(SELECT Id FROM Contacts) FROM Account WHERE ID IN :accid_list];
            for(Account acc : acc_list){
                acc.Number_Of_Contact__c = acc.Contacts.size();
            }
            update acc_list;
    	}
}
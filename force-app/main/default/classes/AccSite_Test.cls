@isTest
public class AccSite_Test {
	@isTest
    public static void methodTest() {
        List<Account> acc_list = new List<Account>();
        for(Integer i=0;i<200;i++){
            acc_list.add(new Account(Name='randomTest'+i));
        }
        insert acc_list;
        
        Test.startTest();
        AccSite accsiteobj = new AccSite();
		Id batchId = Database.executeBatch(accsiteobj);
        Test.stopTest();
        
        Account acc_upt_obj = [SELECT Id ,Site from Account Where Name='randomTest0'];
        System.assertEquals(acc_upt_obj.Site, 'randomTest0.com');
    }
}
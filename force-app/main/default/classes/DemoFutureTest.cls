@isTest
public class DemoFutureTest {
	@isTest
    public static void methodTest1(){
        List<Account> acc_list = new List<Account>();//adding 200 demo accounts
        for(Integer i =0;i<200;i++){
             acc_list.add(new Account(Name='Test'+i));
        }
        insert acc_list;
        
        List<Contact> con_list = new List<Contact>();
        List<Id> accid_list = new List<Id>();
        for(Account acc : acc_list){
            con_list.add(new Contact(FirstName='Test',LastName=acc.Name,AccountId=acc.Id));//adding 1 contact for each account and assigning them with accountId
			accid_list.add(acc.Id);
        }
        insert con_list;
        Test.startTest();
        DemoFuture.addNoOfConInAcc(accid_list);
        Test.stopTest();
        List<Account> acc_afterdml = [SELECT Id,Number_Of_Contact__c from Account];//fetching the account infos after the dml
        System.assertEquals(1,acc_afterdml[0].Number_Of_Contact__c);//checking if it a single account obj that is  made in the test class has 1 contact related to it or not
    }
}
public with sharing class AccountController {
    @AuraEnabled(cacheable = true)
    public static List<Account> getAccountList() {
        return [select Id, Name, Type, Industry from Account limit 5];
    }

    @AuraEnabled(cacheable = true)
    public static List<Account> filterAccountTypeType(String type) {
        return [select Id, Name, Type, Industry from Account where Type=:type limit 5];
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> findAccounts(String searchKey){
        String key = '%' + searchKey + '%';
        return [SELECT Id, Name, Type, Industry FROM Account WHERE Name LIKE :key LIMIT 5];
    }

}
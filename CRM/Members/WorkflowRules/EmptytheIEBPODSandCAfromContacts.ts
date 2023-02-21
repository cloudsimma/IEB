GetMember = zoho.crm.getRecordById("Accounts",MemberID);
GetRelatedContacts = zoho.crm.getRelatedRecords("Contacts","Accounts",MemberID);
//info GetRelatedContacts;
for each  cont in GetRelatedContacts
{
	UpdateMap = Map();
	UpdateMap.put("Community_Ambassadors",null);
	UpdateMap.put("IEB_PODS",null);
	UpdateMap.put("SMS_opt","No");
	UpdateRec = zoho.crm.updateRecord("Contacts",cont.get("id"),UpdateMap);
	info UpdateRec;
}

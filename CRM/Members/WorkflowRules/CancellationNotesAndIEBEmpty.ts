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
//GetMember = zoho.crm.getRecordById("Accounts",MemberID);
notes_map = Map();
content1 = "Cancellation on: " + zoho.currenttime.toString("dd-MMM-yyyy hh:mm:ss","GMT-06:00") + " by : " + zoho.loginuser;
content2 = GetMember.get("Comments");
content = content1 + "\n" + content2;
notes_map.put("Note_Title","Membership Status - Exit Member");
notes_map.put("Note_Content",content);
notes_map.put("Parent_Id",MemberID);
notes_map.put("se_module","Accounts");
notecreate = zoho.crm.createRecord("Notes",notes_map);

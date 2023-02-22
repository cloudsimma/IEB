GetRec = zoho.crm.getRelatedRecords("ZohoSign_Recipients","zohosign__ZohoSign_Documents",DocID);
//info GetRec ;
for each  rec in GetRec
{
	info rec.get("Email");
	SearchRec = zoho.crm.searchRecords("Contacts","(Email:equals:" + rec.get("Email") + ")");
	ContactList = List();
	for each  cont in SearchRec
	{
		info cont.get("id");
		UpdateMap = Map();
		UpdateMap.put("Email",rec.get("Email"));
		UpdateMap.put("zohosign__Contact",cont.get("id"));
		UpdateRec = zoho.crm.updateRecord("zohosign__ZohoSign_Documents",DocID,UpdateMap);
		info UpdateRec;
	}
}

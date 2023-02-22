Get_Ambassadors = zoho.crm.getRecordById("Community_Ambassadors",Rec_ID);
//info Get_Ambassadors;
GetCreatedTime = Get_Ambassadors.get("Created_Time").addMonth(3);
info GetCreatedTime;
if(GetCreatedTime > zoho.currentdate)
{
	//info "hai";
	Var = zoho.crm.getRelatedRecords("Owners5","Community_Ambassadors",Rec_ID);
	//info Var;
	OwnerList = List();
	for each  rec in Var
	{
		OwnerID = rec.get("Owner1").get("id");
		GetOwner = zoho.crm.getRecordById("Contacts",OwnerID);
		info "GetOwner " + GetOwner;
		if(GetOwner.get("Email_Comment") == null || GetOwner.get("SMS_Comment") == null || GetOwner.get("Call_Comment") == null)
		{
			OwnerList.add(GetOwner.get("name"));
		}
	}
	UpdateMap = Map();
	if(OwnerList.size() == 0)
	{
		UpdateMap.put("Is_Completed",true);
	}
	NewDate = zoho.currentdate.addDay(25);
	UpdateMap.put("Next_Schedule_Date",NewDate);
	UpdateRec = zoho.crm.updateRecord("Community_Ambassadors",Rec_ID,UpdateMap);
	GetAmbassadors = zoho.crm.getRecordById("Community_Ambassadors",Rec_ID);
	if(GetAmbassadors.get("Is_Completed") != true)
	{
		sendmail
		[
			from :zoho.adminuserid
			to :"ananth@cloudlion.org","hariharan@cloudlion.org"
			subject :"Notification"
			message :OwnerList
		]
		//attachments:<component> <name> as PDF
	}
}

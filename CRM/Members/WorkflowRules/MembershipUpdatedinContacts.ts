if(CompanyID != null)
{
	get_company = zoho.crm.getRecordById("Accounts",CompanyID.toLong());
	get_contacts = zoho.crm.searchRecords("Contacts","(Account_Name:equals:" + CompanyID + ")");
	//info get_contacts;
	datamaps = Map();
	contactmaps = Map();
	for each  entry in get_contacts
	{
		//		info entry.get("id");
		if(get_company.get("Membership_Status") != null)
		{
			contactmaps.put("Membership_Status",get_company.get("Membership_Status"));
			contactmaps.put("Service_s",get_company.get("Service"));
			contactmaps.put("Membership_Level",get_company.get("Membership_Level_2"));
			contactmaps.put("Membership_Date",get_company.get("Membership_Date"));
			update = zoho.crm.updateRecord("Contacts",entry.get("id"),contactmaps);
			// 			update_data_map = Map();
			// 			update_dataList = List();
			// 			update_notes_map = Map();
			// 			update_content = "Membership status updated on: " + zoho.currenttime.toString("MM/dd/yyyy hh:mm:ss","GMT-04:00") + " by : " + zoho.loginuser;
			// 			update_notes_map.put("Note_Title","Membership Status -" + entry.get("Membership_Status"));
			// 			update_notes_map.put("Note_Content",update_content);
			// 			update_notes_map.put("Parent_Id",entry.get("id").toNumber());
			// 			update_notes_map.put("se_module","Contacts");
			// 			update_dataList.add(update_notes_map);
			// 			update_data_map.put("data",update_dataList);
			// 			update_notecreate = zoho.crm.createRecord("Notes",update_notes_map);
		}
	}
	response = zoho.crm.updateRecord("Accounts",CompanyID,datamaps);
	// 	data_map = Map();
	// 	dataList = List();
	// 	notes_map = Map();
	// 	content = "Membership status updated on: " + zoho.currenttime.toString("MM/dd/yyyy hh:mm:ss","GMT-04:00") + " by : " + zoho.loginuser;
	// 	notes_map.put("Note_Title","Membership Status -" + get_company.get("Membership_Status"));
	// 	notes_map.put("Note_Content",content);
	// 	notes_map.put("Parent_Id",get_company.get("id").toNumber());
	// 	notes_map.put("se_module","Accounts");
	// 	dataList.add(notes_map);
	// 	data_map.put("data",dataList);
	// 	notecreate = zoho.crm.createRecord("Notes",notes_map);
	openUrl("https://crm.zoho.com/crm/org777665990/tab/Accounts/" + CompanyID,"Parent window");
}
/*No Need Codes
	if(get_company.get("Membership_Status") == "Active Member")
	{
		datamaps.put("Active_Date",zoho.currentdate);
	}
	else if(get_company.get("Membership_Status") == "In- Active Member")
	{
		datamaps.put("In_Active_Date",zoho.currentdate);
	}
	else if(get_company.get("Membership_Status") == "Paused Member")
	{
		datamaps.put("Membership_Paused_Date",zoho.currentdate);
	}
	else if(get_company.get("Membership_Status") == "Exit Member")
	{
		datamaps.put("Exit_Date",zoho.currentdate);
	}
	else
	{
		datamaps.put("Active_Date","");
		datamaps.put("In_Active_Date","");
		datamaps.put("Membership_Paused_Date","");
		datamaps.put("Exit_Date","");
	}
	
	
	
		contactmaps.put("Active_Date",zoho.currentdate);
		}
		else if(get_company.get("Membership_Status") == "In- Active Member")
		{
			contactmaps.put("Membership_Status",get_company.get("Membership_Status"));
			contactmaps.put("In_Active_Date",zoho.currentdate);
		}
		else if(get_company.get("Membership_Status") == "Paused Member")
		{
			contactmaps.put("Membership_Status",get_company.get("Membership_Status"));
			contactmaps.put("Membership_Paused_Date",zoho.currentdate);
		}
		else if(get_company.get("Membership_Status") == "Exit Member")
		{
			contactmaps.put("Membership_Status",get_company.get("Membership_Status"));
			contactmaps.put("Exit_Date",zoho.currentdate);
		}
		
	//Other Function code service update in contacts	
		*/

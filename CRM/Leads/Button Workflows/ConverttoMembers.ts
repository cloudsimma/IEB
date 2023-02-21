leadsdetails = zoho.crm.getRecordById("Leads",leadid);
//info leadsdetails ;
//code for updating leads in member//
if(leadsdetails.get("Converted_to_Contact") == false)
{
	comapny = Map();
	//comapny.put("Account_Name",leadsdetails.get("First_Name"));
	comapny.put("Account_Name",leadsdetails.get("Company"));
	comapny.put("Email",leadsdetails.get("Email"));
	comapny.put("Annual_Revenue",leadsdetails.get("Annual_Revenue"));
	comapny.put("Owner",leadsdetails.get("Owner"));
	comapny.put("Membership_Status","Active Member");
	comapny.put("Phone",leadsdetails.get("Mobile"));
	comapny.put("Shipping_City",leadsdetails.get("City"));
	comapny.put("Shipping_Country",leadsdetails.get("Country"));
	comapny.put("Shipping_State",leadsdetails.get("State"));
	comapny.put("Shipping_Street",leadsdetails.get("Street"));
	comapny.put("Shipping_Code",leadsdetails.get("Zip_Code"));
	comapny.put("Employees",leadsdetails.get("No_of_Employees"));
	comapny.put("Phone",leadsdetails.get("Phone"));
	comapny.put("Service",leadsdetails.get("Service"));
	transcation = list();
	for each  rec in leadsdetails.get("Transactions")
	{
		trans_subform = Map();
		trans_subform.put("Amount",rec.get("Amount"));
		trans_subform.put("Item_Description",rec.get("Source"));
		trans_subform.put("Qty",rec.get("Qty"));
		trans_subform.put("Rate",rec.get("Price"));
		trans_subform.put("Sl_No",rec.get("Sl_No"));
		transcation.add(trans_subform);
	}
	comapny.put("Reference",transcation);
	//info transcation ;
	comapny.put("Status_for_Blueprint","Active Member");
	account = zoho.crm.createRecord("Accounts",comapny,{"trigger":{"workflow"}});
	info account.get("id");
	//code for updating leads in contacts//
	contactsdetails = Map();
	contactsdetails.put("First_Name",leadsdetails.get("First_Name"));
	contactsdetails.put("Last_Name",leadsdetails.get("Last_Name"));
	contactsdetails.put("Email",leadsdetails.get("Email"));
	contactsdetails.put("Phone",leadsdetails.get("Phone"));
	contactsdetails.put("Account_Name",leadsdetails.get("Company"));
	contactsdetails.put("Date_of_Birth",leadsdetails.get("Date_of_Birth"));
	contactsdetails.put("Mailing_City",leadsdetails.get("City"));
	contactsdetails.put("Mailing_Country",leadsdetails.get("Country"));
	contactsdetails.put("Description",leadsdetails.get("Description"));
	contactsdetails.put("Lead_Source",leadsdetails.get("Lead_Source"));
	contactsdetails.put("Phone",leadsdetails.get("Phone"));
	contactsdetails.put("Spouse_Name",leadsdetails.get("Spouse_Name"));
	contactsdetails.put("Mailing_State",leadsdetails.get("State"));
	contactsdetails.put("Mailing_Street",leadsdetails.get("Street"));
	contactsdetails.put("Mailing_Zip",leadsdetails.get("Zip_Code"));
	contactsdetails.put("Website",leadsdetails.get("Website"));
	contactsdetails.put("Service_s",leadsdetails.get("Service"));
	contactsdetails.put("Old_Lead_Status",leadsdetails.get("Old_Lead_Status"));
	contactsdetails.put("Quality_of_Leads",leadsdetails.get("Quality_of_Leads"));
	contactsdetails.put("Followupboss",leadsdetails.get("Followupboss"));
	//contactsdetails.put("Tag_s",leadsdetails.get("Tag_s"));
	contact = zoho.crm.createRecord("Contacts",contactsdetails,{"trigger":{"workflow"}});
	info contact;
	UpdateMap = Map();
	UpdateMap.put("Converted_to_Contact",true);
	UpdateMap.put("Against_Member_ID",account.get("id"));
	UpdateMap.put("Against_Contact_ID",contact.get("id"));
	UpdateMap.put("Converted_Date",zoho.currentdate);
	CRM_Update = zoho.crm.updateRecord("Leads",leadid,UpdateMap,{"trigger":{"workflow"}});
	info CRM_Update;
	ReturnMsg = "Converted Successfully";
	NotesMap = Map();
	NotesMap.put("Parent_Id",account.get("id"));
	NotesMap.put("Note_Title","Lead Converted");
	//notes_map.put("Note_Title","Attended Webinar");
	NotesMap.put("Note_Content","Converted via Button(convert to member) " + zoho.currenttime + " by " + zoho.loginuser);
	NotesMap.put("$se_module","Accounts");
	response = zoho.crm.createRecord("Notes",NotesMap);
	info response;
	//For updating tag as active member//
	Status = leadsdetails.get("Lead_Status");
	GetTags = leadsdetails.get("Tag");
	dataMap = Map();
	if(GetTags.isEmpty() == false)
	{
		OldTagList = List();
		for each  oldTag in GetTags
		{
			OldTagList.removeElement(oldTag.get("name"));
		}
		get_list = list();
		if(OldTagList.contains("Active Member") == false)
		{
			TagMap = Map();
			TagMap.put("name","Active Member");
			get_list.add(TagMap);
			for each  tag in OldTagList
			{
				TagMap = Map();
				TagMap.put("name",tag);
				get_list.add(TagMap);
			}
			dataMap.put("Tag",get_list);
		}
	}
	else
	{
		tag_list = List();
		TagMap = Map();
		TagMap.put("name","Active Member");
		tag_list.add(TagMap);
		dataMap.put("Tag",tag_list);
	}
	UpdateRec = zoho.crm.updateRecord("Leads",leadid,dataMap);
	//info "UpdateRec  " + UpdateRec;
}
else
{
	ReturnMsg = "This Lead already Converted to Member and Contact";
}
res = zoho.crm.getRecordById("Leads",leadid);
//info res;
res1 = zoho.crm.getRelatedRecords("Campaigns","Leads",leadid);
//info res1;
add_list = List();
newmap = Map();
for each  rec in res1
{
	te_map = Map();
	//te_map.put("Layout","Zoho Backstage");
	te_map.put("Backstage_Role",rec.get("$member_info").get("Backstage_Role"));
	te_map.put("Backstage_No_of_Tickets",rec.get("$member_info").get("Backstage_No_of_Tickets"));
	te_map.put("Service_Status",rec.get("$member_info").get("Service_Status"));
	te_map.put("Member_Status",rec.get("$member_info").get("Member_Status"));
	info te_map;
	//te_map.put("$member_info", rec.get("$member_info"));
	te_map.put("$in_merge",true);
	/* cam1=zoho.crm.getRelatedRecords("Campaigns", "Contacts", 5293322000009067217);
info cam1; */
	resp = zoho.crm.updateRelatedRecord("Campaigns",rec.get("id"),"Contacts",res.get("Against_Contact_ID"),te_map);
	info resp;
}
// response = invokeurl
// [
// 	url :"https://www.zohoapis.com/crm/v3/Campaigns/" + rec.get("id") + "/Leads?ids=" + leadid
// 	type :DELETE
// 	connection:"crm"
// ];
// info response;
return ReturnMsg;

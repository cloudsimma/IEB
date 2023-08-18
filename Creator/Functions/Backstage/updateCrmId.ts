void backStage.updateCrmId(int attendeeId)
{
	attendeeDetail = Attendee_Details[ID == attendeeId];
	dataMap = Map();
	if(attendeeDetail.Email != "" && attendeeDetail.Email != null)
	{
		dataMap.put("Email",attendeeDetail.Email);
	}
	name = Map();
	if(attendeeDetail.First_Name != "" && attendeeDetail.First_Name != null)
	{
		name.put("first_name",attendeeDetail.First_Name);
	}
	if(attendeeDetail.Last_Name != "" && attendeeDetail.Last_Name != null)
	{
		name.put("last_name",attendeeDetail.Last_Name);
	}
	if(name.isEmpty() == False)
	{
		dataMap.put("Name",name);
	}
	if(attendeeDetail.Company_Name != "" && attendeeDetail.Company_Name != null)
	{
		dataMap.put("Company",attendeeDetail.Company_Name);
	}
	dataMap.put("Form","Zoho Backstage");
	if(attendeeDetail.ID != null)
	{
		dataMap.put("Attendee_ID",attendeeDetail.ID);
	}
	otherMap = Map();
	otherMap1 = Map();
	otherMap1.put("tasks",true);
	otherMap.put("result",otherMap1);
	create_rec = zoho.creator.createRecord("inspectorempirebuilder","ieb","Lead_Enquiry",dataMap,otherMap,"creator_connection");
	info create_rec;
	info attendeeDetail.ID;
	/* 	attendeeDetail = Attendee_Details[ID == attendeeId];
	searchLead = zoho.crm.searchRecords("Leads","(Email:equals:" + attendeeDetail.Email + ")");
	searchContact = zoho.crm.searchRecords("Contacts","(Email:equals:" + attendeeDetail.Email + ")");
	if(attendeeDetail.Email != null && attendeeDetail.Email != "")
	{
		searchLead = zoho.crm.searchRecords("Leads","(Email:equals:" + attendeeDetail.Email + ")");
		searchContact = zoho.crm.searchRecords("Contacts","(Email:equals:" + attendeeDetail.Email + ")");
		info searchLead;
		info searchContact;
		if(searchLead.size() < 1 && searchContact.size() < 1)
		{
			data_map = Map();
			if(attendeeDetail.Mobile_no != null)
			{
				data_map.put("Phone",attendeeDetail.Mobile_no);
			}
			if(attendeeDetail.Company_Name != null && attendeeDetail.Company_Name != "")
			{
				data_map.put("Company",attendeeDetail.Company_Name);
			}
			if(attendeeDetail.First_Name != null && attendeeDetail.First_Name != "")
			{
				data_map.put("First_Name",attendeeDetail.First_Name);
			}
			if(attendeeDetail.Last_Name != null && attendeeDetail.Last_Name != "")
			{
				data_map.put("Last_Name",attendeeDetail.Last_Name);
			}
			trigger_map = Map();
			trigger_map.put("trigger",{"workflow","blueprint"});
			crm_creation = zoho.crm.createRecord("Leads",data_map,trigger_map);
			if(crm_creation.containKey("id") == true)
			{
				attendeeDetail.CRM_ID=crm_creation.get("id");
			}
		}
		else if(searchContact.size() >= 1)
		{
			//update contact ID
			attendeeDetail.CRM_ID=searchContact.get(0).get("id");
		}
		else if(searchLead.size() >= 1 && searchContact.size() < 1)
		{
			attendeeDetail.CRM_ID=searchLead.get(0).get("id");
		}
	} */
}

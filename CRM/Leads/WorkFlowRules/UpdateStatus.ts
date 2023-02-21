get_leads = zoho.crm.getRecordById("Leads",leadid);
//info get_leads;
if(get_leads.get("Converted_to_Contact") == true)
{
	get_Member = zoho.crm.getRecordById("Accounts",get_leads.get("Against_Member_ID"));
	info get_Member;
	if(get_Member.get("Membership_Status") == "Active Member")
	{
		updateMap = Map();
		updateMap.put("Lead_Status","Active Member");
		response = zoho.crm.updateRecord("Leads",leadid,updateMap);
		info response;
	}
}

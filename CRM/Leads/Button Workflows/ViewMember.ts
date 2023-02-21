get_lead = zoho.crm.getRecordById("Leads",lead_ID);
// info get_lead ;
if(get_lead.get("Against_Member_ID") != null)
{
	openUrl("https://crm.zoho.com/crm/org777665990/tab/Accounts/" + get_lead.get("Against_Member_ID"),"new window");
}
else
{
	return "This Lead not yet converted to member";
}
return "";

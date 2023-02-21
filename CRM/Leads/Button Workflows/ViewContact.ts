get_lead = zoho.crm.getRecordById("Leads",lead_ID);
// info get_lead ;
if(get_lead.get("Against_Contact_ID") != null)
{
	openUrl("https://crm.zoho.com/crm/org777665990/tab/Contacts/" + get_lead.get("Against_Contact_ID"),"new window");
}
else
{
	return "This Lead not yet converted to contact";
}
return "";

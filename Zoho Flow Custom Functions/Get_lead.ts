bool Get_lead(string Lead_mail)
{
lead_search = zoho.crm.searchRecords("Leads","Email:equals:" + Lead_mail);
info lead_search.get("Converted_to_Contact");
if(lead_search.size() > 0)
{
	lead_exist = true;
}
else
{
	lead_exist = false;
}
return lead_exist;
}

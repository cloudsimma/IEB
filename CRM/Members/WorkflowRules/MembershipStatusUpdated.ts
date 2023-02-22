Response = zoho.crm.getRecordById("Accounts",id);
Membership_Date = Response.get("Membership_Date");
Email = Response.get("Email");
info Membership_Date;
if(Membership_Date != null)
{
	//info "test";
	Search_Leads = zoho.crm.searchRecords("Leads","(Email:equals:" + Email + ")");
	//info Search_Leads;
	for each  rec in Search_Leads
	{
		Update_Map = Map();
		Update_Map.put("Membership_Date",Membership_Date);
		Update_Membershipdate = zoho.crm.updateRecord("Leads",rec.get("id").toLong(),Update_Map);
		info Update_Membershipdate;
	}
}

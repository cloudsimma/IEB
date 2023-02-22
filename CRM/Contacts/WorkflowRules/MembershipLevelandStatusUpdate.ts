Contact_rec = zoho.crm.getRecordById("Contacts",Contact_ID);
//info Contact_rec.get("Account_Name").get("id");
if(Contact_rec.get("Account_Name").get("id") != null)
{
	member_det = zoho.crm.getRecordById("Accounts",Contact_rec.get("Account_Name").get("id"));
	data = Map();
	data.put("Membership_Level",member_det.get("Membership_Level_2"));
	data.put("Membership_Status",member_det.get("Membership_Status"));
	data.put("Service_s",member_det.get("Service"));
	data.put("Membership_Date",member_det.get("Membership_Date"));
	update_contact = zoho.crm.updateRecord("Contacts",Contact_ID,data);
}

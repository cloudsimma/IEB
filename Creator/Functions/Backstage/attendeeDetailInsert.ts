void backStage.attendeeDetailInsert(int attendeeId)
{
	attendeeDetail = Attendee_Details[ID == attendeeId];
	if(attendeeDetail.ID != null)
	{
		purchaseDetail = Purchaser_Detail[ID == attendeeDetail.Purchased_By];
		Search_rec_member = zoho.crm.searchRecords("Accounts","(Email:equals:" + purchaseDetail.Email + ")");
		Search_rec_contact_purchaserMail = zoho.crm.searchRecords("Contacts","(Email:equals:" + purchaseDetail.Email + ")");
		if(Search_rec_member.size() >= 1 || Search_rec_contact_purchaserMail.size() >= 1)
		{
			Search_rec_contact = zoho.crm.searchRecords("Contacts","(Email:equals:" + attendeeDetail.Email + ")");
			if(Search_rec_contact.size() >= 1)
			{
				attendeeDetail.CRM_ID=Search_rec_contact.get(0).get("id");
				info attendeeDetail;
			}
			else
			{
				createmap = Map();
				createmap.put("Email",attendeeDetail.Email);
				createmap.put("First_Name",attendeeDetail.First_Name);
				createmap.put("Last_Name",attendeeDetail.Last_Name);
				createmap.put("Phone",attendeeDetail.Mobile_no);
				createmap.put("Account_Name",purchaseDetail.CRM_ID.toString());
				createmap.put("Membership_Status","Active Member");
				resp = zoho.crm.createRecord("Contacts",createmap,{"trigger":{"workflow"}});
				if(resp.containKey("id") == true)
				{
					attendeeDetail.CRM_ID=resp.get("id");
				}
			}
		}
	}
}

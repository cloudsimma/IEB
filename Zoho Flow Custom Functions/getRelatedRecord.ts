void getRelatedRecord(int eventId, string eventName)
{
e_list = Collection();
relatedList = zoho.crm.getRelatedRecords("Leads","Campaigns",eventId);
eventDet = zoho.crm.getRecordById("Campaigns",eventId);
//info eventDet;
relatedList = relatedList.toJSONList();
if(relatedList.isEmpty() == False)
{
	for each  lead in relatedList
	{
		e_list.add(lead.getJSON("id"));
		getLead = zoho.crm.getRecordById("Leads",lead.getJSON("id"));
		//info getLead;
		contactId = getLead.get("Against_Contact_ID");
		if(contactId != null)
		{
			info contactId;
			relatedListContact = zoho.crm.getRelatedRecords("Campaigns","Contacts",contactId);
			relatedListContact = relatedListContact.toJSONList();
			newValue = Collection();
			contactEventList = Collection();
			for each  event in relatedListContact
			{
				contactEventList.add(event.getJSON("Native__Backstage__Extn__Event_Name"));
			}
			info contactEventList;
			if(contactEventList.containsValue(eventName) == False)
			{
				campaignRelatedList = zoho.crm.getRelatedRecords("Campaigns","Leads",lead.getJSON("id"));
				for each  campaign in campaignRelatedList
				{
					if(campaign.getJSON("Native__Backstage__Extn__Event_Name") == eventName)
					{
						campaignDet = Map();
						//te_map.put("Layout","Zoho Backstage");
						campaignDet.put("Backstage_Role",campaign.get("$member_info").get("Backstage_Role"));
						campaignDet.put("Backstage_No_of_Tickets",campaign.get("$member_info").get("Backstage_No_of_Tickets"));
						campaignDet.put("Service_Status",campaign.get("$member_info").get("Service_Status"));
						campaignDet.put("Member_Status",campaign.get("$member_info").get("Member_Status"));
						//te_map.put("$member_info", rec.get("$member_info"));
						campaignDet.put("$in_merge",true);
						updateContactRelatedList = zoho.crm.updateRelatedRecord("Campaigns",eventId,"Contacts",contactId,campaignDet);
						info updateContactRelatedList;
						break;
					}
				}
			}
		}
	}
}
}

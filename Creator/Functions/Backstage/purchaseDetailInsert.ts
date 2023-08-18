void backStage.purchaseDetailInsert(int purchaseId)
{
	purchaseDetail = Purchaser_Detail[ID == purchaseId];
	if(purchaseDetail.Email != null && purchaseDetail.Email != "")
	{
		Search_rec_lead = zoho.crm.searchRecords("Leads","(Email:equals:" + purchaseDetail.Email + ")");
		Search_rec_contact = zoho.crm.searchRecords("Contacts","(Email:equals:" + purchaseDetail.Email + ")");
		Search_rec_member = zoho.crm.searchRecords("Accounts","(Email:equals:" + purchaseDetail.Email + ")");
		if(Search_rec_member.size() >= 1)
		{
			purchaseDetail.CRM_ID=Search_rec_member.get(0).get("id");
		}
		else if(Search_rec_contact.size() >= 1)
		{
			purchaseDetail.CRM_ID=Search_rec_contact.get(0).get("Account_Name").get("id");
		}
		else if(Search_rec_lead.size() >= 1 && Search_rec_member.size() < 1 && Search_rec_contact.size() < 1)
		{
			purchaseDetail.CRM_ID=Search_rec_lead.get(0).get("id");
			data_map = Map();
			tags = Search_rec_lead.get(0).get("Tag");
			if(tags.isempty() == False)
			{
				tag_name = List();
				for each  ta in tags
				{
					tag_name.add(ta.get("name"));
				}
				tag_list = List();
				if(tag_name.contains("Duplicate Lead") == False)
				{
					TagMap = Map();
					TagMap.put("name","Duplicate Lead");
					tag_list.add(TagMap);
					for each  t_name in tag_name
					{
						TagMap = Map();
						TagMap.put("name",t_name);
						tag_list.add(TagMap);
					}
					data_map.put("Tag",tag_list);
				}
			}
			else
			{
				tag_list = List();
				TagMap = Map();
				TagMap.put("name","Duplicate Lead");
				tag_list.add(TagMap);
				data_map.put("Tag",tag_list);
			}
			otherparams = Map();
			update = zoho.crm.updateRecord("Leads",Search_rec_lead.get(0).get("id").toNumber(),data_map,otherparams);
		}
		else
		{
			data_map = Map();
			data_map.put("Email",purchaseDetail.Email);
			data_map.put("Lead_Source","Zoho Backstage");
			if(purchaseDetail.Mobile_no != null)
			{
				data_map.put("Phone",purchaseDetail.Mobile_no);
			}
			if(purchaseDetail.Company_Name != null && purchaseDetail.Company_Name != "")
			{
				data_map.put("Company",purchaseDetail.Company_Name);
			}
			if(purchaseDetail.First_Name != null && purchaseDetail.First_Name != "")
			{
				data_map.put("First_Name",purchaseDetail.First_Name);
			}
			if(purchaseDetail.Last_Name != null && purchaseDetail.Last_Name != "")
			{
				data_map.put("Last_Name",purchaseDetail.Last_Name);
			}
			search_url = "https://creatorapp.zoho.com/inspectorempirebuilder/ieb/#Report:Purchaser_Detail_Report?Email=" + purchaseDetail.Email;
			data_map.put("Lead_Enquiry_URL",search_url);
			trigger_map = Map();
			trigger_map.put("trigger",{"workflow","blueprint"});
			crm_creation = zoho.crm.createRecord("Leads",data_map,trigger_map);
			info crm_creation;
			if(crm_creation.containKey("id") == true)
			{
				purchaseDetail.CRM_ID=crm_creation.get("id");
			}
		}
	}
}

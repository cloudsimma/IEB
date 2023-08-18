void leadStatusUpdateInBlueprint(int LeadID)
{
	response = invokeurl
	[
		url :"https://www.zohoapis.com/crm/v3/Leads/" + LeadID + "/actions/blueprint"
		type :GET
		connection:"crm_oauth_connection"
	];
	info response;
	if(response.containKey("blueprint") == true)
	{
		res = response.get("blueprint").get("transitions");
		for each  transition in res
		{
			if(transition.get("name") == "Signed up for Membership")
			{
				//info transition.get("id");
				blueprint1 = Map();
				blueprint1.put("transition_id",transition.get("id"));
				blueprintList = List();
				blueprintList.add(blueprint1);
				param = Map();
				param.put("blueprint",blueprintList);
				response1 = invokeurl
				[
					url :"https://www.zohoapis.com/crm/v3/Leads/" + LeadID + "/actions/blueprint"
					type :PUT
					parameters:param.toString()
					connection:"crm_oauth_connection"
				];
				info response1;
				break;
			}
		}
	}
	else if(response.containKey("blueprint") == false)
	{
		if(response.containKey("code") == true)
		{
			if(response.get("code") == "RECORD_NOT_IN_PROCESS")
			{
				UpdateMap = Map();
				UpdateMap.put("Lead_Status","New Lead");
				UpdateRec = zoho.crm.updateRecord("Leads",LeadID,UpdateMap);
				//info up_rec;
				response3 = invokeurl
				[
					url :"https://www.zohoapis.com/crm/v3/Leads/" + LeadID + "/actions/blueprint"
					type :GET
					connection:"crm_oauth_connection"
				];
				//info response3;
				if(response3.containKey("blueprint") == true)
				{
					res1 = response3.get("blueprint").get("transitions");
					for each  transition1 in res1
					{
						if(transition1.get("name") == "Signed up for Membership")
						{
							//info transition.get("id");
							blueprint2 = Map();
							blueprint2.put("transition_id",transition1.get("id"));
							blueprintList1 = List();
							blueprintList1.add(blueprint2);
							param1 = Map();
							param1.put("blueprint",blueprintList1);
							response4 = invokeurl
							[
								url :"https://www.zohoapis.com/crm/v3/Leads/" + LeadID + "/actions/blueprint"
								type :PUT
								parameters:param1.toString()
								connection:"crm_oauth_connection"
							];
							info response4;
							break;
						}
					}
				}
			}
		}
	}
	/*	else
	{
		UpdateMap = Map();
		UpdateMap.put("Lead_Status","Active Member");
		UpdateRec = zoho.crm.updateRecord("Leads",LeadID,UpdateMap);
		info UpdateRec;
	}*/
}

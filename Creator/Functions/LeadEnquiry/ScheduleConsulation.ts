void Lead_Enquiry.Schedule_Consultation(int Lead_id, date booked_date)
{
	response = invokeurl
	[
		url :"https://www.zohoapis.com/crm/v3/Leads/" + Lead_id + "/actions/blueprint"
		type :GET
		connection:"crm_oauth_connection"
	];
	info response;
	//{"code":"RECORD_NOT_IN_PROCESS","details":{},"message":"record not in process","status":"error"}
	if(response.containKey("blueprint") == true)
	{
		res = response.get("blueprint").get("transitions");
		for each  transition in res
		{
			if(transition.get("name") == "Consultation Scheduled")
			{
				//info transition.get("id");
				dataMap = Map();
				dataMap.put("Subject_for_Task","Consultation - Zoho Booking");
				t = booked_date.toString("yyyy-MM-dd");
				dataMap.put("Task_Due_Date",t);
				dataMap.put("Call_Description","Consulation with lead through Zoho Booking at " + t);
				blueprint1 = Map();
				blueprint1.put("transition_id",transition.get("id"));
				blueprint1.put("data",dataMap);
				blueprintList = List();
				blueprintList.add(blueprint1);
				param = Map();
				param.put("blueprint",blueprintList);
				response1 = invokeurl
				[
					url :"https://www.zohoapis.com/crm/v3/Leads/" + Lead_id + "/actions/blueprint"
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
				info "i";
				lead_status_map = Map();
				lead_status_map.put("Lead_Status","New Lead");
				up_rec = zoho.crm.updateRecord("Leads",Lead_id,lead_status_map);
				//info up_rec;
				response3 = invokeurl
				[
					url :"https://www.zohoapis.com/crm/v3/Leads/" + Lead_id + "/actions/blueprint"
					type :GET
					connection:"crm_oauth_connection"
				];
				//info response3;
				if(response3.containKey("blueprint") == true)
				{
					res1 = response3.get("blueprint").get("transitions");
					for each  transition1 in res1
					{
						if(transition1.get("name") == "Consultation Scheduled")
						{
							//info transition.get("id");
							dataMap1 = Map();
							dataMap1.put("Subject_for_Task","Consultation - Zoho Booking");
							t = booked_date.toString("yyyy-MM-dd");
							dataMap1.put("Task_Due_Date",t);
							dataMap1.put("Call_Description","Consulation with lead through Zoho Booking at " + t);
							blueprint2 = Map();
							blueprint2.put("transition_id",transition1.get("id"));
							blueprint2.put("data",dataMap1);
							blueprintList1 = List();
							blueprintList1.add(blueprint2);
							param1 = Map();
							param1.put("blueprint",blueprintList1);
							response4 = invokeurl
							[
								url :"https://www.zohoapis.com/crm/v3/Leads/" + Lead_id + "/actions/blueprint"
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
}

void Schedule_Consultation1(int Lead_id, date booked_date)
{
response = invokeurl
[
	url :"https://www.zohoapis.com/crm/v3/Leads/" + Lead_id + "/actions/blueprint"
	type :GET
	connection:"crm"
];
info response;
res = response.get("blueprint").get("transitions");
for each  transition in res
{
	if(transition.get("name") == "Consultation Scheduled")
	{
		info transition.get("id");
		dataMap = Map();
		dataMap.put("Subject_for_Task","Consultation - Calendly Booking");
		t = booked_date.toString('yyyy-MM-dd');
		dataMap.put("Task_Due_Date",t);
		dataMap.put("Call_Description","Consulation with lead through Calendly Booking at " + t);
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
			connection:"crm"
		];
		info response1;
	}
}
}

void event_creation_in_creator(map event_data, string action_string, string startdate, string enddate)
{
data = Map();
// info event_data.get("event").get("startDateTime").get("local");
dateObj = event_data.get("event").get("startDateTime").get("local").toTime("yyyy-MM-dd'T'HH:mm:ss");
Start_date = dateObj.toString("dd-MMM-yyyy HH:mm:ss");
dateObj1 = event_data.get("event").get("endDateTime").get("local").toTime("yyyy-MM-dd'T'HH:mm:ss");
End_date = dateObj1.toString("dd-MMM-yyyy HH:mm:ss");
data = Map();
/* if(event_data.get("timezone") != "America/Chicago")
{
// 	info "if";
	start_date_time = dateObj.toString("dd-MMM-YYY HH:mm:ss","America/Chicago");
	end_date_time = dateObj1.toString("dd-MMM-YYY HH:mm:ss","America/Chicago");
}
else
{
	start_date_time = dateObj.tostring("dd-MMM-yyyy HH:mm:ss");
	end_date_time = dateObj1.tostring("dd-MMM-yyyy HH:mm:ss");
} */
data.put("Event_Name",event_data.get("name"));
data.put("Event_Start_Date",Start_date);
//.toString("dd-MMM-YYY hh:mm:ss","America/Chicago")
data.put("Event_End_Date",End_date);
data.put("Time_Zone",event_data.get("timezone"));
data.put("Event_Category",event_data.get("category"));
data.put("Backstage_Event_ID",event_data.get("id"));
// info event_data.get("venueTranslations");
if(event_data.get("venueTranslations").size() > 0)
{
	// 	info "if";
	for each  addrs in event_data.get("venueTranslations")
	{
		data.put("Street",addrs.get("street"));
		data.put("City",addrs.get("townOrCity"));
		data.put("State",addrs.get("state"));
		data.put("Location",addrs.get("name"));
		for each  zip in event_data.get("venues")
		{
			data.put("Zip_Code",zip.get("zipcode"));
		}
	}
}
for each  rec in event_data.get("eventLanguages")
{
	if(rec.get("isDefault") == true)
	{
		ln = rec.get("name");
	}
}
data.put("Event_Language",ln);
data.put("Brand","IEB Events Brand");
data.put("Campaign_Name",event_data.get("name"));
data.put("Type_field","Zoho Backstage");
for each  res in event_data.get("eventMetas")
{
	if(res.get("eventType") == "2")
	{
		event_type = "Location Based";
	}
	if(res.get("eventType") == "3")
	{
		event_type = "Online Event";
	}
	if(res.get("eventType") == "4")
	{
		event_type = "Hybrid Event";
	}
}
data.put("Event_Type",event_type);
// info data;
/* info event_data.get("name");
// info toTime(event_data.get("startDate"),"MM,d,yyyy hh:mm:ss a","Europe/Moscow");
info event_data.get("startDate");
info event_data.get("startDate").toString("dd-MMM-YYY hh:mm:ss","America/Chicago");
info event_data.get("startDate").getTime(); */
if(action_string == "create")
{
	responce = zoho.creator.createRecord("inspectorempirebuilder","ieb","Backstage_Events",data,Map(),"creator");
	info responce;
}
if(action_string == "update" || action_string == "publish" || action_string == "republish" || action_string == "destroy")
{
	fetch_event = invokeurl
	[
		url :"https://creator.zoho.com/api/v2/inspectorempirebuilder/ieb/report/All_Backstage_Events?Backstage_Event_ID=" + event_data.get("id")
		type :GET
		connection:"creator"
	];
	if(fetch_event.get("code") == 3000)
	{
		creator_id = fetch_event.get("data").get(0).get("ID");
		if(action_string == "destroy")
		{
			data.put("Event_Status","Deleted");
		}
		update_creator = zoho.creator.updateRecord("inspectorempirebuilder","ieb","All_Backstage_Events",creator_id,data,Map(),"creator");
		info update_creator;
	}
}
}

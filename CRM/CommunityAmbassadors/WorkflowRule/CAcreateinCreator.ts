communityAmbassador = zoho.crm.getRecordById("Community_Ambassadors",communityID);
related_list = zoho.crm.getRelatedRecords("Owners5","Community_Ambassadors",communityID);
// info related_list;
creator_list = List();
SubformList = List();
for each  rec in related_list
{
	related_rec = zoho.crm.getRecordById("Contacts",rec.get("Owner1").get("id"));
	// 	info related_rec ;
	Creator_id = related_rec.get("Zoho_Creator_ID");
	creator_list.add(Creator_id);
	//info related_rec;
	//Its for subform added in Zoho Creator
	SubformMap = Map();
	SubformMap.put("Contacts",Creator_id);
	SubformMap.put("Call",related_rec.get("Call_Comment"));
	SubformMap.put("Sms",related_rec.get("SMS_Comment"));
	SubformMap.put("Email",related_rec.get("Email_Comment"));
	SubformMap.put("Date_field",zoho.currentdate);
	SubformList.add(SubformMap);
}
// info creator_list;
//info communityAmbassador;
communtiyrec = Map();
communtiyrec.put("Name",communityAmbassador.get("Name"));
communtiyrec.put("Community_AmbassadorsOwner",communityAmbassador.get("Owner").get("name"));
communtiyrec.put("Email",communityAmbassador.get("Email"));
communtiyrec.put("From_CRM_Call",true);
communtiyrec.put("Contacts",SubformList);
if(creator_list.contains(null) == false)
{
	communtiyrec.put("Contacts_List",creator_list);
}
communtiyrec.put("Is_Completed",communityAmbassador.get("Is_Completed"));
communtiyrec.put("CRM_ID",communityID);
if(communityAmbassador.get("Next_Schedule_Date") != null)
{
	communtiyrec.put("Next_Sheduled_Date",communityAmbassador.get("Next_Schedule_Date").toDate());
}
// info communtiyrec;
otherParams = Map();
resp = zoho.creator.createRecord("inspectorempirebuilder","ieb","Community_Ambassadors",communtiyrec,otherParams,"zohocreator");
info resp;
UpdateMap = Map();
UpdateMap.put("Zoho_Creator_ID",resp.get("data").get("ID"));
UpdateCRM = zoho.crm.updateRecord("Community_Ambassadors",communityID,UpdateMap);
// info UpdateCRM;
// 5293322000002697132
//No Need
//communtiyrec.put("Members",communityAmbassador.get("Members"));
/* if(communityAmbassador.get("Members") != null)
{
	var = list();
	for each  rec in communityAmbassador.get("Contactss")
	{
		subform = Map();
		if(rec.get("Member") != null)
		{
			subform.put("Member",rec.get("Member").get("Name"));
		}
		subform.put("Call",rec.get("Call"));
		subform.put("Sms",rec.get("Sms"));
		subform.put("Email",rec.get("Email"));
		if(rec.get("Date") != null && rec.get("Date") != "")
		{
			subform.put("Date_field",rec.get("Date").toDate());
		}
		var.add(subform);
	}
	// 	info var;
	communtiyrec.put("Contacts",var);
} */

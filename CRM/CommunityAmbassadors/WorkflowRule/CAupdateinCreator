communityAmbassador = zoho.crm.getRecordById("Community_Ambassadors",communityID);
related_list = zoho.crm.getRelatedRecords("Owners5","Community_Ambassadors",communityID);
//info related_list;
creator_list = List();
for each  rec in related_list
{
	related_rec = zoho.crm.getRecordById("Contacts",rec.get("Owner1").get("id"));
	Creator_id = related_rec.get("Zoho_Creator_ID");
	creator_list.add(Creator_id);
	//info related_rec;
}
//info communityAmbassador;
communtiyrec = Map();
communtiyrec.put("Name",communityAmbassador.get("Name"));
communtiyrec.put("Community_AmbassadorsOwner",communityAmbassador.get("Owner").get("Name"));
communtiyrec.put("Email",communityAmbassador.get("Email"));
if(creator_list.contains(null) == false)
{
	communtiyrec.put("Contacts_List",creator_list);
}
communtiyrec.put("Is_Completed",communityAmbassador.get("Is_Completed"));
if(communityAmbassador.get("Next_Schedule_Date") != null)
{
	communtiyrec.put("Next_Sheduled_Date",communityAmbassador.get("Next_Schedule_Date").toDate());
}
otherParams = Map();
info creator_list;
//resp=zoho.creator.createRecord("inspectorempirebuilder", "ieb", "Community_Ambassadors", communtiyrec, otherParams, "zohocreator");
resp = zoho.creator.updateRecord("inspectorempirebuilder","ieb","All_Community_Ambassadors",communityAmbassador.get("Zoho_Creator_ID"),communtiyrec,otherParams,"zohocreator");
info resp;
//No Need
//communtiyrec.put("Members",communityAmbassador.get("Members"));
/* if(communityAmbassador.get("Contactss") != null)
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
	communtiyrec.put("Members",var);
} */

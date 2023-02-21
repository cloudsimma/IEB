records = zoho.creator.getRecords("inspectorempirebuilder","ieb","All_Lead_Enquiries","Email == \"" + mail + "\"",1,200,"zohocreator");
//info records.get("data");
if(records.isEmpty() == False)
{
	for each  rec in records.get("data")
	{
		//https://creator.zoho.com/api/v2/jason18/zylker-store/form/Orders/3888833000000114027
		if(rec.get("ID") != null && rec.get("ID") != "")
		{
			url = "https://creatorapp.zoho.com/api/v2/inspectorempirebuilder/ieb/report/All_Lead_Enquiries/" + rec.get("ID");
			delete_rec = invokeurl
			[
				url :url
				type :DELETE
				connection:"zohocreator"
			];
			//info delete_rec;
			//info url;
		}
	}
}

response = invokeurl
[
	url :"https://www.zohoapis.com/crm/v3/settings/tags?module=Leads"
	type :GET
	connection:"crm"
];
//info response;
GetLead = zoho.crm.getRecordById("Leads",LeadID);
Status = GetLead.get("Lead_Status");
GetTags = GetLead.get("Tag");
OldTagList = List();
for each  oldTag in GetTags
{
	OldTagList.add(oldTag.get("name"));
}
OldTagList.add(Status);
info "Old " + OldTagList;
if(OldTagList.contains("Consultation Scheduled") && OldTagList.contains("Consultation Completed"))
{
	OldTagList.removeElement("Consultation Scheduled");
}
if(OldTagList.contains("Attended Webinar") && OldTagList.contains("Signed up for Webinar"))
{
	OldTagList.removeElement("Signed up for Webinar");
}
if(OldTagList.contains("Attended RGT") && OldTagList.contains("Signed up for RGT"))
{
	OldTagList.removeElement("Signed up for RGT");
}
info "New List " + OldTagList;
TagList = List();
count = 0;
for each  rec in response.get("tags")
{
	info rec.get("name");
	if(OldTagList.contains(rec.get("name")))
	{
		count = count + 1;
		TagMap = Map();
		TagMap.put("name",rec.get("name"));
		TagMap.put("id",rec.get("id"));
		TagList.add(TagMap);
	}
}
info count;
NewTag = Map();
NewTag.put("Tag",TagList);
UpdateRec = zoho.crm.updateRecord("Leads",LeadID,NewTag);
info "UpdateRec  " + UpdateRec;
/* Its Useful code
if(OldTagList.contains(rec.get("name")) || Status == rec.get("name"))
	{
		if(Status == "Consultation Completed")
		{
			if(rec.get("name") != "Consultation Scheduled")
			{
				count = count + 1;
				TagMap.put("name",rec.get("name"));
				TagMap.put("id",rec.get("id"));
				TagList.add(TagMap);
			}
		}
		else if(Status == "Attended Webinar")
		{
			if(rec.get("name") != "Signed up for Webinar")
			{
				count = count + 1;
				TagMap.put("name",rec.get("name"));
				TagMap.put("id",rec.get("id"));
				TagList.add(TagMap);
			}
		}
		else if(Status == "Attended RGT")
		{
			if(rec.get("name") != "Signed up for RGT")
			{
				count = count + 1;
				TagMap.put("name",rec.get("name"));
				TagMap.put("id",rec.get("id"));
				TagList.add(TagMap);
			}
		}
		if(!OldTagList.contains("Attended RGT") || !OldTagList.contains("Attended Webinar") || !OldTagList.contains("Consultation Completed"))
		{
			info "Haii";
			count = count + 1;
			TagMap.put("name",rec.get("name"));
			TagMap.put("id",rec.get("id"));
			TagList.add(TagMap);
		}
	}*/
/* 
TagList = List();
for each tag in GetTags
{
	TagList.add(tag.get("name"));
}
TagMap = Map();
TagMap.put("name", Status);
TagList.add(TagMap);
info TagList;
NewTag =  {"Tag":[{"name":"Nurture"}]};
/// {"Tag":[{"name":"xxxxxx"}]};
response = zoho.crm.updateRecord("Leads",LeadID,NewTag);
info response;
openUrl("https://crm.zoho.com/crm/org777665990/tab/Leads/5293322000003516055","parent window"); */
//openUrl( "#Script:page.refresh", "parent window");
// New Code

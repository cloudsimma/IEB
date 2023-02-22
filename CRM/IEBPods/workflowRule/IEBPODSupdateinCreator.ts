Getpods = zoho.crm.getRecordById("IEB_PODS",iebpodsID);
// info Getpods;
CreateMap = Map();
// CreateMap.put("CRM_ID",iebpodsID);
CreateMap.put("IEB_PODS_Name",Getpods.get("Name"));
CreateMap.put("Email",Getpods.get("Email"));
CreateMap.put("Email_Opt_Out",Getpods.get("Email_Opt_Out"));
getCA_ReList = zoho.crm.getRelatedRecords("Owners16","IEB_PODS",iebpodsID);
info "getCA_ReList " + getCA_ReList;
creator_list = List();
for each  reList in getCA_ReList
{
	related_rec = zoho.crm.getRecordById("Contacts",reList.get("Owners").get("id"));
	CA_Creator_id = related_rec.get("Zoho_Creator_ID");
	creator_list.add(CA_Creator_id);
}
CreateMap.put("Contacts_form",creator_list);
CreateMap.put("From_CRM_Call",true);
otherParams = Map();
// response = zoho.creator.createRecord("inspectorempirebuilder","ieb","IEB_PODS",CreateMap,otherParams,"zohocreator");
response = zoho.creator.updateRecord("inspectorempirebuilder","ieb","All_Ieb_Pods",Getpods.get("Zoho_Creator"),CreateMap,otherParams,"zohocreator");
info response;

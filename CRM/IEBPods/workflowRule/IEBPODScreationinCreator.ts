Getpods = zoho.crm.getRecordById("IEB_PODS",iebpodsID);
// info Getpods;
getCA_ReList = zoho.crm.getRelatedRecords("Owners16","IEB_PODS",iebpodsID);
info iebpodsID;
info "getCA_ReList " + getCA_ReList;
creator_list = List();
for each  reList in getCA_ReList
{
	related_rec = zoho.crm.getRecordById("Contacts",reList.get("Owners").get("id"));
	CA_Creator_id = related_rec.get("Zoho_Creator_ID");
	creator_list.add(CA_Creator_id);
}
CreateMap = Map();
CreateMap.put("CRM_ID",iebpodsID.tolong());
info CreateMap.get("CRM_ID");
CreateMap.put("IEB_PODS_Name",Getpods.get("Name"));
CreateMap.put("Email",Getpods.get("Email"));
CreateMap.put("Email_Opt_Out",Getpods.get("Email_Opt_Out"));
CreateMap.put("Contacts_form",creator_list);
CreateMap.put("From_CRM_Call",true);
otherParams = Map();
response = zoho.creator.createRecord("inspectorempirebuilder","ieb","IEB_PODS",CreateMap,otherParams,"zohocreator");
info response;
cr_id = ifnull(response.get("data").get("ID"),"");
info cr_id;
UpdateMap = Map();
UpdateMap.put("Zoho_Creator",cr_id);
update_resp = zoho.crm.updateRecord("IEB_PODS",iebpodsID,UpdateMap);
info update_resp;
// 5293322000001773001

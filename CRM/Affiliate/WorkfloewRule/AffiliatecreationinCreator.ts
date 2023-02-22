affiliat = zoho.crm.getRecordById("Affiliate",id);
info affiliat;
data = Map();
data.put("Affiliate_Name",affiliat.get("Name"));
data.put("Email",affiliat.get("Email"));
//data.put("Reference_Url",affiliat.get("Reference_URL"));
if(affiliat.get("Reference_URL") != null)
{
	mp = Map();
	mp.put("value","URL");
	mp.put("url",affiliat.get("Reference_URL"));
	mp.put("title","URL");
	data.put("Reference_Url",mp);
}
data.put("Software",affiliat.get("Software"));
data.put("Price",affiliat.get("Price"));
if(affiliat.get("Expiry_Date") != null && affiliat.get("Expiry_Date") != "")
{
	data.put("Expiry_Date",affiliat.get("Expiry_Date").toDate());
}
data.put("CRM_ID",id);
// data.put("From_CRM_Call",true);
data.put("From_CRM_Call",true);
new = Map();
create = zoho.creator.createRecord("inspectorempirebuilder","ieb","Affiliate",data,new,"zohocreator");
info create;
UpdateMap = Map();
UpdateMap.put("Zoho_Creator_ID",create.get("data").get("ID"));
UpdateCRM = zoho.crm.updateRecord("Affiliate",id,UpdateMap);
info UpdateCRM;

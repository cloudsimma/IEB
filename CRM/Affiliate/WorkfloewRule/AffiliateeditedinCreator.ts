affiliat = zoho.crm.getRecordById("Affiliate",RecID);
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
data.put("From_CRM_Call",true);
new = Map();
response = zoho.creator.updateRecord("inspectorempirebuilder","ieb","All_Affiliates",affiliat.get("Zoho_Creator_ID"),data,new,"zohocreator");
info response;

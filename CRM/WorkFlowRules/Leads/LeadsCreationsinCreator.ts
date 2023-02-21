records = zoho.crm.getRecordById("Leads",LeadID);
// info records ;
CreateMap = Map();
CreateMap.put("CRM_ID",LeadID);
CreateMap.put("First_Name",records.get("First_Name"));
CreateMap.put("Last_Name",records.get("Last_Name"));
CreateMap.put("Title",records.get("Designation"));
CreateMap.put("Phone_Number",records.get("Phone"));
CreateMap.put("Spouse_Name",records.get("Spouse_Name"));
if(records.get("Date_of_Birth") != null && records.get("Date_of_Birth") != "")
{
	CreateMap.put("Date_of_Birth",records.get("Date_of_Birth").toDate());
}
CreateMap.put("Email",records.get("Email"));
CreateMap.put("Skype_ID",records.get("Skype_ID"));
CreateMap.put("Twitter",records.get("Twitter"));
CreateMap.put("Email_Opt_Out",records.get("Email_Opt_Out"));
CreateMap.put("Services",records.get("Service"));
CreateMap.put("Company",records.get("Company"));
CreateMap.put("No_of_Employees",records.get("No_of_Employees"));
// CreateMap.put("Website", records.get("Website"));
CreateMap.put("Industry",records.get("Industry"));
CreateMap.put("Annual_Revenue",records.get("Average_Time_Spent_Minutes"));
CreateMap.put("Lead_Source",records.get("Lead_Source"));
CreateMap.put("Lead_Status",records.get("Lead_Status"));
CreateMap.put("Quality_of_Lead",records.get("Quality_of_Leads"));
CreateMap.put("Followupboss",records.get("Followupboss"));
CreateMap.put("Old_Lead_Status",records.get("Old_Lead_Status"));
CreateMap.put("Address_Information1",records.get("Street"));
CreateMap.put("City",records.get("City"));
CreateMap.put("State",records.get("State"));
CreateMap.put("Zip_Code",records.get("Zip_Code"));
CreateMap.put("Country",records.get("Country"));
CreateMap.put("Description",records.get("Description"));
if(records.get("First_Visited_Time") != null && records.get("First_Visited_Time") != "")
{
	CreateMap.put("First_Visit",records.get("First_Visited_Time").toDateTime());
}
CreateMap.put("Visitor_Score",records.get("Visitor_Score"));
// CreateMap.put("Reference", records.get("Referrer"));
CreateMap.put("Average",records.get("Average_Time_Spent_Minutes"));
if(records.get("Last_Visited_Time") != null && records.get("Last_Visited_Time") != "")
{
	CreateMap.put("Most_Recent_Visit",records.get("Last_Visited_Time").toDateTime());
}
// CreateMap.put("First",records.get("First_Visited_URL"));
CreateMap.put("Number_Of_Chats",records.get("Number_Of_Chats"));
CreateMap.put("Days",records.get("Days_Visited"));
CreateMap.put("From_CRM",true);
otherParams = Map();
// response = zoho.creator.createRecord("inspectorempirebuilder","ieb","Companies",CreateMap,otherParams,"zohocreator");
response = zoho.creator.createRecord("inspectorempirebuilder","ieb","Leads",CreateMap,otherParams,"zohocreator");
info response;
updatemap = Map();
updatemap.put("Zoho_Creator_ID",response.get("data").get("ID"));
updatecrm = zoho.crm.updateRecord("Leads",LeadID,updatemap);

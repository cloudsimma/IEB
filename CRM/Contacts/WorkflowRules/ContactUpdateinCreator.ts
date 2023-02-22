//getMember = zoho.crm.getRecordById("Contacts",MemberID);
// info getMember;
//info getMember.get("Website") ;
//GetAllContacts = zoho.crm.getRecords("Contacts", 1, 100);
// count = 0;
// GetAllContacts = zoho.crm.searchRecords("Contacts","(Zoho_Creator_ID:equals:null)");
// info GetAllContacts;
//  count = 0;
//  for each  rec in GetAllContacts
//  {
//      info rec.get("Zoho_Creator_ID") ;
// 	if(rec.get("Zoho_Creator_ID") == "" || rec.get("Zoho_Creator_ID") == null)
// 	{
// 		info rec.get("Role") + "ID  " + rec.get("Zoho_Creator_ID");
// 		count = count + 1;
// 		    }
// 		}
// info count ;
// for each cont in GetAllContacts
// {
// 	info cont.get("id");
// 	if ( cont.get("Old_Lead_Status") != "" && cont.get("Old_Lead_Status") != null) 
//     {
// 	count = count + 1;
//	MemberID = rec.get("id");*/
try 
{
	getMember = zoho.crm.getRecordById("Contacts",MemberID);
	// info getMember;
	createmap = Map();
	createmap.put("Contact_Owner",getMember.get("Owner").get("name"));
	createmap.put("Email",getMember.get("Email"));
	createmap.put("Name",getMember.get("Full_Name"));
	createmap.put("Phone_Number",getMember.get("Phone"));
	createmap.put("Mobile",getMember.get("Mobile"));
	if(getMember.get("Account_Name") != null)
	{
		getAccount = zoho.crm.getRecordById("Accounts",getMember.get("Account_Name").get("id"));
		createmap.put("Companies",getAccount.get("Zoho_Creator_ID"));
	}
	if(getMember.get("Date_of_Birth") != null)
	{
		createmap.put("Date_of_Birth",getMember.get("Date_of_Birth").toDate());
	}
	if(getMember.get("Membership_Date") != null)
	{
		createmap.put("Membership_Date",getMember.get("Membership_Date").toDate());
	}
	if(getMember.get("Phone_Number") == true)
	{
		createmap.put("SMS_Number",ifnull(getMember.get("Phone"),""));
	}
	else
	{
		createmap.put("SMS_Number",ifnull(getMember.get("SMS_Number"),""));
	}
	createmap.put("SMS_Number_same_as_Phone_Number",getMember.get("Phone_Number"));
	createmap.put("Tshirt",getMember.get("SHIRT"));
	createmap.put("Membership",getMember.get("Membership_Level"));
	createmap.put("Tags",getMember.get("Tag_s"));
	createmap.put("Lead_Source",getMember.get("Lead_Source"));
	if(getMember.get("Close_Date") != "" && getMember.get("Close_Date") != null)
	{
		createmap.put("Close_Date",getMember.get("Close_Date").toDate());
	}
	createmap.put("Commission",getMember.get("Commission"));
	createmap.put("Spouse_Name",getMember.get("Spouse_Name"));
	//createmap.put("Website",getMember.get("Website"));
	if(getMember.get("Website") != "" && getMember.get("Website") != null)
	{
		url_map = Map();
		url_map.put("url",getMember.get("Website"));
		createmap.put("Website",url_map);
	}
	createmap.put("PEB",getMember.get("PEB"));
	if(getMember.get("Hot_listed") != null)
	{
		createmap.put("Hot_listed",getMember.get("Hot_listed").toDate());
	}
	createmap.put("IEB",getMember.get("IEB"));
	createmap.put("CRM_ID",MemberID);
	info "CRM ID   --" + MemberID;
	getCA_ReList = zoho.crm.getRelatedRecords("Community_Ambassadors5","Contacts",MemberID);
	//info "getCA_ReList " + getCA_ReList;
	creator_list = List();
	for each  reList in getCA_ReList
	{
		related_rec = zoho.crm.getRecordById("Community_Ambassadors",reList.get("Community_Ambassadors").get("id"));
		CA_Creator_id = related_rec.get("Zoho_Creator_ID");
		creator_list.add(CA_Creator_id);
	}
	createmap.put("Community_Ambassadors",creator_list);
	getieb_relist = zoho.crm.getRelatedRecords("IEB_PODS6","Contacts",MemberID);
	creator_related = List();
	for each  relatedlist in getieb_relist
	{
		pods_related = zoho.crm.getRecordById("IEB_PODS",relatedlist.get("IEB_PODS").get("id"));
		// 	info pods_related;
		creator_id = pods_related.get("Zoho_Creator");
		creator_related.add(creator_id);
	}
	// info creator_related;
	createmap.put("IEB_PODS",creator_related);
	createmap.put("IEB_Pod_Member_Level",getMember.get("IEB_Pod_Member_level"));
	if(getMember.get("Tag").size() > 0)
	{
		createmap.put("Is_Tag_Added",true);
	}
	//createmap.put("Membership_Type",getMember.get("Membership_Type"));
	createmap.put("Membership_Status",getMember.get("Membership_Status"));
	if(getMember.get("Membership_Paused_Date") != null && getMember.get("Membership_Paused_Date") != "")
	{
		createmap.put("Memberhip_Paused_Date",getMember.get("Membership_Paused_Date").toDate());
	}
	if(getMember.get("Active_Date") != null && getMember.get("Active_Date") != "")
	{
		createmap.put("Active_Date",getMember.get("Active_Date").toDate());
	}
	createmap.put("Re_Activation_Requested",getMember.get("Re_Activation_Requested"));
	if(getMember.get("In_Active_Date") != null && getMember.get("In_Active_Date") != "")
	{
		createmap.put("InActive_Date",getMember.get("In_Active_Date").toDate());
	}
	if(getMember.get("Re_Activation_Date") != null && getMember.get("Re_Activation_Date") != "")
	{
		createmap.put("ReActivation_Date",getMember.get("Re_Activation_Date").toDate());
	}
	if(getMember.get("Exit_Date") != null && getMember.get("Exit_Date") != "")
	{
		createmap.put("Exit_Date",getMember.get("Exit_Date").toDate());
	}
	//createmap.put("Cancellation_Date_Requested",getMember.get("Cancellation_Date_Requested"));
	createmap.put("Old_Lead_Status",getMember.get("Old_Lead_Status"));
	//createmap.put("Cancellation_Date",getMember.get("Cancellation_Date").toDate());
	createmap.put("Quality_Leads",getMember.get("Quality_of_Leads"));
	createmap.put("Followup_Boss",getMember.get("Followupboss"));
	createmap.put("Mailing_Street",getMember.get("Mailing_Street"));
	createmap.put("Mailing_City",getMember.get("Mailing_City"));
	createmap.put("Mailing_State",getMember.get("Mailing_State"));
	createmap.put("Mailing_Country",getMember.get("Mailing_Country"));
	createmap.put("Mailing_Zip",getMember.get("Mailing_Zip"));
	createmap.put("First_Visit",getMember.get("First_Visited_Time"));
	createmap.put("Visitor_Score",getMember.get("Visitor_Score"));
	//createmap.put("Referr",ifnull(getMember.get("Referrer"),""));
	//info getMember.get("Referrer") ;
	if(getMember.get("Referrer") != "" && getMember.get("Referrer") != null)
	{
		url_map2 = Map();
		url_map2.put("url",getMember.get("Referrer"));
		createmap.put("Referr",url_map2);
	}
	createmap.put("Average_Time_Spent_Minutes",getMember.get("Average_Time_Spent_Minutes"));
	createmap.put("Most_Recent_visit",getMember.get("Last_Visited_Time"));
	//createmap.put("First_Page_Visited",getMember.get("First_Visited_URL"));
	if(getMember.get("First_Visited_URL") != "" && getMember.get("First_Visited_URL") != null)
	{
		url_map3 = Map();
		url_map3.put("url",getMember.get("First_Visited_URL"));
		createmap.put("First_Page_Visited",url_map3);
	}
	createmap.put("Number_of_Chats",getMember.get("Number_Of_Chats"));
	createmap.put("Days_Visited",getMember.get("Days_Visited"));
	createmap.put("Email_Comments",getMember.get("Email_Comment"));
	createmap.put("SMS_Comments",getMember.get("SMS_Comment"));
	createmap.put("Call_Comments",getMember.get("Call_Comment"));
	createmap.put("SMS_Number",getMember.get("SMS_Number"));
	createmap.put("SMS_opt_IN",getMember.get("SMS_opt"));
	createmap.put("Service_s",getMember.get("Service_s").toList());
	createmap.put("Division",getMember.get("Division1").toList());
	createmap.put("Role",getMember.get("Role"));
	createmap.put("Shirt_Provided",getMember.get("Shirt_Provided"));
	//createmap.put("Facebook_Group_link", getMember.get("Zoho_Creator_Link"));
	/* if(getMember.get("Zoho_Creator_Link") != "" && getMember.get("Zoho_Creator_Link") != null)
{
    this was commented by rajavel , because facebook link was updated from creator , check line 184
	url_map1 = Map();
	url_map1.put("url",getMember.get("Zoho_Creator_Link"));
	createmap.put("Facebook_Group_link",url_map1);
} */
	createmap.put("Description",getMember.get("Description"));
	createmap.put("Coaches",getMember.get("Coaches"));
	createmap.put("Member_s_Type",getMember.get("Member_s_Type"));
	createmap.put("From_CRM_Call",true);
	// info createmap;
	otherprams = Map();
	resp = zoho.creator.createRecord("inspectorempirebuilder","ieb","Contacts_form",createmap,otherprams,"zohocreator");
	info resp;
	cr_id = ifnull(resp.get("data").get("ID"),"");
	UpdateMap = Map();
	UpdateMap.put("Zoho_Creator_ID",resp.get("data").get("ID"));
	//info "Creator ID  " + resp.get("data").get("ID");
	//link = "https://app.zohocreator.com/inspectorempirebuilder/ieb/#Form:Contacts_form?recLinkID="+cr_id+"&viewLinkName=All_Contacts1&zc_NextUrl=https://creatorapp.zoho.com/inspectorempirebuilder/ieb/#Form:Data_Added_Successfully";
	link = "https://app.zohocreator.com/inspectorempirebuilder/ieb/Contacts_form/record-edit/All_Contacts1/" + cr_id + "?CRM_link=true";
	UpdateMap.put("Zoho_Creator_Link",link);
	//"https://app.zohocreator.com/inspectorempirebuilder/ieb/Contacts_form/record-edit/All_Contacts1/" + cr_id + "&CRM_link=true"
	UpdateCRM = zoho.crm.updateRecord("Contacts",MemberID,UpdateMap);
	// info UpdateCRM;
}
catch (e)
{
	log_map = Map();
	log_map.put("Module","Contacts");
	log_map.put("ID1",MemberID.tostring());
	log_map.put("Flow_Name","Contact Creation In Creator");
	log_map.put("Error",e);
	response = zoho.creator.createRecord("inspectorempirebuilder","ieb","Developer_Logs",log_map,Map(),"zohocreator");
}
// 	}
// }
//  info "count " + count;

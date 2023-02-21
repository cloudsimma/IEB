try 
{
	GetCompany = zoho.crm.getRecordById("Accounts",CompanyID);
	// info GetCompany;
	dataMap = Map();
	dataMap.put("Company_Owner",GetCompany.get("Owner").get("name"));
	dataMap.put("Company_Name",GetCompany.get("Account_Name"));
	dataMap.put("Company_Type",GetCompany.get("Account_Type"));
	if(GetCompany.get("Membership_Date") != null && GetCompany.get("Membership_Date") != "")
	{
		dataMap.put("Membership_Date",GetCompany.get("Membership_Date").toDate());
	}
	dataMap.put("Membership_Level",GetCompany.get("Membership_Level_2"));
	dataMap.put("Membership_Status",GetCompany.get("Membership_Status"));
	if(GetCompany.get("Membership_Paused_Date") != null && GetCompany.get("Membership_Paused_Date") != "")
	{
		dataMap.put("Membership_Paused_Date",GetCompany.get("Membership_Paused_Date").toDate());
	}
	dataMap.put("Email",GetCompany.get("Email"));
	dataMap.put("Phone_Number",GetCompany.get("Phone"));
	dataMap.put("Office_Phone",GetCompany.get("Office_Phone"));
	dataMap.put("Referred_By",GetCompany.get("Referred_By"));
	dataMap.put("Employees",GetCompany.get("Employees"));
	dataMap.put("Annual_Revenue",GetCompany.get("Annual_Revenue"));
	//CreateMap.put("Internal_Division", GetCompany.get("Internal_Division"));
	dataMap.put("Cancellation_Date_Requested",GetCompany.get("Cancellation_Date_Requested"));
	if(GetCompany.get("Cancellation_Date") != null && GetCompany.get("Cancellation_Date") != "")
	{
		dataMap.put("Cancellation_Date",GetCompany.get("Cancellation_Date").toDate());
	}
	dataMap.put("Re_Activation_Requested",GetCompany.get("Re_Activation_Requested"));
	if(GetCompany.get("Re_Activation_Date") != null && GetCompany.get("Re_Activation_Date") != "")
	{
		dataMap.put("Re_Activation_Date",GetCompany.get("Re_Activation_Date").toDate());
	}
	if(GetCompany.get("Exit_Date") != null && GetCompany.get("Exit_Date") != "")
	{
		dataMap.put("Exit_Date",GetCompany.get("Exit_Date").toDate());
	}
	if(GetCompany.get("Active_Date") != null && GetCompany.get("Active_Date") != "")
	{
		dataMap.put("Active_Date",GetCompany.get("Active_Date").toDate());
	}
	if(GetCompany.get("In_Active_Date") != null && GetCompany.get("In_Active_Date") != "")
	{
		dataMap.put("InActive_Date",GetCompany.get("In_Active_Date").toDate());
	}
	if(GetCompany.get("Membership_Effective_Date") != null && GetCompany.get("Membership_Effective_Date") != "")
	{
		dataMap.put("Membership_Effective_Date",GetCompany.get("Membership_Effective_Date").toDate());
	}
	dataMap.put("Shipping_Street",GetCompany.get("Shipping_Street"));
	dataMap.put("Shipping_City",GetCompany.get("Shipping_City"));
	dataMap.put("Shipping_State",GetCompany.get("Shipping_State"));
	dataMap.put("Shipping_Code",GetCompany.get("Shipping_Code"));
	dataMap.put("Shipping_Country",GetCompany.get("Shipping_Country"));
	dataMap.put("Crm_ID",CompanyID);
	serList = List();
	for each  ser in GetCompany.get("Service")
	{
		serList.add(ser);
	}
	//info serList ;
	dataMap.put("Services",serList);
	//info dataMap;
	dataMap.put("Status",GetCompany.get("Status"));
	dataMap.put("From_CRM_Call",true);
	//Need to add Subform Data
	if(GetCompany.get("Add_on_Services") != null)
	{
		var = list();
		for each  rec in GetCompany.get("Add_on_Services")
		{
			Creates = Map();
			Creates.put("Service_Name",rec.get("Service_Name"));
			if(rec.get("Posting_Date") != null && rec.get("Posting_Date") != "")
			{
				Creates.put("Posting_Date",rec.get("Posting_Date").toDate());
			}
			//info rec.get("Posting_Date").toDate();
			Creates.put("Order_Id",rec.get("Order_ID"));
			if(rec.get("Expire_Date") != null && rec.get("Expire_Date") != "")
			{
				Creates.put("Expire_Date",rec.get("Expire_Date").toDate());
			}
			Creates.put("Comments",rec.get("Comments"));
			var.add(Creates);
			// 		info var;
		}
	}
	dataMap.put("Services_Information",var);
	if(GetCompany.get("Reference") != null)
	{
		Transaction_var = list();
		for each  rec in GetCompany.get("Reference")
		{
			Transaction = Map();
			Transaction.put("Service_Name",rec.get("Amount"));
			Transaction.put("Item_Description",rec.get("Item_Description"));
			Transaction.put("Qty",rec.get("Qty"));
			Transaction.put("Rate",rec.get("Rate"));
			Transaction.put("S_No",rec.get("Sl_No"));
			Transaction.put("Amount",rec.get("Amount"));
			Transaction_var.add(Transaction);
		}
	}
	dataMap.put("Transaction",Transaction_var);
	if(GetCompany.get("Community_Ambassador") != null)
	{
		Comm_Ambassador_Id = zoho.creator.getRecords("inspectorempirebuilder","ieb","All_Community_Ambassadors","CRM_ID == " + GetCompany.get("Community_Ambassador").get("id"),1,200,"zohocreator");
		if(Comm_Ambassador_Id.get("code") == 3000)
		{
			dataMap.put("Community_Ambassadors",Comm_Ambassador_Id.get("data").get(0).get("ID").toNumber());
		}
	}
	otherParams = Map();
	//response = zoho.creator.createRecord("inspectorempirebuilder","ieb","Companies",CreateMap,otherParams,"zohocreator");
	response = zoho.creator.updateRecord("inspectorempirebuilder","ieb","All_Members",GetCompany.get("Zoho_Creator_ID").tolong(),dataMap,otherParams,"zohocreator");
	info response;
}
catch (e)
{
	log_map = Map();
	log_map.put("Module","Member");
	log_map.put("ID1",CompanyID.tostring());
	log_map.put("Flow_Name","Member Edited In Creator");
	log_map.put("Error",e);
	response = zoho.creator.createRecord("inspectorempirebuilder","ieb","Developer_Logs",log_map,Map(),"zohocreator");
}

GetCompany = zoho.crm.getRecordById("Accounts",CompanyID);
	CreateMap = Map();
	//CreateMap.put("Crm_ID",CompanyID);
	CreateMap.put("Company_Owner",GetCompany.get("Owner").get("name"));
	CreateMap.put("Company_Name",GetCompany.get("Account_Name"));
	CreateMap.put("Company_Type",GetCompany.get("Account_Type"));
	if(GetCompany.get("Membership_Date") != null && GetCompany.get("Membership_Date") != "")
	{
		CreateMap.put("Membership_Date",GetCompany.get("Membership_Date").toDate());
	}
	CreateMap.put("Membership_Level",GetCompany.get("Membership_Level_2"));
	CreateMap.put("Membership_Status",GetCompany.get("Membership_Status"));
	if(GetCompany.get("Membership_Paused_Date") != null && GetCompany.get("Membership_Paused_Date") != "")
	{
		CreateMap.put("Membership_Paused_Date",GetCompany.get("Membership_Paused_Date").toDate());
	}
	CreateMap.put("Email",GetCompany.get("Email"));
	//info  GetCompany.get("Email") ;
	CreateMap.put("Phone_Number",GetCompany.get("Phone"));
	CreateMap.put("Office_Phone",GetCompany.get("Office_Phone"));
	CreateMap.put("Referred_By",GetCompany.get("Referred_By"));
	CreateMap.put("Employees",GetCompany.get("Employees"));
	CreateMap.put("Annual_Revenue",GetCompany.get("Annual_Revenue"));
	// //CreateMap.put("Internal_Division", GetCompany.get("Internal_Division"));
	CreateMap.put("Cancellation_Date_Requested",GetCompany.get("Cancellation_Date_Requested"));
	if(GetCompany.get("Cancellation_Date") != null && GetCompany.get("Cancellation_Date") != "")
	{
		CreateMap.put("Cancellation_Date",GetCompany.get("Cancellation_Date").toDate());
	}
	CreateMap.put("Re_Activation_Requested",GetCompany.get("Re_Activation_Requested"));
	if(GetCompany.get("Re_Activation_Date") != null && GetCompany.get("Re_Activation_Date") != "")
	{
		CreateMap.put("Re_Activation_Date",GetCompany.get("Re_Activation_Date").toDate());
	}
	if(GetCompany.get("Exit_Date") != null && GetCompany.get("Exit_Date") != "")
	{
		CreateMap.put("Exit_Date",GetCompany.get("Exit_Date").toDate());
	}
	if(GetCompany.get("Active_Date") != null && GetCompany.get("Active_Date") != "")
	{
		CreateMap.put("Active_Date",GetCompany.get("Active_Date").toDate());
	}
	if(GetCompany.get("In_Active_Date") != null && GetCompany.get("In_Active_Date") != "")
	{
		CreateMap.put("InActive_Date",GetCompany.get("In_Active_Date").toDate());
	}
	if(GetCompany.get("Membership_Effective_Date") != null && GetCompany.get("Membership_Effective_Date") != "")
	{
		CreateMap.put("Membership_Effective_Date",GetCompany.get("Membership_Effective_Date").toDate());
	}
	CreateMap.put("Shipping_Street",GetCompany.get("Shipping_Street"));
	CreateMap.put("Shipping_City",GetCompany.get("Shipping_City"));
	CreateMap.put("Shipping_State",GetCompany.get("Shipping_State"));
	CreateMap.put("Shipping_Code",GetCompany.get("Shipping_Code"));
	CreateMap.put("Shipping_Country",GetCompany.get("Shipping_Country"));
	// serList = List();
	// for each ser in GetCompany.get("Service")
	// {
	// 	serList.add(ser);
	// }
	CreateMap.put("Services",GetCompany.get("Service").toList());
	CreateMap.put("Status",GetCompany.get("Status"));
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
			Creates.put("CRM_Subform_ID",rec.get("id"));
			var.add(Creates);
		}
		CreateMap.put("Services_Information",var);
	}
	//info GetCompany.get("Reference");
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
			Transaction.put("CRM_Subform_ID",rec.get("id"));
			Transaction_var.add(Transaction);
		}
		CreateMap.put("Transaction",Transaction_var);
	}
	CreateMap.put("From_CRM_Call",true);
	CreateMap.put("Crm_ID",CompanyID);
	if(GetCompany.get("Community_Ambassador") != null)
	{
		Comm_Ambassador_Id = zoho.creator.getRecords("inspectorempirebuilder","ieb","All_Community_Ambassadors","CRM_ID == " + GetCompany.get("Community_Ambassador").get("id"),1,200,"zohocreator");
		//info Comm_Ambassador_Id ;
		if(Comm_Ambassador_Id.get("code") == 3000)
		{
			CreateMap.put("Community_Ambassadors",Comm_Ambassador_Id.get("data").get(0).get("ID").toNumber());
		}
	}
	otherParams = Map();
	response = zoho.creator.createRecord("inspectorempirebuilder","ieb","Members",CreateMap,otherParams,"zohocreator");
	info response;
	UpdateMap = Map();
	UpdateMap.put("Zoho_Creator_ID",response.get("data").get("ID"));
	UpdateCRM = zoho.crm.updateRecord("Accounts",CompanyID,UpdateMap);
	info UpdateCRM;
	dataMap = Map();
	dataMap.put("Member_Name",response.get("data").get("ID"));
	dataMap.put("Member_Name1",GetCompany.get("Account_Name"));
	dataMap.put("Status",GetCompany.get("Membership_Status"));
	dataMap.put("Membership_Level",GetCompany.get("Membership_Level_2"));
	dataMap.put("Date_Time",zoho.currenttime);
	//zoho.currenttime.toString("MM/dd/yyyy hh:mm:ss","GMT-04:00")
	dataMap.put("Notes"," Record created on : " + zoho.currenttime + " by : " + zoho.loginuser);
	otherprams = Map();
	resp = zoho.creator.createRecord("inspectorempirebuilder","ieb","Member_Status_Tracking",dataMap,otherprams,"zohocreator");
	info resp;
	// 5293322000002697202
	// }
	// info "count " + count;
}
catch (e)
{
	log_map = Map();
	log_map.put("Module","Member");
	log_map.put("ID1",CompanyID.tostring());
	log_map.put("Flow_Name","Member Creation In Creator");
	log_map.put("Error",e);
	response = zoho.creator.createRecord("inspectorempirebuilder","ieb","Developer_Logs",log_map,Map(),"zohocreator");
}

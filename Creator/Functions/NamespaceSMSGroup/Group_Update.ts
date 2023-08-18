void Group_Update(int GroupID)
{
	if(GroupID != null)
	{
		GetGroup = Group_Name[ID == GroupID];
	}
	else
	{
		GetGroup = Group_Name[ID != null];
	}
	// 		info GetGroup.count();
	for each  rec in GetGroup
	{
		// 		info rec;
		if(rec.Rule_Type == "Condition Based")
		{
			//info GetContactsBuilder.size();
			// 			info rec.Rule_Type;
			GetGroup1 = SMS_Group_Master[ID == rec.SMS_Group_Master];
			// 		info "GetGroup" + GetGroup1.Contacts_Name.size();
			// 			info GetGroup1;
			rec.Contacts_Name=if(GetGroup1.ID != null,thisapp.SMS_Group_A.SMS_group_Contact(GetGroup1.ID),null);
		}
		//		}
	}
	/*
	Remove from hari 24-1-23
	***** Signle Condition Based **
			if(rec.Membership_Level != "" && rec.Membership_Level != null)
			{
				GetContactsBuilder = Contacts_form[Membership == rec.Membership_Level && Membership_Status == rec.Membership_Status].ID.getAll();
			}
			else if(rec.Services != "" && rec.Services != null)
			{
				GetContactsBuilder = Contacts_form[Service_s.contains(rec.Services) && Membership_Status == rec.Membership_Status].ID.getAll();
			}
			else if(rec.Role != "" && rec.Role != null)
			{
				GetContactsBuilder = Contacts_form[Role == rec.Role && Membership_Status == rec.Membership_Status].ID.getAll();
			}
			else if(rec.Tags != null)
			{
				GetContactsBuilder = Contacts_form[Tag_s == rec.Tags && Membership_Status == rec.Membership_Status].ID.getAll();
			}
			else if(rec.Division != "" && rec.Division != null)
			{
				GetContactsBuilder = Contacts_form[Division.contains(rec.Division) && Membership_Status == rec.Membership_Status].ID.getAll();
			}
			***** Two field Condition Based **
			if(rec.Membership_Level != "" && rec.Membership_Level != null && rec.Services != "" && rec.Services != null)
			{
				GetContactsBuilder = Contacts_form[Membership == rec.Membership_Level && Service_s.contains(rec.Services) && Membership_Status == rec.Membership_Status].ID.getAll();
			}
			else if(rec.Services != "" && rec.Services != null && rec.Role != "" && rec.Role != null)
			{
				GetContactsBuilder = Contacts_form[Service_s.contains(rec.Services) && Role == rec.Role && Membership_Status == rec.Membership_Status].ID.getAll();
			}
			else if(rec.Role != "" && rec.Role != null && rec.Tags != null)
			{
				GetContactsBuilder = Contacts_form[Role == rec.Role && Tag_s == rec.Tags && Membership_Status == rec.Membership_Status].ID.getAll();
			}
			else if(rec.Tags != null && rec.Division != "" && rec.Division != null)
			{
				GetContactsBuilder = Contacts_form[Tag_s == rec.Tags && Division.contains(rec.Division) && Membership_Status == rec.Membership_Status].ID.getAll();
			}
			else if(rec.Division != "" && rec.Division != null && rec.Membership_Level != "" && rec.Membership_Level != null)
			{
				GetContactsBuilder = Contacts_form[Membership == rec.Membership_Level && Division.contains(rec.Division) && Membership_Status == rec.Membership_Status].ID.getAll();
			}
			***** Three field Condition Based **
			if(rec.Membership_Level != "" && rec.Membership_Level != null && rec.Services != "" && rec.Services != null && rec.Role != "" && rec.Role != null)
			{
				GetContactsBuilder = Contacts_form[Membership == rec.Membership_Level && Service_s.contains(rec.Services) && Role == rec.Role && Membership_Status == rec.Membership_Status].ID.getAll();
			}
			else if(rec.Services != "" && rec.Services != null && rec.Role != "" && rec.Role != null && rec.Tags != null)
			{
				GetContactsBuilder = Contacts_form[Service_s.contains(rec.Services) && Role == rec.Role && Tag_s == rec.Tags && Membership_Status == rec.Membership_Status].ID.getAll();
			}
			else if(rec.Role != "" && rec.Role != null && rec.Tags != null && rec.Division != "" && rec.Division != null)
			{
				GetContactsBuilder = Contacts_form[Role == rec.Role && Tag_s == rec.Tags && Division.contains(rec.Division) && Membership_Status == rec.Membership_Status].ID.getAll();
			}
			else if(rec.Tags != null && rec.Division != "" && rec.Division != null && rec.Membership_Level != "" && rec.Membership_Level != null)
			{
				GetContactsBuilder = Contacts_form[Membership == rec.Membership_Level && Tag_s == rec.Tags && Division.contains(rec.Division) && Membership_Status == rec.Membership_Status].ID.getAll();
			}
			else if(rec.Division != "" && rec.Division != null && rec.Membership_Level != "" && rec.Membership_Level != null && rec.Services != "" && rec.Services != null)
			{
				GetContactsBuilder = Contacts_form[Membership == rec.Membership_Level && Service_s.contains(rec.Services) && Division.contains(rec.Division) && Membership_Status == rec.Membership_Status].ID.getAll();
			}
			***** Four field Condition Based **
			if(rec.Membership_Level != "" && rec.Membership_Level != null && rec.Services != "" && rec.Services != null && rec.Role != "" && rec.Role != null && rec.Tags != null)
			{
				GetContactsBuilder = Contacts_form[Membership == rec.Membership_Level && Service_s.contains(rec.Services) && Role == rec.Role && Tag_s == rec.Tags && Membership_Status == rec.Membership_Status].ID.getAll();
			}
			else if(rec.Services != "" && rec.Services != null && rec.Role != "" && rec.Role != null && rec.Tags != null && rec.Division != "" && rec.Division != null)
			{
				GetContactsBuilder = Contacts_form[Service_s.contains(rec.Services) && Role == rec.Role && Tag_s == rec.Tags && Division.contains(rec.Division) && Membership_Status == rec.Membership_Status].ID.getAll();
			}
			else if(rec.Role != "" && rec.Role != null && rec.Tags != null && rec.Division != "" && rec.Division != null && rec.Membership_Level != "" && rec.Membership_Level != null)
			{
				GetContactsBuilder = Contacts_form[Membership == rec.Membership_Level && Role == rec.Role && Tag_s == rec.Tags && Division.contains(rec.Division) && Membership_Status == rec.Membership_Status].ID.getAll();
			}
				else if ( rec.Tags != null && rec.Division != "" && rec.Division != null && rec.Membership_Level != "" && rec.Membership_Level != null) 
            {
				GetContactsBuilder = Contacts_form[Membership == rec.Membership_Level && Service_s.contains(rec.Services) && Role == rec.Role && Tag_s == rec.Tags && Division.contains(rec.Division)].ID.getAll();
            }
			else if ( rec.Division != "" && rec.Division != null && rec.Membership_Level != "" && rec.Membership_Level != null && rec.Services != "" && rec.Services != null) 
            {
				GetContactsBuilder = Contacts_form[Membership == rec.Membership_Level && Service_s.contains(rec.Services) && Role == rec.Role && Tag_s == rec.Tags && Division.contains(rec.Division)].ID.getAll();
            }
			else if(rec.Role != "" && rec.Role != null && rec.Tags != null && rec.Division != "" && rec.Division != null && rec.Membership_Level != "" && rec.Membership_Level != null && rec.Services != "" && rec.Services != null)
			{
				GetContactsBuilder = Contacts_form[Membership == rec.Membership_Level && Service_s.contains(rec.Services) && Role == rec.Role && Tag_s == rec.Tags && Division.contains(rec.Division) && Membership_Status == rec.Membership_Status].ID.getAll();
			}
	*/
	/*	GetContactsBuilder = Contacts_form[Service_s.contains("IEB") && Role == "Owner" && Membership_Status == "Active Member" && Membership == "Builder"].ID.getAll();
	// 	info GetContactsBuilder.count();
	GetGroup = Group_Name[Group_Name == "Builder"];
	GetGroup.Contacts_Name=GetContactsBuilder;
	//Builder Plus Group Logic
	GetContactsBP = Contacts_form[Service_s.contains("IEB") && Role == "Owner" && Membership_Status == "Active Member" && Membership == "Builder Plus"].ID.getAll();
	//	info GetContactsBP.count(); 
	GetGroup = Group_Name[Group_Name == "Builder Plus"];
	GetGroup.Contacts_Name=GetContactsBP;
	//Builder Advanced Group Logic
	GetContactsBA = Contacts_form[Service_s.contains("IEB") && Role == "Owner" && Membership_Status == "Active Member" && Membership == "Builder Advanced"].ID.getAll();
	//	info GetContactsBA.count();
	GetGroup = Group_Name[Group_Name == "Builder Advanced"];
	GetGroup.Contacts_Name=GetContactsBA;
	//Enterperneur Group Logic
	GetContactsEP = Contacts_form[Service_s.contains("IEB") && Role == "Owner" && Membership_Status == "Active Member" && Membership == "Entrepreneur"].ID.getAll();
	//	info GetContactsEP.count();
	GetGroup = Group_Name[Group_Name == "Enterperneur"];
	GetGroup.Contacts_Name=GetContactsEP;
	//Enterprise Group Logic
	GetContactsES = Contacts_form[Service_s.contains("IEB") && Role == "Owner" && Membership_Status == "Active Member" && Membership == "Enterprise"].ID.getAll();
	//info GetContactsES.count();
	GetGroup = Group_Name[Group_Name == "Enterprise"];
	GetGroup.Contacts_Name=GetContactsES;
	//Community Ambassadors Group Logic
	GetContactsCA = Contacts_form[Tag_s.contains(4383459000000412285)].ID.getAll();
	//info GetContactsCA.count();
	GetGroup = Group_Name[Group_Name == "Community Ambassador"];
	GetGroup.Contacts_Name=GetContactsCA;
	//WIEB Group Logic
	GetContactsWIEB = Contacts_form[Tag_s.contains(4383459000000412271)].ID.getAll();
	//info GetContactsWIEB.count();
	GetGroup = Group_Name[Group_Name == "WIEB"];
	GetGroup.Contacts_Name=GetContactsWIEB;
	//PEB Group Logic
	GetContactsPEB = Contacts_form[Service_s.contains("PEB") && Role == "Owner" && Membership_Status == "Active Member"].ID.getAll();
	//	info GetContactsPEB.count();
	GetGroup = Group_Name[Group_Name == "PEB"];
	GetGroup.Contacts_Name=GetContactsPEB;
	//Growth Group Logic
	GetContactsGrowth = Contacts_form[Service_s.contains("IEB") && Division.contains("Growth") && Membership_Status == "Active Member"].ID.getAll();
	//	info GetContactsGrowth.count();
	GetGroup = Group_Name[Group_Name == "Growth"];
	GetGroup.Contacts_Name=GetContactsGrowth;
	//ELT Operations Group Logic
	GetContactsELTOP = Contacts_form[Service_s.contains("IEB") && Role == "ELT" && Division.contains("Operations") && Membership_Status == "Active Member" && Membership == "Enterprise"].ID.getAll();
	//	info "GetContactsELTOPGetContactsELTOP " + GetContactsELTOP.count();
	GetGroup = Group_Name[Group_Name == "ELT Operations"];
	GetGroup.Contacts_Name=GetContactsELTOP;
	//ELT Growth Group Logic
	GetContactsELTgrowth = Contacts_form[Service_s.contains("IEB") && Role == "ELT" && Division.contains("Growth") && Membership_Status == "Active Member" && Membership == "Enterprise"].ID.getAll();
	//	info GetContactsELTgrowth.count();
	GetGroup = Group_Name[Group_Name == "ELT Growth"];
	GetGroup.Contacts_Name=GetContactsELTgrowth;
	//ELT Service Group Logic
	GetContactsELTservice = Contacts_form[Service_s.contains("IEB") && Role == "ELT" && Division.contains("Service") && Membership_Status == "Active Member" && Membership == "Enterprise"].ID.getAll();
	//	info GetContactsELTservice.count();
	GetGroup = Group_Name[Group_Name == "ELT Service"];
	GetGroup.Contacts_Name=GetContactsELTservice;
	//All ELT Group Logic
	GetContactsAllELT = Contacts_form[Service_s.contains("IEB") && Role == "ELT" && Membership_Status == "Active Member" && Membership == "Enterprise"].ID.getAll();
	//info GetContactsAllELT.count(); 
	GetGroup = Group_Name[Group_Name == "All ELT"];
	GetGroup.Contacts_Name=GetContactsAllELT;
	//All Members Group Logic
	GetContactsAllMembers = Contacts_form[Service_s.contains("IEB") && Role == "Owner" && Membership_Status == "Active Member"].ID.getAll();
	//	info GetContactsAllMembers.count();
	GetGroup = Group_Name[Group_Name == "All Members"];
	GetGroup.Contacts_Name=GetContactsAllMembers;*/
}

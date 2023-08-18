map SMS_Group_A.SMS_Group_Master_Fields()
{
	drop_down_value = Map();
	get_fields = invokeurl
	[
		url :"https://creator.zoho.com/api/v2/inspectorempirebuilder/ieb/form/SMS_Group_Master/fields"
		type :GET
		connection:"creator_connection"
	];
	//info get_fields.get("fields");
	for each  field in get_fields.get("fields")
	{
		if(field.get("link_name") == "Membership_Status")
		{
			Membership_Status_list = List();
			Membership_Status_list.add("");
			Membership_Status_list.add(null);
			Membership_Status = Map();
			for each  choice in field.get("choices")
			{
				Membership_Status_list.add(choice.get("value"));
				//info choice.get("value");
			}
			Membership_Status.put("Membership_Status",Membership_Status_list);
			drop_down_value.put(Membership_Status);
		}
		else if(field.get("link_name") == "Membership_Level")
		{
			Membership_Level_list = List();
			Membership_Level_list.add("");
			Membership_Level_list.add(null);
			Membership_Level = Map();
			for each  choice in field.get("choices")
			{
				Membership_Level_list.add(choice.get("value"));
				//info choice.get("value");
			}
			Membership_Level.put("Membership_Level",Membership_Level_list);
			drop_down_value.put(Membership_Level);
		}
		else if(field.get("link_name") == "Services")
		{
			services_list = List();
			services_list.add("");
			services_list.add(null);
			services = Map();
			for each  choice in field.get("choices")
			{
				services_list.add(choice.get("value"));
				//info choice.get("value");
			}
			services.put("Services",services_list);
			drop_down_value.put(services);
		}
		else if(field.get("link_name") == "Role")
		{
			Role_list = List();
			Role_list.add("");
			Role_list.add(null);
			Role = Map();
			for each  choice in field.get("choices")
			{
				Role_list.add(choice.get("value"));
				//info choice.get("value");
			}
			Role.put("Role",Role_list);
			drop_down_value.put(Role);
		}
		else if(field.get("link_name") == "Division")
		{
			Division_list = List();
			Division_list.add("");
			Division_list.add(null);
			Division = Map();
			for each  choice in field.get("choices")
			{
				Division_list.add(choice.get("value"));
				//info choice.get("value");
			}
			Division.put("Division",Division_list);
			drop_down_value.put(Division);
		}
	}
	//info drop_down_value;
	return drop_down_value;
}

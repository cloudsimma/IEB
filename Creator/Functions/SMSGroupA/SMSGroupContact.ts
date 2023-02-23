list SMS_Group_A.SMS_group_Contact(int con_ID)
{
	count = 0;
	membershiplevel_values = thisapp.SMS_Group_A.SMS_Group_Master_Fields();
	status_list = membershiplevel_values.get("Membership_Status");
	level_list = membershiplevel_values.get("Membership_Level");
	service_list = membershiplevel_values.get("Services");
	Role_list = membershiplevel_values.get("Role");
	divison_list = membershiplevel_values.get("Division");
	/* 	status_list = {"",null,"Active Member","Paused Member"};
	level_list = {"",null,"Builder","Builder Plus","Builder Advanced","Entrepreneur","Enterprise","On Demand"};
	service_list = {"",null,"IEB","PEB"};
	Role_list = {"",null,"Owner","GM","CEO","Teammate","ELT","High Level Leader"};
	divison_list = {"",null,"Growth","Operations","Service","Leadership","Marketing"}; */
	tags = Tags[ID != 0].ID.getAll();
	tags_list = {null};
	tags_list.addAll(tags);
	// 	info tags_list;
	//divison_list = {"",null,"Growth","Operations","Service","Leadership","Marketing"};
	cond_rec = SMS_Group_Master[ID == con_ID];
	A = if(cond_rec.Membership_Status.isEmpty(),{"Empty"},cond_rec.Membership_Status);
	B = if(cond_rec.Membership_Level.isEmpty(),{"Empty"},cond_rec.Membership_Level);
	C = if(cond_rec.Services.isEmpty(),{"Empty"},cond_rec.Services);
	D = if(cond_rec.Role.isEmpty(),{"Empty"},cond_rec.Role);
	E = if(cond_rec.Tags.isNull(),{"Empty"},cond_rec.Tags);
	//info cond_rec.Tags;
	//to be check with null also
	F = if(cond_rec.Division.isEmpty(),{"Empty"},cond_rec.Division);
	contact_list = List();
	contact_name_list = List();
	// 	d=Tags[ID == ].Tag_Name
	for each  status in A
	{
		for each  level in B
		{
			for each  service in C
			{
				for each  role in D
				{
					for each  tag in E
					{
						for each  division in F
						{
							if(tag != "Empty")
							{
								f_ta = Tags[ID == tag].ID;
							}
							combination = {status,level,service,role,tag,division};
							status_list1 = if(status != "Empty",{status},status_list);
							level_list1 = if(level != "Empty",{level},level_list);
							service_list1 = if(service != "Empty",{service},service_list);
							role_list1 = if(role != "Empty",{role},Role_list);
							tag_list1 = if(tag != "Empty",{f_ta},tags_list);
							division_list1 = if(division != "Empty",{division},divison_list);
							//info tag_list1;
							contact = Contacts_form[Membership_Status in status_list1 && Membership in level_list1 && Service_s in service_list1 && Role in role_list1 && Tag_s in tag_list1 && Division in division_list1].ID.getAll();
							contact_list.addAll(contact);
							//  contact_name - for validating the groups
							//contact_name = Contacts_form[Membership_Status in status_list1 && Membership in level_list1 && Service_s in service_list1 && Role in role_list1 && Tag_s in tag_list1 && Division in division_list1].Name.getAll();
							//contact_name_list.addAll(contact_name);
							//info contact;
							count = count + contact.size();
						}
					}
				}
			}
		}
	}
	// 	info contact_list;
	// 	info contact_list.distinct().size();
	//info contact_name_list;
	return contact_list.distinct();
}

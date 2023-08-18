void multiselect_field_setting_in_group_name(int rec_id)
{
	f_gr_set = SMS_Group_Master[ID == 4383459000000826003];
	mem_sts = f_gr_set.Membership_Status;
	// Membership_Status == ms
	mem_lv = f_gr_set.Membership_Level;
	// Membership == ml 
	srvc = f_gr_set.Services;
	//Service_s.contains(sr)
	rol = f_gr_set.Role;
	// Role == rl
	tag_ls = f_gr_set.Tags;
	//Tag_s == tg
	div = f_gr_set.Division;
	//Division.contains(di)
	info f_gr_set.Membership_Status.isBlank();
	info f_gr_set.Membership_Level.isBlank();
	info f_gr_set.Services.isBlank();
	info f_gr_set.Role.isBlank();
	info f_gr_set.Tags.isNull();
	info f_gr_set.Division.isBlank();
	GetContactsBuilder = List();
	if(f_gr_set.Membership_Status.isBlank() == false && f_gr_set.Membership_Level.isBlank() == true && f_gr_set.Services.isBlank() == true && f_gr_set.Role.isBlank() == true && f_gr_set.Tags.isNull() == true && f_gr_set.Division.isBlank() == true)
	{
		// 		info "1";
		for each  ms in f_gr_set.Membership_Status
		{
			cont_list = Contacts_form[Membership_Status == ms].ID.getAll();
			GetContactsBuilder.addAll(cont_list);
		}
	}
	if(f_gr_set.Membership_Status.isBlank() == true && f_gr_set.Membership_Level.isBlank() == false && f_gr_set.Services.isBlank() == true && f_gr_set.Role.isBlank() == true && f_gr_set.Tags.isNull() == true && f_gr_set.Division.isBlank() == true)
	{
		// 		info "2";
		for each  ms in f_gr_set.Membership_Level
		{
			cont_list = Contacts_form[Membership == ms].ID.getAll();
			GetContactsBuilder.addAll(cont_list);
		}
	}
	if(f_gr_set.Membership_Status.isBlank() == true && f_gr_set.Membership_Level.isBlank() == true && f_gr_set.Services.isBlank() == false && f_gr_set.Role.isBlank() == true && f_gr_set.Tags.isNull() == true && f_gr_set.Division.isBlank() == true)
	{
		// 		info "3";
		for each  ms in f_gr_set.Services.isBlank()
		{
			cont_list = Contacts_form[Service_s.contains(ms)].ID.getAll();
			GetContactsBuilder.addAll(cont_list);
		}
	}
	if(f_gr_set.Membership_Status.isBlank() == true && f_gr_set.Membership_Level.isBlank() == true && f_gr_set.Services.isBlank() == true && f_gr_set.Role.isBlank() == false && f_gr_set.Tags.isNull() == true && f_gr_set.Division.isBlank() == true)
	{
		// 	info "4";
		for each  ms in f_gr_set.Role
		{
			cont_list = Contacts_form[Role == ms].ID.getAll();
			GetContactsBuilder.addAll(cont_list);
		}
	}
	if(f_gr_set.Membership_Status.isBlank() == true && f_gr_set.Membership_Level.isBlank() == true && f_gr_set.Services.isBlank() == true && f_gr_set.Role.isBlank() == true && f_gr_set.Tags.isNull() == false && f_gr_set.Division.isBlank() == true)
	{
		// 		info "5";
		for each  ms in f_gr_set.Tags
		{
			cont_list = Contacts_form[Tag_s == ms.tolong()].ID.getAll();
			GetContactsBuilder.addAll(cont_list);
		}
	}
	if(f_gr_set.Membership_Status.isBlank() == true && f_gr_set.Membership_Level.isBlank() == true && f_gr_set.Services.isBlank() == true && f_gr_set.Role.isBlank() == true && f_gr_set.Tags.isNull() == true && f_gr_set.Division.isBlank() == false)
	{
		// 		info "6";
		for each  ms in f_gr_set.Division
		{
			cont_list = Contacts_form[Division.contains(ms)].ID.getAll();
			GetContactsBuilder.addAll(cont_list);
		}
	}
	if(f_gr_set.Membership_Status.isBlank() == false && f_gr_set.Membership_Level.isBlank() == false && f_gr_set.Services.isBlank() == true && f_gr_set.Role.isBlank() == true && f_gr_set.Tags.isNull() == true && f_gr_set.Division.isBlank() == true)
	{
		// 		info "7";
		for each  ms in f_gr_set.Membership_Status
		{
			for each  ml in f_gr_set.Membership_Level
			{
				cont_list = Contacts_form[Membership_Status == ms && Membership == ml].ID.getAll();
				GetContactsBuilder.addAll(cont_list);
			}
		}
	}
	if(f_gr_set.Membership_Status.isBlank() == false && f_gr_set.Membership_Level.isBlank() == true && f_gr_set.Services.isBlank() == false && f_gr_set.Role.isBlank() == true && f_gr_set.Tags.isNull() == true && f_gr_set.Division.isBlank() == true)
	{
		// 		info "8";
		for each  ms in f_gr_set.Membership_Status
		{
			for each  ml in f_gr_set.Services
			{
				cont_list = Contacts_form[Membership_Status == ms && Service_s.contains(ml)].ID.getAll();
				GetContactsBuilder.addAll(cont_list);
			}
		}
	}
	if(f_gr_set.Membership_Status.isBlank() == false && f_gr_set.Membership_Level.isBlank() == true && f_gr_set.Services.isBlank() == true && f_gr_set.Role.isBlank() == false && f_gr_set.Tags.isNull() == true && f_gr_set.Division.isBlank() == true)
	{
		// 		info "9";
		for each  ms in f_gr_set.Membership_Status
		{
			for each  ml in f_gr_set.Role
			{
				cont_list = Contacts_form[Membership_Status == ms && Role == ml].ID.getAll();
				GetContactsBuilder.addAll(cont_list);
			}
		}
	}
	if(f_gr_set.Membership_Status.isBlank() == false && f_gr_set.Membership_Level.isBlank() == true && f_gr_set.Services.isBlank() == true && f_gr_set.Role.isBlank() == true && f_gr_set.Tags.isNull() == false && f_gr_set.Division.isBlank() == true)
	{
		// 		info "10";
		for each  ms in f_gr_set.Membership_Status
		{
			for each  ml in f_gr_set.Tags
			{
				cont_list = Contacts_form[Membership_Status == ms && Tag_s == ml.tolong()].ID.getAll();
				GetContactsBuilder.addAll(cont_list);
			}
		}
	}
	if(f_gr_set.Membership_Status.isBlank() == false && f_gr_set.Membership_Level.isBlank() == true && f_gr_set.Services.isBlank() == true && f_gr_set.Role.isBlank() == true && f_gr_set.Tags.isNull() == true && f_gr_set.Division.isBlank() == false)
	{
		// 		info "11";
		for each  ms in f_gr_set.Membership_Status
		{
			for each  ml in f_gr_set.Division
			{
				cont_list = Contacts_form[Membership_Status == ms && Division.contains(ml)].ID.getAll();
				GetContactsBuilder.addAll(cont_list);
			}
		}
	}
	if(f_gr_set.Membership_Status.isBlank() == true && f_gr_set.Membership_Level.isBlank() == false && f_gr_set.Services.isBlank() == false && f_gr_set.Role.isBlank() == true && f_gr_set.Tags.isNull() == true && f_gr_set.Division.isBlank() == true)
	{
		// 		info "12";
		for each  ms in f_gr_set.Membership_Level
		{
			for each  ml in f_gr_set.Services
			{
				cont_list = Contacts_form[Membership == ms && Service_s.contains(ml)].ID.getAll();
				GetContactsBuilder.addAll(cont_list);
			}
		}
	}
	if(f_gr_set.Membership_Status.isBlank() == true && f_gr_set.Membership_Level.isBlank() == false && f_gr_set.Services.isBlank() == true && f_gr_set.Role.isBlank() == false && f_gr_set.Tags.isNull() == true && f_gr_set.Division.isBlank() == true)
	{
		// 		info "13";
		for each  ms in f_gr_set.Membership_Level
		{
			for each  ml in f_gr_set.Role
			{
				cont_list = Contacts_form[Membership == ms && Role == ml].ID.getAll();
				GetContactsBuilder.addAll(cont_list);
			}
		}
	}
	if(f_gr_set.Membership_Status.isBlank() == true && f_gr_set.Membership_Level.isBlank() == false && f_gr_set.Services.isBlank() == true && f_gr_set.Role.isBlank() == true && f_gr_set.Tags.isNull() == false && f_gr_set.Division.isBlank() == true)
	{
		// 		info "14";
		for each  ms in f_gr_set.Membership_Level
		{
			for each  ml in f_gr_set.Tags
			{
				cont_list = Contacts_form[Membership == ms && Tag_s == ml.tolong()].ID.getAll();
				GetContactsBuilder.addAll(cont_list);
			}
		}
	}
	if(f_gr_set.Membership_Status.isBlank() == true && f_gr_set.Membership_Level.isBlank() == false && f_gr_set.Services.isBlank() == true && f_gr_set.Role.isBlank() == true && f_gr_set.Tags.isNull() == true && f_gr_set.Division.isBlank() == false)
	{
		// 		info "15";
		for each  ms in f_gr_set.Membership_Level
		{
			for each  ml in f_gr_set.Division
			{
				cont_list = Contacts_form[Membership == ms && Division == ml].ID.getAll();
				GetContactsBuilder.addAll(cont_list);
			}
		}
	}
	if(f_gr_set.Membership_Status.isBlank() == true && f_gr_set.Membership_Level.isBlank() == true && f_gr_set.Services.isBlank() == false && f_gr_set.Role.isBlank() == false && f_gr_set.Tags.isNull() == true && f_gr_set.Division.isBlank() == true)
	{
		// 		info "16";
		for each  ms in f_gr_set.Services
		{
			for each  ml in f_gr_set.Role
			{
				cont_list = Contacts_form[Service_s.contains(ms) && Role == ml].ID.getAll();
				GetContactsBuilder.addAll(cont_list);
			}
		}
	}
	if(f_gr_set.Membership_Status.isBlank() == true && f_gr_set.Membership_Level.isBlank() == true && f_gr_set.Services.isBlank() == false && f_gr_set.Role.isBlank() == true && f_gr_set.Tags.isNull() == false && f_gr_set.Division.isBlank() == true)
	{
		// 		info "17";
		for each  ms in f_gr_set.Services
		{
			for each  ml in f_gr_set.Tags
			{
				cont_list = Contacts_form[Service_s.contains(ms) && Tag_s == ml.tolong()].ID.getAll();
				GetContactsBuilder.addAll(cont_list);
			}
		}
	}
	if(f_gr_set.Membership_Status.isBlank() == true && f_gr_set.Membership_Level.isBlank() == true && f_gr_set.Services.isBlank() == false && f_gr_set.Role.isBlank() == true && f_gr_set.Tags.isNull() == true && f_gr_set.Division.isBlank() == false)
	{
		// 		info "18";
		for each  ms in f_gr_set.Services
		{
			for each  ml in f_gr_set.Division
			{
				cont_list = Contacts_form[Service_s.contains(ms) && Division.contains(ml)].ID.getAll();
				GetContactsBuilder.addAll(cont_list);
			}
		}
	}
	if(f_gr_set.Membership_Status.isBlank() == true && f_gr_set.Membership_Level.isBlank() == true && f_gr_set.Services.isBlank() == true && f_gr_set.Role.isBlank() == false && f_gr_set.Tags.isNull() == false && f_gr_set.Division.isBlank() == true)
	{
		// 		info "19";
		for each  ms in f_gr_set.Role
		{
			for each  ml in f_gr_set.Tags
			{
				cont_list = Contacts_form[Role == ms && Tag_s == ml.tolong()].ID.getAll();
				GetContactsBuilder.addAll(cont_list);
			}
		}
	}
	if(f_gr_set.Membership_Status.isBlank() == true && f_gr_set.Membership_Level.isBlank() == true && f_gr_set.Services.isBlank() == true && f_gr_set.Role.isBlank() == false && f_gr_set.Tags.isNull() == true && f_gr_set.Division.isBlank() == false)
	{
		// 		info "20";
		for each  ms in f_gr_set.Role
		{
			for each  ml in f_gr_set.Division
			{
				cont_list = Contacts_form[Role == ms && Division.contains(ml)].ID.getAll();
				GetContactsBuilder.addAll(cont_list);
			}
		}
	}
	if(f_gr_set.Membership_Status.isBlank() == true && f_gr_set.Membership_Level.isBlank() == true && f_gr_set.Services.isBlank() == true && f_gr_set.Role.isBlank() == true && f_gr_set.Tags.isNull() == false && f_gr_set.Division.isBlank() == false)
	{
		// 		info "21";
		for each  ms in f_gr_set.Tags
		{
			for each  ml in f_gr_set.Division
			{
				cont_list = Contacts_form[Tag_s == ms.tolong() && Division.contains(ml)].ID.getAll();
				GetContactsBuilder.addAll(cont_list);
			}
		}
	}
	if(f_gr_set.Membership_Status.isBlank() == false && f_gr_set.Membership_Level.isBlank() == false && f_gr_set.Services.isBlank() == false && f_gr_set.Role.isBlank() == true && f_gr_set.Tags.isNull() == true && f_gr_set.Division.isBlank() == true)
	{
		// 		info "22";
		for each  ms in f_gr_set.Membership_Status
		{
			for each  ml in f_gr_set.Membership_Level
			{
				for each  sv in f_gr_set.Services
				{
					cont_list = Contacts_form[Membership_Status == ms && Membership == ml && Service_s.contains(sv)].ID.getAll();
					GetContactsBuilder.addAll(cont_list);
				}
			}
		}
	}
	if(f_gr_set.Membership_Status.isBlank() == false && f_gr_set.Membership_Level.isBlank() == false && f_gr_set.Services.isBlank() == true && f_gr_set.Role.isBlank() == false && f_gr_set.Tags.isNull() == true && f_gr_set.Division.isBlank() == true)
	{
		// 		info "23";
		for each  ms in f_gr_set.Membership_Status
		{
			for each  ml in f_gr_set.Membership_Level
			{
				for each  sv in f_gr_set.Role
				{
					cont_list = Contacts_form[Membership_Status == ms && Membership == ml && Role == sv].ID.getAll();
					GetContactsBuilder.addAll(cont_list);
				}
			}
		}
	}
	if(f_gr_set.Membership_Status.isBlank() == false && f_gr_set.Membership_Level.isBlank() == false && f_gr_set.Services.isBlank() == true && f_gr_set.Role.isBlank() == true && f_gr_set.Tags.isNull() == false && f_gr_set.Division.isBlank() == true)
	{
		// 		info "24";
		for each  ms in f_gr_set.Membership_Status
		{
			for each  ml in f_gr_set.Membership_Level
			{
				for each  sv in f_gr_set.Tags
				{
					cont_list = Contacts_form[Membership_Status == ms && Membership == ml && Tag_s == sv.tolong()].ID.getAll();
					GetContactsBuilder.addAll(cont_list);
				}
			}
		}
	}
	if(f_gr_set.Membership_Status.isBlank() == false && f_gr_set.Membership_Level.isBlank() == false && f_gr_set.Services.isBlank() == true && f_gr_set.Role.isBlank() == true && f_gr_set.Tags.isNull() == true && f_gr_set.Division.isBlank() == false)
	{
		// 		info "25";
		for each  ms in f_gr_set.Membership_Status
		{
			for each  ml in f_gr_set.Membership_Level
			{
				for each  sv in f_gr_set.Division
				{
					cont_list = Contacts_form[Membership_Status == ms && Membership == ml && Division.contains(sv)].ID.getAll();
					GetContactsBuilder.addAll(cont_list);
				}
			}
		}
	}
	if(f_gr_set.Membership_Status.isBlank() == false && f_gr_set.Membership_Level.isBlank() == true && f_gr_set.Services.isBlank() == false && f_gr_set.Role.isBlank() == false && f_gr_set.Tags.isNull() == true && f_gr_set.Division.isBlank() == true)
	{
		// 		info "26";
		for each  ms in f_gr_set.Membership_Status
		{
			for each  ml in f_gr_set.Services
			{
				for each  sv in f_gr_set.Role
				{
					cont_list = Contacts_form[Membership_Status == ms && Service_s.contains(ml) && Role == sv].ID.getAll();
					GetContactsBuilder.addAll(cont_list);
				}
			}
		}
	}
	if(f_gr_set.Membership_Status.isBlank() == false && f_gr_set.Membership_Level.isBlank() == true && f_gr_set.Services.isBlank() == false && f_gr_set.Role.isBlank() == true && f_gr_set.Tags.isNull() == false && f_gr_set.Division.isBlank() == true)
	{
		// 		info "27";
		for each  ms in f_gr_set.Membership_Status
		{
			for each  ml in f_gr_set.Services
			{
				for each  sv in f_gr_set.Tags
				{
					cont_list = Contacts_form[Membership_Status == ms && Service_s.contains(ml) && Tag_s == sv.tolong()].ID.getAll();
					GetContactsBuilder.addAll(cont_list);
				}
			}
		}
	}
	if(f_gr_set.Membership_Status.isBlank() == false && f_gr_set.Membership_Level.isBlank() == true && f_gr_set.Services.isBlank() == false && f_gr_set.Role.isBlank() == true && f_gr_set.Tags.isNull() == true && f_gr_set.Division.isBlank() == false)
	{
		// 		info "28";
		for each  ms in f_gr_set.Membership_Status
		{
			for each  ml in f_gr_set.Services
			{
				for each  sv in f_gr_set.Division
				{
					cont_list = Contacts_form[Membership_Status == ms && Service_s.contains(ml) && Division.contains(sv)].ID.getAll();
					GetContactsBuilder.addAll(cont_list);
				}
			}
		}
	}
	if(f_gr_set.Membership_Status.isBlank() == false && f_gr_set.Membership_Level.isBlank() == true && f_gr_set.Services.isBlank() == true && f_gr_set.Role.isBlank() == false && f_gr_set.Tags.isNull() == false && f_gr_set.Division.isBlank() == true)
	{
		// 		info "29";
		for each  ms in f_gr_set.Membership_Status
		{
			for each  ml in f_gr_set.Role
			{
				for each  sv in f_gr_set.Tags
				{
					cont_list = Contacts_form[Membership_Status == ms && Role == ml && Tag_s == sv.tolong()].ID.getAll();
					GetContactsBuilder.addAll(cont_list);
				}
			}
		}
	}
	if(f_gr_set.Membership_Status.isBlank() == false && f_gr_set.Membership_Level.isBlank() == true && f_gr_set.Services.isBlank() == true && f_gr_set.Role.isBlank() == false && f_gr_set.Tags.isNull() == true && f_gr_set.Division.isBlank() == false)
	{
		// 		info "30";
		for each  ms in f_gr_set.Membership_Status
		{
			for each  ml in f_gr_set.Role
			{
				for each  sv in f_gr_set.Division
				{
					cont_list = Contacts_form[Membership_Status == ms && Role == ml && Division.contains(sv)].ID.getAll();
					GetContactsBuilder.addAll(cont_list);
				}
			}
		}
	}
	if(f_gr_set.Membership_Status.isBlank() == false && f_gr_set.Membership_Level.isBlank() == true && f_gr_set.Services.isBlank() == true && f_gr_set.Role.isBlank() == true && f_gr_set.Tags.isNull() == false && f_gr_set.Division.isBlank() == false)
	{
		// 		info "31";
		for each  ms in f_gr_set.Membership_Status
		{
			for each  ml in f_gr_set.Tags
			{
				for each  sv in f_gr_set.Division
				{
					cont_list = Contacts_form[Membership_Status == ms && Tag_s == ml.tolong() && Division.contains(sv)].ID.getAll();
					GetContactsBuilder.addAll(cont_list);
				}
			}
		}
	}
	if(f_gr_set.Membership_Status.isBlank() == true && f_gr_set.Membership_Level.isBlank() == false && f_gr_set.Services.isBlank() == false && f_gr_set.Role.isBlank() == false && f_gr_set.Tags.isNull() == true && f_gr_set.Division.isBlank() == true)
	{
		// 		info "32";
		for each  ms in f_gr_set.Membership_Level
		{
			for each  ml in f_gr_set.Services
			{
				for each  sv in f_gr_set.Role
				{
					cont_list = Contacts_form[Membership == ms && Service_s.contains(ml) && Role == sv].ID.getAll();
					GetContactsBuilder.addAll(cont_list);
				}
			}
		}
	}
	if(f_gr_set.Membership_Status.isBlank() == true && f_gr_set.Membership_Level.isBlank() == false && f_gr_set.Services.isBlank() == false && f_gr_set.Role.isBlank() == true && f_gr_set.Tags.isNull() == false && f_gr_set.Division.isBlank() == true)
	{
		// 		info "33";
		for each  ms in f_gr_set.Membership_Level
		{
			for each  ml in f_gr_set.Services
			{
				for each  sv in f_gr_set.Tags
				{
					cont_list = Contacts_form[Membership == ms && Service_s.contains(ml) && Tag_s == sv.tolong()].ID.getAll();
					GetContactsBuilder.addAll(cont_list);
				}
			}
		}
	}
	if(f_gr_set.Membership_Status.isBlank() == true && f_gr_set.Membership_Level.isBlank() == false && f_gr_set.Services.isBlank() == false && f_gr_set.Role.isBlank() == true && f_gr_set.Tags.isNull() == true && f_gr_set.Division.isBlank() == false)
	{
		// 		info "34";
		for each  ms in f_gr_set.Membership_Level
		{
			for each  ml in f_gr_set.Services
			{
				for each  sv in f_gr_set.Division
				{
					cont_list = Contacts_form[Membership == ms && Service_s.contains(ml) && Division.contains(sv)].ID.getAll();
					GetContactsBuilder.addAll(cont_list);
				}
			}
		}
	}
	if(f_gr_set.Membership_Status.isBlank() == true && f_gr_set.Membership_Level.isBlank() == false && f_gr_set.Services.isBlank() == true && f_gr_set.Role.isBlank() == false && f_gr_set.Tags.isNull() == false && f_gr_set.Division.isBlank() == true)
	{
		// 		info "35";
		for each  ms in f_gr_set.Membership_Level
		{
			for each  ml in f_gr_set.Role
			{
				for each  sv in f_gr_set.Tags
				{
					cont_list = Contacts_form[Membership == ms && Role == ml && Tag_s == sv.tolong()].ID.getAll();
					GetContactsBuilder.addAll(cont_list);
				}
			}
		}
	}
	if(f_gr_set.Membership_Status.isBlank() == true && f_gr_set.Membership_Level.isBlank() == false && f_gr_set.Services.isBlank() == true && f_gr_set.Role.isBlank() == false && f_gr_set.Tags.isNull() == true && f_gr_set.Division.isBlank() == false)
	{
		// 		info "36";
		for each  ms in f_gr_set.Membership_Level
		{
			for each  ml in f_gr_set.Role
			{
				for each  sv in f_gr_set.Division
				{
					cont_list = Contacts_form[Membership == ms && Role == ml && Division.contains(sv)].ID.getAll();
					GetContactsBuilder.addAll(cont_list);
				}
			}
		}
	}
	if(f_gr_set.Membership_Status.isBlank() == true && f_gr_set.Membership_Level.isBlank() == false && f_gr_set.Services.isBlank() == true && f_gr_set.Role.isBlank() == true && f_gr_set.Tags.isNull() == false && f_gr_set.Division.isBlank() == false)
	{
		// 	info "37";
		for each  ms in f_gr_set.Membership_Level
		{
			for each  ml in f_gr_set.Tags
			{
				for each  sv in f_gr_set.Division
				{
					cont_list = Contacts_form[Membership == ms && Tag_s == ml.tolong() && Division.contains(sv)].ID.getAll();
					GetContactsBuilder.addAll(cont_list);
				}
			}
		}
	}
	if(f_gr_set.Membership_Status.isBlank() == true && f_gr_set.Membership_Level.isBlank() == true && f_gr_set.Services.isBlank() == false && f_gr_set.Role.isBlank() == false && f_gr_set.Tags.isNull() == false && f_gr_set.Division.isBlank() == true)
	{
		// 	info "38";
		for each  ms in f_gr_set.Services
		{
			for each  ml in f_gr_set.Role
			{
				for each  sv in f_gr_set.Tags
				{
					cont_list = Contacts_form[Service_s.contains(ms) && Role == ml && Tag_s == sv.tolong()].ID.getAll();
					GetContactsBuilder.addAll(cont_list);
				}
			}
		}
	}
	if(f_gr_set.Membership_Status.isBlank() == true && f_gr_set.Membership_Level.isBlank() == true && f_gr_set.Services.isBlank() == false && f_gr_set.Role.isBlank() == false && f_gr_set.Tags.isNull() == true && f_gr_set.Division.isBlank() == false)
	{
		// 	info "39";
		for each  ms in f_gr_set.Services
		{
			for each  ml in f_gr_set.Role
			{
				for each  sv in f_gr_set.Division
				{
					cont_list = Contacts_form[Service_s.contains(ms) && Role == ml && Division.contains(sv)].ID.getAll();
					GetContactsBuilder.addAll(cont_list);
				}
			}
		}
	}
	if(f_gr_set.Membership_Status.isBlank() == true && f_gr_set.Membership_Level.isBlank() == true && f_gr_set.Services.isBlank() == false && f_gr_set.Role.isBlank() == true && f_gr_set.Tags.isNull() == false && f_gr_set.Division.isBlank() == false)
	{
		// 	info "40";
		for each  ms in f_gr_set.Services
		{
			for each  ml in f_gr_set.Tags
			{
				for each  sv in f_gr_set.Division
				{
					cont_list = Contacts_form[Service_s.contains(ms) && Tag_s == ml.tolong() && Division.contains(sv)].ID.getAll();
					GetContactsBuilder.addAll(cont_list);
				}
			}
		}
	}
	if(f_gr_set.Membership_Status.isBlank() == true && f_gr_set.Membership_Level.isBlank() == true && f_gr_set.Services.isBlank() == false && f_gr_set.Role.isBlank() == true && f_gr_set.Tags.isNull() == false && f_gr_set.Division.isBlank() == false)
	{
		// 	info "41";
		for each  ms in f_gr_set.Role
		{
			for each  ml in f_gr_set.Tags
			{
				for each  sv in f_gr_set.Division
				{
					cont_list = Contacts_form[Role == ms && Tag_s == ml.tolong() && Division.contains(sv)].ID.getAll();
					GetContactsBuilder.addAll(cont_list);
				}
			}
		}
	}
	if(f_gr_set.Membership_Status.isBlank() == false && f_gr_set.Membership_Level.isBlank() == false && f_gr_set.Services.isBlank() == false && f_gr_set.Role.isBlank() == false && f_gr_set.Tags.isNull() == true && f_gr_set.Division.isBlank() == true)
	{
		// 	info "42";
		for each  ms in f_gr_set.Membership_Status
		{
			for each  ml in f_gr_set.Membership_Level
			{
				for each  sv in f_gr_set.Services
				{
					for each  rl in f_gr_set.Role
					{
						cont_list = Contacts_form[Membership_Status == ms && Membership == ml && Service_s.contains(sv) && Role == rl].ID.getAll();
						GetContactsBuilder.addAll(cont_list);
					}
				}
			}
		}
	}
	if(f_gr_set.Membership_Status.isBlank() == false && f_gr_set.Membership_Level.isBlank() == false && f_gr_set.Services.isBlank() == false && f_gr_set.Role.isBlank() == true && f_gr_set.Tags.isNull() == false && f_gr_set.Division.isBlank() == true)
	{
		// 	info "43";
		for each  ms in f_gr_set.Membership_Status
		{
			for each  ml in f_gr_set.Membership_Level
			{
				for each  sv in f_gr_set.Services
				{
					for each  rl in f_gr_set.Tags
					{
						cont_list = Contacts_form[Membership_Status == ms && Membership == ml && Service_s.contains(sv) && Tag_s == rl.tolong()].ID.getAll();
						GetContactsBuilder.addAll(cont_list);
					}
				}
			}
		}
	}
	if(f_gr_set.Membership_Status.isBlank() == false && f_gr_set.Membership_Level.isBlank() == false && f_gr_set.Services.isBlank() == false && f_gr_set.Role.isBlank() == true && f_gr_set.Tags.isNull() == true && f_gr_set.Division.isBlank() == false)
	{
		// 	info "44";
		for each  ms in f_gr_set.Membership_Status
		{
			for each  ml in f_gr_set.Membership_Level
			{
				for each  sv in f_gr_set.Services
				{
					for each  rl in f_gr_set.Division
					{
						cont_list = Contacts_form[Membership_Status == ms && Membership == ml && Service_s.contains(sv) && Division.contains(rl)].ID.getAll();
						GetContactsBuilder.addAll(cont_list);
					}
				}
			}
		}
	}
	if(f_gr_set.Membership_Status.isBlank() == false && f_gr_set.Membership_Level.isBlank() == false && f_gr_set.Services.isBlank() == true && f_gr_set.Role.isBlank() == false && f_gr_set.Tags.isNull() == false && f_gr_set.Division.isBlank() == true)
	{
		// 	info "45";
		for each  ms in f_gr_set.Membership_Status
		{
			for each  ml in f_gr_set.Membership_Level
			{
				for each  sv in f_gr_set.Role
				{
					for each  rl in f_gr_set.Tags
					{
						cont_list = Contacts_form[Membership_Status == ms && Membership == ml && Role == sv && Tag_s == rl.tolong()].ID.getAll();
						GetContactsBuilder.addAll(cont_list);
					}
				}
			}
		}
	}
	if(f_gr_set.Membership_Status.isBlank() == false && f_gr_set.Membership_Level.isBlank() == false && f_gr_set.Services.isBlank() == true && f_gr_set.Role.isBlank() == false && f_gr_set.Tags.isNull() == true && f_gr_set.Division.isBlank() == false)
	{
		// 	info "46";
		for each  ms in f_gr_set.Membership_Status
		{
			for each  ml in f_gr_set.Membership_Level
			{
				for each  sv in f_gr_set.Role
				{
					for each  rl in f_gr_set.Division
					{
						cont_list = Contacts_form[Membership_Status == ms && Membership == ml && Role == sv && Division.contains(rl)].ID.getAll();
						GetContactsBuilder.addAll(cont_list);
					}
				}
			}
		}
	}
	if(f_gr_set.Membership_Status.isBlank() == false && f_gr_set.Membership_Level.isBlank() == false && f_gr_set.Services.isBlank() == true && f_gr_set.Role.isBlank() == true && f_gr_set.Tags.isNull() == false && f_gr_set.Division.isBlank() == false)
	{
		// 	info "47";
		for each  ms in f_gr_set.Membership_Status
		{
			for each  ml in f_gr_set.Membership_Level
			{
				for each  sv in f_gr_set.Tags
				{
					for each  rl in f_gr_set.Division
					{
						cont_list = Contacts_form[Membership_Status == ms && Membership == ml && Tag_s == sv.tolong() && Division.contains(rl)].ID.getAll();
						GetContactsBuilder.addAll(cont_list);
					}
				}
			}
		}
	}
	if(f_gr_set.Membership_Status.isBlank() == false && f_gr_set.Membership_Level.isBlank() == true && f_gr_set.Services.isBlank() == false && f_gr_set.Role.isBlank() == false && f_gr_set.Tags.isNull() == false && f_gr_set.Division.isBlank() == true)
	{
		// 	info "48";
		for each  ms in f_gr_set.Membership_Status
		{
			for each  ml in f_gr_set.Services
			{
				for each  sv in f_gr_set.Role
				{
					for each  rl in f_gr_set.Tags
					{
						cont_list = Contacts_form[Membership_Status == ms && Service_s.contains(ml) && Role == sv && Tag_s == rl.tolong()].ID.getAll();
						GetContactsBuilder.addAll(cont_list);
					}
				}
			}
		}
	}
	if(f_gr_set.Membership_Status.isBlank() == false && f_gr_set.Membership_Level.isBlank() == true && f_gr_set.Services.isBlank() == false && f_gr_set.Role.isBlank() == false && f_gr_set.Tags.isNull() == true && f_gr_set.Division.isBlank() == false)
	{
		// 	info "49";
		for each  ms in f_gr_set.Membership_Status
		{
			for each  ml in f_gr_set.Services
			{
				for each  sv in f_gr_set.Role
				{
					for each  rl in f_gr_set.Division
					{
						cont_list = Contacts_form[Membership_Status == ms && Service_s.contains(ml) && Role == sv && Division.contains(rl)].ID.getAll();
						GetContactsBuilder.addAll(cont_list);
					}
				}
			}
		}
	}
	if(f_gr_set.Membership_Status.isBlank() == false && f_gr_set.Membership_Level.isBlank() == true && f_gr_set.Services.isBlank() == false && f_gr_set.Role.isBlank() == true && f_gr_set.Tags.isNull() == false && f_gr_set.Division.isBlank() == false)
	{
		// 	info "50";
		for each  ms in f_gr_set.Membership_Status
		{
			for each  ml in f_gr_set.Services
			{
				for each  sv in f_gr_set.Tags
				{
					for each  rl in f_gr_set.Division
					{
						cont_list = Contacts_form[Membership_Status == ms && Service_s.contains(ml) && Tag_s == sv.tolong() && Division.contains(rl)].ID.getAll();
						GetContactsBuilder.addAll(cont_list);
					}
				}
			}
		}
	}
	if(f_gr_set.Membership_Status.isBlank() == false && f_gr_set.Membership_Level.isBlank() == true && f_gr_set.Services.isBlank() == true && f_gr_set.Role.isBlank() == false && f_gr_set.Tags.isNull() == false && f_gr_set.Division.isBlank() == false)
	{
		// 	info "51";
		for each  ms in f_gr_set.Membership_Status
		{
			for each  ml in f_gr_set.Role
			{
				for each  sv in f_gr_set.Tags
				{
					for each  rl in f_gr_set.Division
					{
						cont_list = Contacts_form[Membership_Status == ms && Role == ml && Tag_s == sv.tolong() && Division.contains(rl)].ID.getAll();
						GetContactsBuilder.addAll(cont_list);
					}
				}
			}
		}
	}
	//verify
	if(f_gr_set.Membership_Status.isBlank() == true && f_gr_set.Membership_Level.isBlank() == false && f_gr_set.Services.isBlank() == false && f_gr_set.Role.isBlank() == false && f_gr_set.Tags.isNull() == false && f_gr_set.Division.isBlank() == true)
	{
		// 	info "51";
		for each  ms in f_gr_set.Membership_Level
		{
			for each  ml in f_gr_set.Services
			{
				for each  sv in f_gr_set.Role
				{
					for each  rl in f_gr_set.Tags
					{
						cont_list = Contacts_form[Membership == ms && Service_s.contains(ml) && Role == sv && Tag_s == rl.tolong()].ID.getAll();
						GetContactsBuilder.addAll(cont_list);
					}
				}
			}
		}
	}
	if(f_gr_set.Membership_Status.isBlank() == true && f_gr_set.Membership_Level.isBlank() == false && f_gr_set.Services.isBlank() == false && f_gr_set.Role.isBlank() == false && f_gr_set.Tags.isNull() == true && f_gr_set.Division.isBlank() == false)
	{
		// 	info "51";
		for each  ms in f_gr_set.Membership_Level
		{
			for each  ml in f_gr_set.Services
			{
				for each  sv in f_gr_set.Role
				{
					for each  rl in f_gr_set.Division
					{
						cont_list = Contacts_form[Membership == ms && Service_s.contains(ml) && Role == sv && Division.contains(rl)].ID.getAll();
						GetContactsBuilder.addAll(cont_list);
					}
				}
			}
		}
	}
	//Membership_Status == ms
	//Membership == ml 
	//Service_s.contains(sr)
	//Role == rl
	//Tag_s == ml.tolong()
	//Division.contains(di)
	// 	info GetContactsBuilder.size();
	/* 	if(f_gr_set.Membership_Status1 != null && f_gr_set.Membership_Status1 != "" && f_gr_set.Membership_Level1 != null && f_gr_set.Membership_Level1 != "" && f_gr_set.Services1 != null && f_gr_set.Services1 != "" && f_gr_set.Division1 != null && f_gr_set.Division1 != "" && f_gr_set.Tags1 != null && f_gr_set.Role1 != "" && f_gr_set.Role1 != null)
	{
		info "All";
		con_ls = List();
		for each  ms in mem_sts
		{
			for each  ml in mem_lv
			{
				for each  sr in srvc
				{
					for each  rl in rol
					{
						for each  tg in tag_ls
						{
							for each  di in div
							{
								// info "mem status: "+ms+"mem level: "+ml+ " service: "+sr+"role: "+rl+" tag: "+tg+ " division: "+di;
								cont_list = Contacts_form[Service_s.contains(sr) && Role == rl && Membership_Status == ms && Membership == ml && Division.contains(di) && Tag_s == tg].ID.getAll();
// 								cont_list = Contacts_form[a && b == rl && c == ms && Membership == ml && Division.contains(di) && Tag_s == tg].ID.getAll();
								GetContactsBuilder.addAll(cont_list);
								// 							info GetContactsBuilder;
							}
						}
					}
				}
			}
		}
	} */
	// 	info f_gr_set.Role1;
	/*	if(f_gr_set.Membership_Status1 != null && f_gr_set.Membership_Status1 != "" && f_gr_set.Membership_Level1 != null && f_gr_set.Membership_Level1 != "" && f_gr_set.Services1 != null && f_gr_set.Services1 != "" && f_gr_set.Division1 != null && f_gr_set.Division1 != "" && f_gr_set.Tags1 != null && f_gr_set.Role1.isBlank() == true)
	{
		info "out role";
		con_ls = List();
		for each  ms in mem_sts
		{
			for each  ml in mem_lv
			{
				for each  sr in srvc
				{
					for each  tg in tag_ls
					{
						for each  di in div
						{
							// 														info "mem status: "+ms+"mem level: "+ml+ " service: "+sr+"role: "+rl+" tag: "+tg+ " division: "+di;
							cont_list = Contacts_form[Service_s.contains(sr) && Membership_Status == ms && Membership == ml && Division.contains(di) && Tag_s == tg].ID.getAll();
							GetContactsBuilder.addAll(cont_list);
						}
					}
				}
			}
		}
	} */
	// 			fi_ls=[Membership Status,Membership Level,Services,Role,Tags,Division];
	// 	info GetContactsBuilder;
}

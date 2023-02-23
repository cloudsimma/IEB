void Lead_Enquiry.Zoho_bookings_lead_creation(int rec_id)
{
	rec_detail = Lead_Enquiry[ID == rec_id];
	if(rec_detail.Email != null && rec_detail.Email != "")
	{
		Search_rec_lead = zoho.crm.searchRecords("Leads","(Email:equals:" + rec_detail.Email + ")");
		Search_rec_contact = zoho.crm.searchRecords("Contacts","(Email:equals:" + rec_detail.Email + ")");
		Search_rec_member = zoho.crm.searchRecords("Accounts","(Email:equals:" + rec_detail.Email + ")");
		if(Search_rec_lead.size() < 1 && Search_rec_contact.size() < 1 && Search_rec_member.size() < 1)
		{
			data_map = Map();
			data_map.put("Email",rec_detail.Email);
			data_map.put("Lead_Source",rec_detail.Form);
			if(rec_detail.Phone_Number != null)
			{
				data_map.put("Phone",rec_detail.Phone_Number);
			}
			if(rec_detail.Company != null && rec_detail.Company != "")
			{
				data_map.put("Company",rec_detail.Company);
			}
			if(rec_detail.Name.first_name != null && rec_detail.Name.first_name != "")
			{
				data_map.put("First_Name",rec_detail.Name.first_name);
			}
			if(rec_detail.Name.last_name != null && rec_detail.Name.last_name != "")
			{
				data_map.put("Last_Name",rec_detail.Name.last_name);
			}
			if(rec_detail.What_is_your_biggest_pain_point_in_the_business != null && rec_detail.What_is_your_biggest_pain_point_in_the_business != "")
			{
				data_map.put("What_is_your_biggest_pain_point_in_the_business_to",rec_detail.What_is_your_biggest_pain_point_in_the_business);
			}
			if(rec_detail.Number_of_Current_Inspectors != null)
			{
				data_map.put("Number_of_Current_Inspectors",rec_detail.Number_of_Current_Inspectors);
			}
			if(rec_detail.Number_of_Inspections_Annually != null)
			{
				data_map.put("Number_of_Inspections_Annually",rec_detail.Number_of_Inspections_Annually);
			}
			if(rec_detail.How_can_we_help_you != null && rec_detail.How_can_we_help_you != "")
			{
				data_map.put("How_can_we_help_you",rec_detail.How_can_we_help_you);
			}
			if(rec_detail.Describe_where_you_see_your_business_in_3_years != null && rec_detail.Describe_where_you_see_your_business_in_3_years != "")
			{
				data_map.put("Describe_where_you_see_your_business_in_3_years",rec_detail.Describe_where_you_see_your_business_in_3_years);
			}
			search_url = "https://creatorapp.zoho.com/inspectorempirebuilder/ieb/#Report:All_Lead_Enquiries?Email=" + rec_detail.Email;
			data_map.put("Lead_Enquiry_URL",search_url);
			trigger_map = Map();
			trigger_map.put("trigger",{"workflow","blueprint"});
			crm_creation = zoho.crm.createRecord("Leads",data_map,trigger_map);
			//info crm_creation;
			thisapp.Lead_Enquiry.Schedule_Consultation(crm_creation.get("id"),rec_detail.Booked_Time);
		}
		else if(Search_rec_lead.size() >= 1)
		{
			note1 = Map();
			note1.put("Note_Title","New Booking - " + zoho.currenttime);
			note1.put("Note_Content","New Booking has created using this Lead Email. To View the detail about New Booking ,Please Click on the Lead Enquiry URL.");
			note1.put("Parent_Id",Search_rec_lead.get(0).get("id"));
			note1.put("se_module","Leads");
			notes_creation = zoho.crm.createRecord("Notes",note1);
			data_map = Map();
			search_url = "https://creatorapp.zoho.com/inspectorempirebuilder/ieb/#Report:All_Lead_Enquiries?Email=" + rec_detail.Email;
			tags = Search_rec_lead.get(0).get("Tag");
			if(tags.isempty() == False)
			{
				tag_name = List();
				for each  ta in tags
				{
					tag_name.add(ta.get("name"));
				}
				tag_list = List();
				if(tag_name.contains("Duplicate Lead") == False)
				{
					TagMap = Map();
					TagMap.put("name","Duplicate Lead");
					tag_list.add(TagMap);
					for each  t_name in tag_name
					{
						TagMap = Map();
						TagMap.put("name",t_name);
						tag_list.add(TagMap);
					}
					data_map.put("Tag",tag_list);
				}
			}
			else
			{
				tag_list = List();
				TagMap = Map();
				TagMap.put("name","Duplicate Lead");
				tag_list.add(TagMap);
				data_map.put("Tag",tag_list);
			}
			data_map.put("Lead_Enquiry_URL",search_url);
			trigger_map = Map();
			trigger_map.put("trigger",{"workflow"});
			update = zoho.crm.updateRecord("Leads",Search_rec_lead.get(0).get("id").toNumber(),data_map,trigger_map);
			//info " update " + update;
			thisapp.Lead_Enquiry.Schedule_Consultation(Search_rec_lead.get(0).get("id").toNumber(),rec_detail.Booked_Time);
			//thisapp.Lead_Enquiry.Send_Mail(Search_rec_lead.get(0).get("id"),rec_detail.Email,rec_id,"Lead");
		}
		else if(Search_rec_contact.size() >= 1)
		{
			message_con = "Hi Kaylee <br><br> New Booking was created by contact " + Search_rec_contact.get(0).get("First_Name") + " " + Search_rec_contact.get(0).get("Last_Name") + " at " + rec_detail.Booked_Time + " using " + Search_rec_contact.get(0).get("Email");
			sendmail
			[
				from :zoho.adminuserid
				to :"kaylee@iebcoaching.com"
				subject :"New Booking - Created by Existing Contact"
				message :message_con
			]
		}
		else if(Search_rec_member.size() >= 1)
		{
			message_mem = "Hi Kaylee <br><br> New Booking was created by Member " + Search_rec_member.get(0).get("Account_Name") + " at " + rec_detail.Booked_Time + " using   " + Search_rec_member.get(0).get("Email");
			sendmail
			[
				from :zoho.adminuserid
				to :"kaylee@iebcoaching.com"
				subject :"New Booking - Created by Existing Member"
				message :message_mem
			]
		}
	}
}

list SMS_Group_A.Search_Contact(string Membership_Status, string Membership_Level, string Services, string Role, string Tags, string Division)
{
	this_criteria_contact_list = List();
	Pages = {1,2,3,4};
	for each  page in Pages
	{
		query_list = List();
		if(Membership_Status != "Empty")
		{
			query1 = "Membership_Status == \"" + Membership_Status + "\"";
			query_list.add(query1);
		}
		if(Membership_Level != "Empty")
		{
			query2 = "Membership == \"" + Membership_Level + "\"";
			query_list.add(query2);
		}
		if(Services != "Empty")
		{
			query3 = "Service_s ==\"" + Services + "\"";
			query_list.add(query3);
		}
		if(Role != "Empty")
		{
			query4 = "Role ==\"" + Role + "\"";
			query_list.add(query4);
		}
		if(Tags != "Empty")
		{
			query5 = "Tag_s ==\"" + Tags + "\"";
			query_list.add(query5);
		}
		if(Division != "Empty")
		{
			query6 = "Division ==\"" + Division + "\"";
			query_list.add(query6);
		}
		query = "";
		for each  q in query_list
		{
			query = query + q + "&&";
		}
		query = query.removeLastOccurence("&&");
		//info query;
		get_rec = zoho.creator.getRecords("inspectorempirebuilder","ieb","All_Contacts1",query,page,200,"creator_connection");
		//info get_rec;
		if(get_rec.get("code") == 3000)
		{
			this_page_contact = list();
			for each  con in get_rec.get("data")
			{
				this_page_contact.add(con.get("ID"));
			}
			this_criteria_contact_list.addAll(this_page_contact);
			//info this_page_contact.size();
			if(this_page_contact.size() < 200)
			{
				break;
			}
		}
		else if(get_rec.get("code") != 3000)
		{
			break;
		}
	}
	return this_criteria_contact_list;
}

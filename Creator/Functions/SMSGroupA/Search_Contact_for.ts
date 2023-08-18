void SMS_Group_A.Search_Contact_for(int con_ID)
{
	cond_rec = SMS_Group_Master[ID == con_ID];
	//info cond_rec;
	A = if(cond_rec.Membership_Status.isEmpty(),{"Empty"},cond_rec.Membership_Status);
	B = if(cond_rec.Membership_Level.isEmpty(),{"Empty"},cond_rec.Membership_Level);
	C = if(cond_rec.Services.isEmpty(),{"Empty"},cond_rec.Services);
	D = if(cond_rec.Role.isEmpty(),{"Empty"},cond_rec.Role);
	E = if(cond_rec.Tags.isEmpty(),{"Empty"},cond_rec.Tags);
	//to be check with null also
	F = if(cond_rec.Division.isEmpty(),{"Empty"},cond_rec.Division);
	//info C;
	contact_list = List();
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
							//combination = [status,level,service,role,tag,division];
							//info combination;
							contact_criteria = thisapp.SMS_Group_A.Search_Contact(status,level,service,role,tag,division);
							contact_list.addAll(contact_criteria);
						}
					}
				}
			}
		}
	}
	//info contact_list;
	//info contact_list.size();
}

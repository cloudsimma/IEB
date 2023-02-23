void SMS_Group.insert_sms_log(int rec_id)
{
	f_sms = Text_SMS[ID == rec_id];
	// 	con_ls = if(f_sms.SMS_Type == "Group",Group_Name[ID == f_sms.Group_Name].Contacts_Name,f_sms.Contacts);
	// 	condition_records=Group_Name[ID == f_sms.Group_Name].ID
	con_ls = if(f_sms.SMS_Type == "Group",if(Group_Name[ID == f_sms.Group_Name].Rule_Type == "Condition Based",thisapp.SMS_Group_A.SMS_group_Contact(Group_Name[ID == f_sms.Group_Name].SMS_Group_Master),Group_Name[ID == f_sms.Group_Name].Contacts_Name),f_sms.Contacts);
	if(f_sms.SMS_Type == "Group")
	{
		remove_list = f_sms.Contacts.tolist();
		remove_list.removeall(con_ls);
		delete from SMS_Logs[Contact_Name == remove_list && SMS_group_Status == "Scheduled" && SMS_group_ID == f_sms.ID];
		f_sms.Contacts=con_ls;
	}
	for each  rec in con_ls
	{
		Con_det = Contacts_form[ID == rec];
		if(SMS_Logs[SMS_group_ID == f_sms.ID && Contact_Name == Con_det.ID && SMS_group_Status == "Scheduled"].count() < 1)
		{
			InsertSMSLog = insert into SMS_Logs
			[
				Added_User=zoho.loginuser
				Contact_Name=Con_det.ID
				SMS_group_Status=if(f_sms.Send_Status == "SMS Sent","Sent",if(f_sms.Send_Status == "SMS Scheduled","Scheduled",f_sms.Send_Status))
				SMS_opt_in=if(Con_det.SMS_opt_IN == "Yes",true,false)
				SMS_group_ID=f_sms.ID
				SMS_Phone=Con_det.SMS_Number
			];
		}
	}
}

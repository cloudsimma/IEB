void Twilio.Sent_SMS(int ContactID, int template_name, int rec_id, int sms_log_id)
{
	GetContact = Contacts_form[ID == ContactID];
	tem_title = Template_Titles[ID == template_name];
	f_sms_group = Text_SMS[ID == rec_id];
	f_sms_log = SMS_Logs[ID == sms_log_id];
	if(tem_title.Title == "Welcome Template")
	{
		// 		template_msg = Template_Titles[ID == template_name].Message;
		msg = tem_title.Message.replaceAll("{Name}",GetContact.Name.tostring(),True);
	}
	else
	{
		msg = tem_title.Message;
	}
	// 	info msg;
	if(GetContact.SMS_Number != null && GetContact.SMS_Number != "" && GetContact.SMS_opt_IN == "Yes")
	{
		twillio = twilio.sms.send("twillio",GetContact.SMS_Number,msg);
		f_sms_log.Status=twillio.get("status");
		f_sms_log.Message=msg;
	}
	// 		
	f_sms_log.Sent_Received_Time=zoho.currenttime;
	// 		f_sms_log.Status=twillio.get("status");
	f_sms_log.Type_field="Sent";
	f_sms_log.SMS_group_Status="Sent";
	// 	info twillio;
	/* 	InsertSMSLog = insert into SMS_Logs
	[
		Added_User=zoho.loginuser
		Contact_Name=ContactID
		Sent_Received_Time=zoho.currenttime
		Status=twillio.get("status")
		Type_field="Sent"
		Message=msg
	]; */
}

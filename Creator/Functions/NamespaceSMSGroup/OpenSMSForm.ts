void OpenSMSForm(Contacts_form Contact_list)
{
	con_list = List();
	for each  con in Contact_list
	{
		con_list.add(con.ID);
	}
	sms_form = insert into Text_SMS
	[
		Added_User=zoho.loginuser
		Contacts=con_list
	];
	//info sms_form;
	openUrl("#Form:Text_SMS?recLinkID=" + sms_form + "&viewLinkName=All_Text_Sms","popup window");
}

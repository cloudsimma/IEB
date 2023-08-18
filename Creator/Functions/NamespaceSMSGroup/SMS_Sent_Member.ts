void SMS_Sent_Member(Members Member_list)
{
	mem_list = List();
	for each  mem in Member_list
	{
		mem_list.add(mem.ID);
	}
	sms_form = insert into Text_SMS
	[
		Added_User=zoho.loginuser
		SMS_Type="Members"
		Members=mem_list
	];
	//info sms_form;
	openUrl("#Form:Text_SMS?recLinkID=" + sms_form + "&viewLinkName=All_Text_Sms","popup window");
}

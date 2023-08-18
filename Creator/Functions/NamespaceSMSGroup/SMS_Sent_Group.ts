void SMS_Sent_Group(Group_Name group_list)
{
	grp_list = List();
	for each  group in group_list
	{
		grp_list.add(group.ID);
	}
	sms_form = insert into Text_SMS
	[
		Added_User=zoho.loginuser
		SMS_Type="Group"
		Group_Name=grp_list
	];
	//info sms_form;
	openUrl("#Form:Text_SMS?recLinkID=" + sms_form + "&Group_Form=true&viewLinkName=All_Text_Sms","popup window");
}

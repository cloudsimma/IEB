void SMS_Group_A.GroupWiseContactListExport(int GroupID, list to_mail)
{
	GetRec = Group_Name[ID == GroupID];
	NewList = List();
	count = 0;
	Name = "Contact Name";
	Email = "Email";
	Group_Name = "Group Name";
	Member = "Member Name";
	Number = "SMS Number";
	HeaderLine = "\"" + Name + "\",\"" + Email + "\",\"" + Group_Name + "\",\"" + Member + "\",\"" + Number + "\"";
	NewList.add(HeaderLine);
	for each  rec in GetRec.Contacts_Name
	{
		//info rec.Name ;
		// 		if ( count == 0 ) 
		//         {
		// 			NewLine = "\"" + Name + "\",\"" + Email + "\",\"" + Group_Name + "\",\"" + Member + "\",\"" + Number + "\"";
		//         }
		// 		else 
		//         {
		NewLine = "\"" + rec.Name + "\",\"" + rec.Email + "\",\"" + GetRec.Group_Name + "\",\"" + rec.Companies.Company_Name + "\",\"" + rec.SMS_Number + "\"";
		//      }
		NewList.add(NewLine);
		count = count + 1;
	}
	//info "NewList   " + NewList;
	FileName = "Contacts--" + GetRec.Group_Name + ".xls";
	CSVFile = NewList.toString("\n").toFile(FileName);
	sendmail
	[
		from :zoho.adminuserid
		to :to_mail
		subject :GetRec.Group_Name + "Contact List"
		message :GetRec.Group_Name + "Contact List is atteched this email."
		Attachments :file:CSVFile
	]
}

void Member.Tags_Update_From_CRM(int ContactID)
{
	GetContact = Contacts_form[ID == ContactID];
	getCRM_Rec = zoho.crm.getRecordById("Contacts",GetContact.CRM_ID);
	//info getCRM_Rec.get("Tag");
	if(getCRM_Rec.get("Tag").size() > 0)
	{
		//info getCRM_Rec.get("Tag");
		TagList = List();
		for each  eachTag in getCRM_Rec.get("Tag")
		{
			GetTag = Tags[CRM_ID == eachTag.get("id")];
			info eachTag.get("name");
			info GetTag;
			// if(GetTag != null)  changed by raja vel , if we put (GetTag != null) , it result error .
			//Reason : if allow into  loop , even though collection contain null value , so null is added to Taglist . So it reflects in line 34 GetContact.Tag_s=TagList;
			if(GetTag.ID != null)
			{
				info GetTag;
				TagList.add(GetTag.ID);
			}
			else
			{
				NewTag = insert into Tags
				[
					Tag_Name=eachTag.get("name")
					Added_User=zoho.loginuser
					CRM_ID=eachTag.get("id")
				];
				TagList.add(NewTag);
			}
		}
		info "TagList " + TagList;
		GetContact.Tag_s=TagList;
	}
}

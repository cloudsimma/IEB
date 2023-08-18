map IEBTransaction.sendDatatoIEBTransaction(int contactRecID)
{
	dataMap = Map();
	// 	fetchContactDetails = Contacts_form[ID == contactRecID];
	// 	firstName = fetchContactDetails.Name.getprefix(" ");
	// 	lastName = fetchContactDetails.Name.getsuffix(" ");
	// 	dataMap.put("Name",fetchContactDetails.Name);
	// 	dataMap.put("Email",fetchContactDetails.Email);
	// 	dataMap.put("FirstName",firstName);
	// 	dataMap.put("LastName",lastName);
	// 	dataMap.put("Phone",fetchContactDetails.Phone_Number);
	// 	dataMap.put("Country",fetchContactDetails.Mailing_Country);
	// 	dataMap.put("Address1",fetchContactDetails.Mailing_Street);
	// 	dataMap.put("City",fetchContactDetails.Mailing_City);
	// 	dataMap.put("State",fetchContactDetails.Mailing_State);
	// 	dataMap.put("Postalcode",fetchContactDetails.Mailing_Zip);
	// 	info fetchContactDetails.Name;
	// 	info fetchContactDetails.Email;
	fetchMemberDetails = Members[ID == contactRecID];
	if(fetchMemberDetails.Company_Name.contains(" ") == true)
	{
		info fetchMemberDetails.Company_Name;
		firstName = fetchMemberDetails.Company_Name.getprefix(" ");
		lastName = fetchMemberDetails.Company_Name.getsuffix(" ");
	}
	else
	{
		firstName = fetchMemberDetails.Company_Name;
	}
	dataMap.put("Name",fetchMemberDetails.Company_Name);
	dataMap.put("Email",fetchMemberDetails.Email);
	dataMap.put("FirstName",ifnull(firstName,""));
	dataMap.put("LastName",ifnull(lastName,""));
	dataMap.put("Phone",fetchMemberDetails.Phone_Number);
	dataMap.put("Country",fetchMemberDetails.Shipping_Country);
	dataMap.put("Address1",fetchMemberDetails.Shipping_Street);
	dataMap.put("City",fetchMemberDetails.Shipping_City);
	dataMap.put("State",fetchMemberDetails.Shipping_State);
	dataMap.put("Postalcode",fetchMemberDetails.Shipping_Code);
	dataMap.put("Subscription_Full_Name",if(fetchMemberDetails.Subscription_Full_Name != "",fetchMemberDetails.Subscription_Full_Name,""));
	dataMap.put("Subscription_First_Name",if(fetchMemberDetails.Subscription_First_Name != "",fetchMemberDetails.Subscription_First_Name,""));
	dataMap.put("Subscription_Last_Name",if(fetchMemberDetails.Subscription_Last_Name != "",fetchMemberDetails.Subscription_Last_Name,""));
	dataMap.put("Subscription_Email",if(fetchMemberDetails.Subscription_Email != "",fetchMemberDetails.Subscription_Email,""));
	dataMap.put("Payment_Method",if(fetchMemberDetails.Payment_Method != null,fetchMemberDetails.Payment_Method,null));
	//	dataMap.put("Company Name",fetchMemberDetails.ID);
	// 	info fetchMemberDetails.Company_Name;
	return dataMap;
}

void Twilio.SMS_Stop_Function(string received_msg, string SMS_Number_1)
{
	Keywords = {"stop","remove"};
	str = received_msg.toList(" ");
	//info str;
	for each  word in Keywords
	{
		keyword_contains = str.containsIgnoreCase(word);
		if(keyword_contains == True)
		{
			//info keyword_contains;
			search_rec = Contacts_form[SMS_Number == SMS_Number_1].ID.getAll();
			//info search_rec;
			for each  rec_id in search_rec
			{
				rec = Contacts_form[ID == rec_id];
				rec.SMS_opt_IN="No";
			}
			break;
		}
	}
}

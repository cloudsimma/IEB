void Lead_Enquiry.Send_Mail(int rec_id, string mail_id, int LeadID, string Enquiry_status)
{
	if(Enquiry_status == "Lead")
	{
		///duplicate lead creation growth@iebcoaching.com
		data = {{"from":{"email":"kaylee@iebcoaching.com"},"to":{{"email":"growth@iebcoaching.com"}},"template":{"id":"5293322000002006205"}}};
		//Duplicate Email Template
		json_data = Map();
		json_data.put("data",data);
		send_mail = invokeurl
		[
			url :"https://www.zohoapis.com/crm/v3/Leads/" + rec_id + "/actions/send_mail"
			type :POST
			parameters:json_data.toString()
			connection:"crm_oauth_connection"
		];
		info send_mail;
		////"Thanking Notification on Lead Enquiry" growth@iebcoaching.com
		GetLead = Lead_Enquiry[ID == LeadID];
		if(GetLead.Form == "Non-Member Webinar")
		{
			//info "Hai"; kaylee@iebcoaching.com
			data_1 = {{"from":{"email":"kaylee@iebcoaching.com"},"to":{{"email":mail_id}},"template":{"id":"5293322000003364025"}}};
			//Non Member Webinar Sign Up Thank You Email 1
			json_data_1 = Map();
			json_data_1.put("data",data_1);
			send_mail_1 = invokeurl
			[
				url :"https://www.zohoapis.com/crm/v3/Leads/" + rec_id + "/actions/send_mail"
				type :POST
				parameters:json_data_1.toString()
				connection:"crm_oauth_connection"
			];
			info send_mail_1;
		}
		else if(GetLead.Form == "Inspector Cost Calculator Form")
		{
			data_1 = {{"from":{"email":"kaylee@iebcoaching.com"},"to":{{"email":mail_id}},"template":{"id":"5293322000003364016"}}};
			//Inspector Cost Calculator Form Response. kaylee@iebcoaching.com
			json_data_1 = Map();
			json_data_1.put("data",data_1);
			send_mail_1 = invokeurl
			[
				url :"https://www.zohoapis.com/crm/v3/Leads/" + rec_id + "/actions/send_mail"
				type :POST
				parameters:json_data_1.toString()
				connection:"crm_oauth_connection"
			];
			info send_mail_1;
		}
		else
		{
			data_1 = {{"from":{"email":"kaylee@iebcoaching.com"},"to":{{"email":mail_id}},"template":{"id":"5293322000004032324"}}};
			//Thanking  Notification on  Lead Enquiry
			json_data_1 = Map();
			json_data_1.put("data",data_1);
			send_mail_1 = invokeurl
			[
				url :"https://www.zohoapis.com/crm/v3/Leads/" + rec_id + "/actions/send_mail"
				type :POST
				parameters:json_data_1.toString()
				connection:"crm_oauth_connection"
			];
			info send_mail_1;
		}
	}
	else if(Enquiry_status == "Contact")
	{
		//"5293322000005085001""Duplicate Contact Creation Notification_Cloned" growth@iebcoaching.com
		data = {{"from":{"email":"kaylee@iebcoaching.com"},"to":{{"email":"growth@iebcoaching.com"}},"template":{"id":"5293322000005085001"}}};
		json_data = Map();
		json_data.put("data",data);
		send_mail = invokeurl
		[
			url :"https://www.zohoapis.com/crm/v3/Contacts/" + rec_id + "/actions/send_mail"
			type :POST
			parameters:json_data.toString()
			connection:"crm_oauth_connection"
		];
		//5293322000005070005 ,name : "Duplicate Enquiry Contact Non Member Webinar"
		GetLead = Lead_Enquiry[ID == LeadID];
		if(GetLead.Form == "Non-Member Webinar")
		{
			data_1 = {{"from":{"email":"kaylee@iebcoaching.com"},"to":{{"email":mail_id}},"template":{"id":"5293322000005070005"}}};
			json_data_1 = Map();
			json_data_1.put("data",data_1);
			send_mail_1 = invokeurl
			[
				url :"https://www.zohoapis.com/crm/v3/Contacts/" + rec_id + "/actions/send_mail"
				type :POST
				parameters:json_data_1.toString()
				connection:"crm_oauth_connection"
			];
		}
	}
	else if(Enquiry_status == "Accounts")
	{
		//"5293322000005085012" - Duplicate Member Creation Notification_Cloned
		data = {{"from":{"email":"kaylee@iebcoaching.com"},"to":{{"email":"growth@iebcoaching.com"}},"template":{"id":"5293322000005085012"}}};
		json_data = Map();
		json_data.put("data",data);
		send_mail = invokeurl
		[
			url :"https://www.zohoapis.com/crm/v3/Accounts/" + rec_id + "/actions/send_mail"
			type :POST
			parameters:json_data.toString()
			connection:"crm_oauth_connection"
		];
		GetLead = Lead_Enquiry[ID == LeadID];
		if(GetLead.Form == "Non-Member Webinar")
		{
			//"5293322000005070016" , name : "Duplicate Enquiry member Non Member Webinar_Cloned"
			data_1 = {{"from":{"email":"kaylee@iebcoaching.com"},"to":{{"email":mail_id}},"template":{"id":"5293322000005070016"}}};
			json_data_1 = Map();
			json_data_1.put("data",data_1);
			send_mail_1 = invokeurl
			[
				url :"https://www.zohoapis.com/crm/v3/Accounts/" + rec_id + "/actions/send_mail"
				type :POST
				parameters:json_data_1.toString()
				connection:"crm_oauth_connection"
			];
		}
	}
}

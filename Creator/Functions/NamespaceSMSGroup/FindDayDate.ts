date SMS_Group.find_day_date(int rec_id, date rec_date)
{
	f_sms_data = Text_SMS[ID == rec_id];
	// 	f_day = SMS_Days[ID == f_sms_data.Day];// day change
	f_title = Template_Titles[ID == f_sms_data.Title];
	week_no = ifnull(f_sms_data.Week_No,0).toNumber();
	if(f_sms_data.Send_Type == "Schedule")
	{
		if(f_sms_data.Day == "Monday")
		{
			weekday_count = 2;
			find_day = week_no - 1;
		}
		else if(f_sms_data.Day == "Tuesday")
		{
			weekday_count = 3;
			find_day = week_no - 1;
		}
		else if(f_sms_data.Day == "Wednesday")
		{
			weekday_count = 4;
			find_day = week_no - 1;
		}
		else if(f_sms_data.Day == "Thursday")
		{
			weekday_count = 5;
			find_day = week_no - 1;
		}
		else if(f_sms_data.Day == "Friday")
		{
			weekday_count = 6;
			find_day = week_no - 1;
		}
		else if(f_sms_data.Day == "Saturday")
		{
			weekday_count = 7;
			find_day = week_no - 1;
		}
		else if(f_sms_data.Day == "Sunday")
		{
			weekday_count = 1;
			find_day = week_no - 1;
		}
	}
	dat = rec_date;
	ls = {1,2,3,4,5,6,7};
	st_date = if(f_sms_data.Schedule_Type == "Monthly",dat.toStartOfMonth().weekday(),dat.weekday());
	// 			info st_date;
	da = if(f_sms_data.Schedule_Type == "Monthly",dat.toStartOfMonth(),today);
	if(st_date != weekday_count)
	{
		// info dat.toStartOfMonth();
		for each  rec in ls
		{
			da = da.addDay(1);
			// 			info da;
			if(da.weekday() == weekday_count)
			{
				// 	info da.weekday();
				st_date = da;
				break;
			}
		}
	}
	if(f_sms_data.Schedule_Type == "Monthly")
	{
		date_val = da.addWeek(find_day).addHour(f_sms_data.Time.getHour()).addMinutes(f_sms_data.Time.getMinutes());
	}
	else if(f_sms_data.Schedule_Type == "Weekly")
	{
		week_day = da.addHour(f_sms_data.Time.getHour()).addMinutes(f_sms_data.Time.getMinutes());
		date_val = if(week_day < zoho.currenttime,week_day.addWeek(1),week_day);
	}
	return date_val;
}

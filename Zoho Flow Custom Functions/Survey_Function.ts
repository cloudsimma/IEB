void Survey_Function(Map data)
{
//info data;
// Function name, return type and parameter(s) are implicitly passed by the system. Return type void, Parameter(s) are - [{type:Map,name:survey}].
//info "Survey name is:" + survey.get("name");
datamap = Map();
if(data.get("G") != null && data.get("G") != "")
{
	datamap.put("What_is_your_company_ownership_structure",data.get("G"));
}
if(data.get("H") != null && data.get("H") != "")
{
	datamap.put("What_is_the_legal_structure_of_your_company",data.get("H"));
}
if(data.get("I") != null && data.get("I") != "")
{
	datamap.put("How_long_have_you_owned_and_operated_your_inspection_company",data.get("I"));
}
if(data.get("M") != null)
{
	datamap.put("How_many_total_people_are_currently_working_in_your_organization",data.get("M"));
}
if(data.get("N") != null)
{
	datamap.put("How_many_full_time_inspectors_including_yourself_are_currently_working_in_your_organization",data.get("N"));
}
if(data.get("O") != null)
{
	datamap.put("How_many_inspections_did_your_company_perform_in_the_most_recent_calendar_year",data.get("O"));
}
if(data.get("P") != null && data.get("P") != "")
{
	datamap.put("Where_is_your_market",data.get("P"));
}
if(data.get("Q") != null && data.get("Q") != "")
{
	datamap.put("Do_you_plan_on_expanding_outside_of_your_current_market_this_year",data.get("Q"));
}
if(data.get("R") != null && data.get("R") != "")
{
	datamap.put("How_many_people_are_currently_in_your_executive_leadership_team",data.get("R"));
}
if(data.get("S") != null && data.get("S") != "")
{
	datamap.put("Do_you_have_a_full_time_growth_leader",data.get("S"));
}
if(data.get("T") != null && data.get("T") != "")
{
	datamap.put("Do_you_have_a_full_time_operations_leader",data.get("T"));
}
if(data.get("U") != null && data.get("U") != "")
{
	datamap.put("Do_you_have_a_full_time_services_inspection_leader",data.get("U"));
}
if(data.get("V") != null && data.get("V") != "")
{
	datamap.put("Do_you_offer_commercial_inspections",data.get("V"));
}
if(data.get("W") != null && data.get("W") != "")
{
	datamap.put("Do_you_offer_any_ancillary_services",data.get("W"));
}
if(data.get("X").isEmpty() != true)
{
	X_data_option = {"Mold","Radon","Pest","Stucco","Thermal Imaging","Sewer Scope","None"};
	X_selected_option = list();
	for each  option in data.get("X")
	{
		info option;
		if(X_data_option.Contains(option) == true)
		{
			X_selected_option.add(option);
		}
		else if(X_data_option.Contains(option) == false)
		{
			//info option;
			X_selected_option.add("Others");
			datamap.put("Which_ancillary_services_do_you_offer_Others",option);
		}
	}
	if(X_selected_option.isEmpty() != true)
	{
		datamap.put("Which_ancillary_services_do_you_offer",X_selected_option);
	}
}
if(data.get("Y") != null && data.get("Y") != "")
{
	datamap.put("Do_any_of_your_ancillary_services_account_for_more_than_25_of_your_gross_revenue1",data.get("Y"));
}
if(data.get("Z") != null && data.get("Z") != "")
{
	datamap.put("Do_you_plan_on_adding_any_ancillary_services_this_year",data.get("Z"));
}
if(data.get("AA").isEmpty() != true)
{
	//datamap.put("Which_ancillary_services_are_you_wanting_to_start_offering",data.get("AA"));
	AA_data_option = {"Mold","Radon","Pest","Stucco","Thermal Imaging","Sewer Scope","None"};
	AA_selected_option = list();
	for each  option in data.get("AA")
	{
		info option;
		if(AA_data_option.Contains(option) == true)
		{
			AA_selected_option.add(option);
		}
		else if(AA_data_option.Contains(option) == false)
		{
			//info option;
			AA_selected_option.add("Others");
			datamap.put("Which_ancillary_services_are_you_wanting_to_start_offering",option);
		}
	}
	if(AA_selected_option.isEmpty() != true)
	{
		datamap.put("Which_ancillary_services_are_you_wanting_to_start_offering_Others",AA_selected_option);
	}
}
if(data.get("AB") != null && data.get("AB") != "")
{
	datamap.put("Do_you_have_an_internal_call_center_that_schedules_inspections",data.get("AB"));
}
if(data.get("AC") != null && data.get("AC") != "")
{
	datamap.put("What_was_your_gross_income_in_the_most_recent_calendar_year",data.get("AC"));
}
if(data.get("AD") != null && data.get("AD") != "")
{
	datamap.put("What_was_your_net_profit_in_the_most_recent_calendar_year",data.get("AD"));
}
if(data.get("AE") != null && data.get("AE") != "")
{
	//datamap.put("Who_is_your_primary_growth_target_audience",data.get("AE"));
	if(data.get("AE") != "Straight to consumer" && data.get("AE") != "Realtors")
	{
		datamap.put("Who_is_your_primary_growth_target_audience","Others");
		datamap.put("Who_is_your_primary_growth_target_audience_Others",data.get("AE"));
	}
	else
	{
		datamap.put("Who_is_your_primary_growth_target_audience",data.get("AE"));
	}
}
if(data.get("AF").isEmpty() != true)
{
	//datamap.put("What_are_your_top_3_growth_strategies",data.get("AF"));
	AF_data_option = {"Real Estate office event sponsorships","Real Estate office team meetings","Real Estate office visits and dropping off \"stuff\"","Hosting training events","Referrals","Lead generation and prospecting calls","Online marketing","Paint print advertising"};
	AF_selected_option = list();
	for each  option in data.get("AF")
	{
		//info option;
		if(AF_data_option.Contains(option) == true)
		{
			AF_selected_option.add(option);
		}
		else if(AF_data_option.Contains(option) == false)
		{
			//info option;
			AF_selected_option.add("Others");
			datamap.put("What_are_your_top_3_growth_strategies_Others",option);
		}
	}
	if(AF_selected_option.isEmpty() != true)
	{
		datamap.put("What_are_your_top_3_growth_strategies",AF_selected_option);
	}
}
if(data.get("AG") != null)
{
	datamap.put("What_is_your_average_month_over_month_growth_rate_percentage",data.get("AG"));
}
if(data.get("AH") != null)
{
	datamap.put("What_is_your_goal_for_number_of_inspections_this_year",data.get("AH"));
}
if(data.get("AI") != null)
{
	datamap.put("What_is_your_goal_for_gross_revenue_this_year",data.get("AI"));
}
if(data.get("AJ") != null)
{
	datamap.put("What_is_your_goal_for_profit_this_year",data.get("AJ").toNumber());
}
if(data.get("AK") != null)
{
	//datamap.put("What_are_some_of_your_current_challenges",data.get("AK"));
	AK_data_option = {"No time freedom","No exit strategy","Can't find, hire, or afford competent inspectors","Making revenue but no profits","Growth","Don't have a time or a process to train new inspectors","Don't understand how to handle the financial side of my business","Whether there will be enough work to keep employees paid and happy","Can't get ahead of the feast-or-famine cycle in the industry","Revenue stagnating year-over-year"};
	AK_selected_option = list();
	for each  option in data.get("AK")
	{
		//info option;
		if(AK_data_option.Contains(option) == true)
		{
			AK_selected_option.add(option);
		}
		else if(AK_data_option.Contains(option) == false)
		{
			//info option;
			AK_selected_option.add("Others");
			datamap.put("What_are_some_of_your_current_challenges_Others",option);
		}
	}
	if(AK_selected_option.isEmpty() != true)
	{
		datamap.put("What_are_some_of_your_current_challenges",AK_selected_option);
	}
}
if(data.get("AL") != null && data.get("AL") != "")
{
	datamap.put("How_did_you_hear_about_IEB",data.get("AL"));
}
if(data.get("AM") != null && data.get("AM") != "")
{
	datamap.put("What_is_your_men_s_tshirt_size",data.get("AM"));
}
nam = Map();
if(data.get("AU") != null && data.get("AU") != "")
{
	nam.put("first_name",data.get("AU"));
}
if(data.get("AV") != null && data.get("AV") != "")
{
	nam.put("last_name",data.get("AV"));
}
if(data.get("AW") != null && data.get("AW") != "")
{
	datamap.put("Email",data.get("AW"));
}
if(data.get("AX") != null)
{
	datamap.put("Phone_Number",data.get("AX").toNumber());
}
if(data.get("AY") != null)
{
	info data.get("AY");
	d = data.get("AY");
	datamap.put("Birthday",d.toString("dd-MMM-yyyy"));
}
datamap.put("Form","IEB New Membership Form - Survey");
datamap.put("Name",nam);
othermap = Map();
creator_push = zoho.creator.createRecord("inspectorempirebuilder","ieb","Lead_Enquiry",datamap,othermap,"creator");
info creator_push;
//info datamap;
}

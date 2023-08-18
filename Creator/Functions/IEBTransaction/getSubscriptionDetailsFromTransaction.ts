void IEBTransaction.getSubscriptionDetailsFromTransaction()
{
	count = 0;
	for each  Member in Members[ID != null] range from 301 to 400
	{
		memberID = Member.Crm_ID.toString();
		// 		memberID = 5293322000021487014.toString();
		getUpdateMap = ieb_transactions.Transaction.sendDataToMemberFromSubTrans(memberID);
		if(getUpdateMap.size() > 0)
		{
			// 			info getUpdateMap.get("Subscription_Enable");
			info getUpdateMap;
			Member.Subscription_Full_Name=getUpdateMap.get("Subscription_Full_Name");
			Member.Subscription_First_Name=getUpdateMap.get("Subscription_First_Name");
			Member.Subscription_Last_Name=getUpdateMap.get("Subscription_Last_Name");
			Member.Subscription_Email=getUpdateMap.get("Subscription_Email");
			Member.Subscription_Account=getUpdateMap.get("Subscription_Account");
			Member.Subscription_Amount_Charge=getUpdateMap.get("Subscription_Amount_Charge");
			Member.Subscription_Membership_Level=getUpdateMap.get("Subscription_Membership_Level");
			Member.Subscription_Status_Manual=getUpdateMap.get("Subscription_Status_Manual");
			Member.Subscription_Enable=ifNull(getUpdateMap.get("Subscription_Enable"),false);
			Member.Last_Charged_Date=getUpdateMap.get("Last_Charged_Date");
			Member.Payment_Method=getUpdateMap.get("Payment_Method");
			count = count + 1;
		}
		// 		count = count + 1;
	}
	info count;
}

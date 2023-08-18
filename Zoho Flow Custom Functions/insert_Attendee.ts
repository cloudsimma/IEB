void insert_Attendee(int Portalid, int Attendeeid, map attend_details)
{
event_id = attend_details.get("attendee").get("event");
if(event_id != "" && event_id != null)
{
	creator_event = invokeurl
	[
		url :"https://creator.zoho.com/api/v2/inspectorempirebuilder/ieb/report/All_Backstage_Events?Backstage_Event_ID=" + event_id
		type :GET
		connection:"creator"
	];
}
order_id = attend_details.get("attendee").get("orderId");
first_name = attend_details.get("customFormData").get(0).get("formEntries").get("first_name");
last_name = attend_details.get("customFormData").get(0).get("formEntries").get("last_name");
datamap = Map();
datamap.put("Email",attend_details.get("attendee").get("emailId"));
datamap.put("Company_Name",attend_details.get("customFormData").get(0).get("formEntries").get("company_name"));
datamap.put("First_Name",attend_details.get("customFormData").get(0).get("formEntries").get("first_name"));
datamap.put("Last_Name",attend_details.get("customFormData").get(0).get("formEntries").get("last_name"));
datamap.put("Mobile_no",attend_details.get("customFormData").get(0).get("formEntries").get("mobile_no"));
datamap.put("Attendee_Status","Active");
datamap.put("Attendee_ID",Attendeeid);
datamap.put("Ticketclass_ID",attend_details.get("attendee").get("ticketClass"));
datamap.put("Tickets_ID",attend_details.get("attendee").get("ticketId"));
datamap.put("Purchased_by",attend_details.get("attendee").get("Purchased_email"));
datamap.put("Attendee_Name",first_name + " " + last_name);
attendee_email = attend_details.get("attendee").get("emailId");
purchaser_email = attend_details.get("attendee").get("purchasedBy");
/*
tickets = orderDetail.get("orderTickets");
tickets_count = tickets.size();
datamap.put("Is_Payment_Paid",attend_details.get("attendee").get("paymentDetails").get("isPaymentPaid"));
datamap.put("Order_ID",attend_details.get("attendee").get("eventOrder"));
datamap.put("Ticket_Count",tickets_count);
datamap.put("Total",orderDetail.get("orderCost_totalFare"));
datamap.put("Grand_Total",orderDetail.get("orderCost_grandTotal"));
datamap.put("Service_Fare",orderDetail.get("orderCost_serviceFare"));
datamap.put("Tax_Percent",orderDetail.get("orderCost_taxPercent"));
datamap.put("Tax",orderDetail.get("orderCost_tax"));
datamap.put("Promo_Code",orderDetail.get("orderCost_promoCode"));
datamap.put("Total_Discount_Amount",orderDetail.get("orderCost_discountAmount"));
datamap.put("Discount_Amount_Per_ticket",orderDetail.get("orderCost_discountApplied"));
datamap.put("Ticket_Price",orderDetail.get("orderTickets").get(0).get("ticketPrice")); */
if(creator_event.get("code") != 3100)
{
	event_name = creator_event.get("data").get(0).get("ID");
	datamap.put("Event_Name",event_name);
}
if(attendee_email == purchaser_email)
{
	datamap.put("Purchaser_Also_an_Attendee",True);
}
datamap.put("Order_ID",order_id);
otherparams = Map();
response = zoho.creator.createRecord("inspectorempirebuilder","ieb","Attendee_Details",datamap,otherparams,"creator");
info response;
}

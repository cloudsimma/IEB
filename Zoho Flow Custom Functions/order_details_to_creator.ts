string order_details_to_creator(map orderdetails, int event_id)
{
order_id = orderdetails.get("orderCost_eventOrder");
/* if(order_id != "" && order_id != null)
{
	creator_order = invokeurl
	[
		url :"https://creator.zoho.com/api/v2/inspectorempirebuilder/ieb/report/Order_Details_Report?Order_ID=" + order_id
		type :GET
		connection:"creator"
	];
} */
//info event_id;
// if(creator_order.get("code") == 3100 && creator_order.get("message") == "No Data Available")
// {
// 	event_id = attend_details.get("attendee").get("event");
// 	if(event_id != "" && event_id != null)
// 	{
creator_event = invokeurl
[
	url :"https://creator.zoho.com/api/v2/inspectorempirebuilder/ieb/report/All_Backstage_Events?Backstage_Event_ID=" + event_id
	type :GET
	connection:"creator"
];
//}
tickets = orderdetails.get("orderTickets");
tickets_count = tickets.size();
datamap = Map();
// 	datamap.put("Tickets_ID",attend_details.get("attendee").get("ticketId"));
datamap.put("Order_ID",order_id);
// 	datamap.put("Ticketclass_ID",attend_details.get("attendee").get("ticketClass"));
datamap.put("Ticket_Count",tickets_count);
datamap.put("Ticket_Price",orderdetails.get("orderTickets").get(0).get("ticketPrice"));
datamap.put("Total",orderdetails.get("orderCost_totalFare"));
datamap.put("Tax",orderdetails.get("orderCost_tax"));
datamap.put("Grand_Total",orderdetails.get("orderCost_grandTotal"));
datamap.put("Service_Fare",orderdetails.get("orderCost_serviceFare"));
datamap.put("Tax_Percent",orderdetails.get("orderCost_taxPercent"));
datamap.put("Promo_Code",orderdetails.get("orderCost_promoCode"));
datamap.put("Total_Discount_Amount",orderdetails.get("orderCost_discountAmount"));
datamap.put("Discount_Amount_Per_ticket",orderdetails.get("orderCost_discountApplied"));
//	datamap.put("Attendee_ID",attend_details.get("attendee").get("id"));
if(creator_event.get("code") != 3100)
{
	event_name = creator_event.get("data").get(0).get("ID");
	datamap.put("Backstage_Events",event_name);
}
otherparams = Map();
response = zoho.creator.createRecord("inspectorempirebuilder","ieb","Order_Details",datamap,otherparams,"creator");
info response;
//}
return response.toString();
}

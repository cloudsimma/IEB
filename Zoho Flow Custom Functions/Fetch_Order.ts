map Fetch_Order(int order_id)
{
url1 = "https://backstage.zoho.com/v1/portals/777739802/eventOrders/" + order_id;
e_map = Map();
order = invokeurl
[
	url :url1
	type :GET
	parameters:e_map
	connection:"my_backstage_connection1"
];
tickets = order.get("orderTickets");
tickets_count = tickets.size();
//info tickets_count;
purchaser_first_name = order.get("customFormData").get(0).get("formEntries").get("purchaser_first_name");
purchaser_last_name = order.get("customFormData").get(0).get("formEntries").get("purchaser_last_name");
purchaser_email = order.get("customFormData").get(0).get("formEntries").get("purchaser_email");
purchaser_mobile = order.get("customFormData").get(0).get("formEntries").get("purchaser_mobile_no");
order_total_fare = order.get("orderCost").get("totalFare");
order_discount_amount = order.get("orderCost").get("discountAmount");
order_service_fare = order.get("orderCost").get("serviceFare");
order_tax = order.get("orderCost").get("tax");
order_tax_percent = order.get("orderCost").get("taxPercent");
order_grand_total = order.get("orderCost").get("grandTotal");
Company = order.get("userProfile").get("company");
event_id = order.get("eventOrder").get("eventId");
creator_event = invokeurl
[
	url :"https://creator.zoho.com/api/v2/inspectorempirebuilder/ieb/report/All_Backstage_Events?Backstage_Event_ID=" + event_id
	type :GET
	connection:"creator"
];
datamap = Map();
datamap.put("First_Name",purchaser_first_name);
datamap.put("Last_Name",purchaser_last_name);
datamap.put("Purchaser_Name",purchaser_first_name + " " + purchaser_last_name);
datamap.put("Email",purchaser_email);
datamap.put("Mobile_no",purchaser_mobile);
datamap.put("Company_Name",Company);
datamap.put("Number_of_Tickets",tickets_count);
datamap.put("Ticket_Amount",order_total_fare);
datamap.put("Discount_Amount",order_discount_amount);
datamap.put("Grand_Total",order_grand_total);
if(creator_event.get("code") != 3100)
{
	event_name = creator_event.get("data").get(0).get("ID");
	datamap.put("Event_Name",event_name);
}
datamap.put("Tax",order_tax);
datamap.put("Tax_Percent",order_tax_percent);
datamap.put("Service_Fare",order_service_fare);
datamap.put("Order_ID",order_id);
otherparams = Map();
response = zoho.creator.createRecord("inspectorempirebuilder","ieb","Purchaser_Detail",datamap,otherparams,"creator");
info response;
return "";
}

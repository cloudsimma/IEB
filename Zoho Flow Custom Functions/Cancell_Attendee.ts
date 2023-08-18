void Cancell_Attendee(int Portalid, int Attendeeid)
{
// attend_details = invokeurl
// [
// 	url :"https://backstage.zoho.com/portals/777739802/attendees/52693000002884426"
// 	type :GET
// 	connection:"my_backstage_connection1"
// ];
// event_id = attend_details.get("attendee").get("event");
creator_event = invokeurl
[
	url :"https://creator.zoho.com/api/v2/inspectorempirebuilder/ieb/report/All_Attendee_Details?Attendee_ID=" + Attendeeid
	type :GET
	connection:"creator"
];
info creator_event;
event_name = creator_event.get("data").get(0).get("ID");
info event_name;
datamap = Map();
// datamap.put("Email",attend_details.get("attendee").get("emailId"));
// datamap.put("Company_Name",attend_details.get("userProfile").get("company"));
// datamap.put("Attendee_Name",attend_details.get("userProfile").get("name"));
// datamap.put("Mobile_no",attend_details.get("userProfile").get("telephone"));
// datamap.put("Tickets_ID",attend_details.get("attendee").get("ticketId"));
datamap.put("Attendee_Status","Cancelled");
// datamap.put("Payements_Details",attend_details.get("attendee").get("paymentDetails").get("isPaymentPaid"));
// //datamap.put("Backstage_Events",event_name);
otherparams = Map();
response = zoho.creator.updateRecord("inspectorempirebuilder","ieb","All_Attendee_Details",event_name,datamap,otherparams,"creator");
info response;
}

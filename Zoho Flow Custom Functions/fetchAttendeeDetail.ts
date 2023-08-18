map fetchAttendeeDetail(int attendeeId, int portalId)
{
attend_details = invokeurl
[
	url :"https://backstage.zoho.com/portals/" + portalId + "/attendees/" + attendeeId
	type :GET
	connection:"my_backstage_connection1"
];
info attend_details;
return attend_details;
}

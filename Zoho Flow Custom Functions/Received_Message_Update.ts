void Received_Message_Update(string body, string from_number, string status)
{
//info from_number;
//info "SMS_Number == \"" + from_number + "\"";
search_rec = zoho.creator.getRecords("inspectorempirebuilder","ieb","All_Contacts1","SMS_Number == \"" + from_number + "\"",1,200,"creator");
//info search_rec.get("data").get(0).get("ID");
info zoho.currenttime;
data_map = Map();
data_map.put("Message",body);
data_map.put("Sent_Received_Time",zoho.currenttime);
data_map.put("Type",status);
data_map.put("Contacts_form",search_rec.get("data").get(0).get("ID"));
otherParams = Map();
sms_log = zoho.creator.createRecord("inspectorempirebuilder","ieb","SMS_Logs",data_map,otherParams,"creator");
info sms_log;
}

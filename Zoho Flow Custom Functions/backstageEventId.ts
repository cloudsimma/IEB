string backstageEventId(map detail)
{
info detail;
e_id = detail.get("payload").get("event_id");
info e_id;
return e_id;
}

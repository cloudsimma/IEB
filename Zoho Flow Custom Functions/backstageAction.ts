string backstageAction(map payLoad)
{
eventAction = payLoad.get("payload").get("action");
info eventAction;
return eventAction;
}

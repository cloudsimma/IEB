if (ZDK.Page.getField("Phone_Number").getValue() == true )
{
    var value = ZDK.Page.getField("Phone").getValue();
    ZDK.Page.getField("SMS_Number").setValue(value);
}
else
{
  ZDK.Page.getField("SMS_Number").setValue("");   
}

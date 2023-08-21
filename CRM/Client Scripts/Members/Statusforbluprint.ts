if (ZDK.Page.getField("Membership_Status").getValue() != null )
{
    var value = ZDK.Page.getField("Membership_Status").getValue();
    ZDK.Page.getField("Status_for_Blueprint").setValue(value);
}

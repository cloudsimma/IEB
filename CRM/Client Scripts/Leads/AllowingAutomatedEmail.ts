var a = ZDK.Client.showConfirmation('Would you like to send automated email for this Lead?', 'Yes', 'No');
var checkbox_field =  ZDK.Page.getField('Don_t_Send_Automated_Email');
if (a == true)
{
    checkbox_field.setValue(false);
}
else if (a == false)
{
    checkbox_field.setValue(true);
}

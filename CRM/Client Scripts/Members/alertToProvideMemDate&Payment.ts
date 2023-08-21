var membershipDate = ZDK.Page.getField('Membership_Date').getValue();
var payment = ZDK.Page.getField('Payment').getValue();
var startOnboard = ZDK.Page.getField('Start_Onboard').getValue();
log(payment);
log(startOnboard);
if (startOnboard !== "Yes") {
    if (membershipDate === null || membershipDate === "" || payment === "" || payment === null) {
         ZDK.Client.showAlert('Please provide value for Membership Date and Payment field');
        return false;
    }
}

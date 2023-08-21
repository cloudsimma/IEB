var membershipDate = ZDK.Page.getField('Membership_Date').getValue();
var payment = ZDK.Page.getField('Payment').getValue();
log(payment);
membershipAgreementSent = ZDK.Page.getField('New_Member_Survey_Link_Filled').getValue();
if (membershipAgreementSent !== "Yes") {
    if (membershipDate === null || membershipDate === "" || payment === "" || payment === null) {
        ZDK.Client.showAlert('Please provide value for Membership Date and payment field');
        return false;
    }
}

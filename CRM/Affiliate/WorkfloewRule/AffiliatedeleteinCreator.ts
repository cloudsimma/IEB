if(recID != null)
{
	recordid = recID.toLong();
	deleteRecord = invokeurl
	[
		url :"https://creator.zoho.com/api/v2/inspectorempirebuilder/ieb/report/All_Affiliates/" + recordid
		type :DELETE
		connection:"zohocreator"
	];
}
info deleteRecord;

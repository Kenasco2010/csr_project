Template.showCompanyProfile.events({
	'click .updateCompanyProfile': function(){
		Session.set("updateCompanyProfile", this._id);
	}
})
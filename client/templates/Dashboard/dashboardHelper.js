Template.dashboardLayout.helpers({
	dashboard: function () {
		if(Meteor.user().profile.companyType == "ngo"){
			return true;
		}
	},
	'ngoProfile': function(){
		return Ngo.findOne({ngoCompanyOwner: Meteor.userId()})
	}
});


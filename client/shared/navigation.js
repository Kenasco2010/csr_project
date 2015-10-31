Template.navigation.events({
	'click .dashboard': function () {
		if(Meteor.user().profile.companyType === "ngo"){
			Router.go('corporateOrgProjectsOnly')
		} else {
			Router.go('showCompanyProfile')
		}
	}
});
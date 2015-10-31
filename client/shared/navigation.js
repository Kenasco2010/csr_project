Template.navigation.events({
	'click .dashboard': function () {
		if(Meteor.user().profile.companyType === "ngo"){
			Router.go('/all-corporate-organization-projects')
		} else {
			Router.go('/my-company-profile')
		}
	}
});

Template.navigation.helpers({
	NGOdashboard: function () {
		if (Meteor.user().profile.companyType === "ngo") {
			return true
		}
	}
});
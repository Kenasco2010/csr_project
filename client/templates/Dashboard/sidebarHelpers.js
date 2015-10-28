Template.dashboardLayout.helpers({
    'companyProfile': function () {
        return CorpOrg.findOne({companyOwner: Meteor.userId()})
    }
});

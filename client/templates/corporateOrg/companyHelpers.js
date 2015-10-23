Template.updateCompanyProfile.helpers({
  updateCompanyDoc: function () {
    return CorpOrg.findOne(Session.get("updateCompanyProfile"));
  }
});
Template.navigation.helpers({
  checkcompanyProjectsInterest: function () {
      var loggedInCompany = Meteor.user() && Meteor.user().profile.companyType === "corporateOrganization";

    if(loggedInCompany){
      return true;
    }
  }
});
Template.companyProjectInterest.helpers({
    companyProjectsInterest: function () {
       var loggedInCompany = Meteor.user() && Meteor.user().profile.companyType === "corporateOrganization";
        var projectScope = Projects.find({projectOwner: Meteor.userId()}).scope;
        var companyProjectScope = CorpOrg.find({companyOwner: Meteor.userId()}).project;
        var hasData = _.contains(companyProjectScope, projectScope);
        if (hasData) {
            console.log("true");
            return "Company interest Project List"
        } else {
            console.log("false");
            return "No Company Project Interest"
        }
    }
})

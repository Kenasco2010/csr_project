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
        var companyProjectScope = CorpOrg.findOne({companyOwner: Meteor.userId()}).project;
        if (companyProjectScope == undefined) {
            return null
        }
        console.log(companyProjectScope);
        var projectScope = Projects.find({scope: {$in: companyProjectScope}}).fetch();
        return projectScope;

        console.log("hi");
        console.log(projectScope);
       // var hasData = _.contains(companyProjectScope.project);
        //console.log(hasData);

        if (projectScope) {
            console.log("true");
            return "Company interest Project List"
        } else {
            console.log("false");
            return "No Company Project Interest"
        }
    }
});

// Template.corporateOrgProjectsOnly.helpers({
//   corporateProjectOnly: function(){
// var companyType = Meteor.user().profile.companyType
//   return Projects.find({companyType: companyType}).fetch();
//     console.log(companytype);
//     return companytype;
//   }
// });


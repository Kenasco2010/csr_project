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

        var projectScope = Projects.find({scope: {$in: companyProjectScope}}).fetch();
        return projectScope;

       // var hasData = _.contains(companyProjectScope.project);
        //console.log(hasData);

        //if (projectScope) {
        //    console.log("true");
        //    return "Company interest Project List"
        //} else {
        //    console.log("false");
        //    return "No Company Project Interest"
        //}
    }
    //All matching Ngo for a company
    //companyNgoInterest: function () {
    //    var loggedInCompany = Meteor.user() && Meteor.user().profile.companyType === "corporateOrganization";
    //    var companyProjectScope = CorpOrg.findOne({companyOwner: Meteor.userId()}).project;
    //    if (companyProjectScope == undefined) {
    //        return null
    //    }
    //
    //    var companyNgoInterest = Ngo.find({focus: {$in: companyProjectScope}}).fetch();
    //    return companyNgoInterest;
    //
    //}
});

 Template.myCompanyProjects.helpers({
   myCompanyProject: function(){
 var companyType = Meteor.user().profile.companyType;
   return Projects.find({companyType: companyType}).fetch();
     console.log(companytype);
     return companytype;
   }
 });


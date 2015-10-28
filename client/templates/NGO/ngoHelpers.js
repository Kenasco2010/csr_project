Template.updateNgoProfile.helpers({
  updateNgoProfileDoc: function () {
    return Ngo.findOne(Session.get("updateNgoProfile"));
  }
});
Template.ngoProfile3.helpers({
  updateNgoProfileDoc: function () {
    return Ngo.findOne(Session.get("updateNgoProfile"));
  }
});
Template.ngoProfile2.helpers({
  updateNgoProfileDoc: function () {
    return Ngo.findOne(Session.get("updateNgoProfile"));
  }
});

Template.registerHelper('formatDate', function(date) {
  return moment(date).format('DD-MM-YYYY');
});

Template.corporateOrgProjectsOnly.helpers({
  corporateProjectOnly: function(){
var companyType = "corporateOrganization"
  return Projects.find({companyType: companyType}).fetch();
    console.log("hey");
    return companytype;
  }
});
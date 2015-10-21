Template.updateCompanyProfile.helpers({
  updateCompanyDoc: function () {
    return CorpOrg.findOne(Session.get("updateCompanyProfile"));
  }
})

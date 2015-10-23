Template.updateNgoProfile.helpers({
  updateNgoProfileDoc: function () {
    return Ngo.findOne(Session.get("updateNgoProfile"));
  }
});



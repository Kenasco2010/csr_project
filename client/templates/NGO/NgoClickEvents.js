Template.showNGOProfile.events({
  'click .updateNgoProfile': function () {
    Session.set("updateNgoProfile", this._id)
  },
  "click #deleteNgoAccount":function() {
    Meteor.call('deleteNgoAccount', Meteor.userId(), function (e) {
      if (!e) {
        alert("Peana is sad to see you go...")
        return Router.go('/sign-up')
      }
      else {
        return alert("Couldn't delete account");

      }
    });
  }
})

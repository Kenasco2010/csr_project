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
});
Template.ngoProfile3.events({
  'click .updateNgoProfile': function () {
    Session.set("updateNgoProfile", this._id)
  },
});
Template.ngoProfile2.rendered = function (){
  var ngoHasData = Ngo.findOne({ngoCompanyOwner: Meteor.userId()});
  console.log(ngoHasData)
  if (ngoHasData){
    Session.set("updateNgoProfile", ngoHasData._id)

  }
};
//Template.ngoProfile2.events({
//  'click .updateNgoProfileBtn': function () {
//    ngoId = Ngo.findOne({ngoCompanyOwner: Meteor.userId()})._id;
//    Meteor.call("updateNgoProfile",)
//  }
//})

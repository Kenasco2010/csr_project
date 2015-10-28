Template.myBids.helpers({
    myBids: function () {
        return Bids.find({bidOwner: Meteor.userId()})
    }
});

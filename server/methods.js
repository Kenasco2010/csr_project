Meteor.methods({
    'deleteNgoAccount': function (userId) {
        if (this.userId === userId) {
            return Meteor.users.remove(userId)
        }
        // console.log(userId)
    },
    //updateNgoProfile: function(ngoId, doc) {
    //    Ngo.update({_id: ngoId}, doc, function(err, success){
    //    });
    //},
});

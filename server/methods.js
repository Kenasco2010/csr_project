Meteor.methods({
    'deleteNgoAccount': function (userId) {
        if (this.userId === userId) {
            return Meteor.users.remove(userId)
        }
        // console.log(userId)
    },
    //updateNGO: function(projectId, companyid, companyName,companyType) {
    //    //console.log(agentId);
    //    //console.log(playerId);
    //    Projects.update(projectId ,{$addToSet:{companyId:companyid, companyName:companyName, companyType:companyType}}, function(err, id){
    //    });
    //},
});

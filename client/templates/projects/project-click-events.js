//Template.createProject.events({
//    'click #insertProject':function (){
//        projectId = Projects.findOne({projectOwner: Meteor.userId()})._id;
//        companyid = Ngo.findOne({ngoCompanyOwner: Meteor.userId()})._id;
//        companyName = Ngo.findOne({ngoCompanyOwner: Meteor.userId()}).companyName;
//        companyType = Meteor.user().profile.companyType;
//        console.log(companyid);
//        console.log(companyName);
//        console.log(companyType);
//        Meteor.call('updateNGO', projectId, companyid, companyName,companyType, function (e) {
//            if (!e) {
//
//
//            }
//            else {
//                return alert("Couldn't add this project");
//
//            }
//            //console.log(myId.count())
//        });
//
//    }
//})
Template.projectList.events({
    'click #updateProject': function () {
        Session.set("updateProject", this._id)
    }
})

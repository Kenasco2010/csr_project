//AutoForm.addHooks(
//    ["insertbidForm"],
//    {
//        before   : {
//            method: CfsAutoForm.Hooks.beforeInsert
//        },
//        after    : {
//            method: CfsAutoForm.Hooks.afterInsert
//        }
//    }
//);

AutoForm.hooks({
    insertBidsForm:{
        formToDoc: function(doc, ss, formId) {
            var currentProjectId = Router.current().params._id;
            var currentProjectName = Projects.findOne({_id: currentProjectId }).projectName;
            var companyThatPostedProject = Projects.findOne({_id: currentProjectId }).companyName;
            doc.projectBidId = currentProjectId; //Id of the project you are bidding for
            doc.projectName = currentProjectName; // Name of the project you are bidding
            doc.projectPostedByCompany = companyThatPostedProject;
            if (Meteor.user().profile.companyType == "ngo") {
                doc.projectBidBy = Ngo.findOne({ngoCompanyOwner: Meteor.userId()}).companyName;
            }else{
                doc.projectBidBy = CorpOrg.findOne({companyOwner: Meteor.userId()}).corpCompanyName;

            }
            return doc;
        },
        //onSuccess: function(operation, result, template){
        //    sAlert.success('Thank you for adding a project');
        //    Router.go('/all-projects');
        //},
        onError: function(formType, error) {
            console.log(error);
        },
    },
});

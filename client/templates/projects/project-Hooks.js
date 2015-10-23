AutoForm.hooks({
    insertProjectsForm:{
        formToDoc: function(doc, ss, formId) {
            if (Meteor.user().profile.companyType == "ngo") {
            doc.companyId = Ngo.findOne({ngoCompanyOwner: Meteor.userId()})._id;
            doc.companyName = Ngo.findOne({ngoCompanyOwner: Meteor.userId()}).companyName;
            doc.companyType = Meteor.user().profile.companyType;
            //return doc;
        }else {
            doc.companyId = CorpOrg.findOne({companyOwner: Meteor.userId()})._id;
            doc.companyName = CorpOrg.findOne({companyOwner: Meteor.userId()}).corpCompanyName;
            doc.companyType = Meteor.user().profile.companyType;
                }
            return doc;
        },
        onSuccess: function(operation, result, template){
            sAlert.success('Thank you for adding a project');
            Router.go('/all-projects');
        },
        onError: function(formType, error) {
            console.log(error);
        },
    },
});

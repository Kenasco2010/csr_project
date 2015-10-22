AutoForm.hooks({
    insertProjectsForm:{
        formToDoc: function(doc, ss, formId) {
            doc.companyId = Ngo.findOne({ngoCompanyOwner: Meteor.userId()})._id;
            doc.companyName = Ngo.findOne({ngoCompanyOwner: Meteor.userId()}).companyName;
            doc.companyType =  Meteor.user().profile.companyType;
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

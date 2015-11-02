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
            if (Meteor.user().profile.companyType === "ngo") {
                doc.projectBidBy = Ngo.findOne({ngoCompanyOwner: Meteor.userId()}).companyName;
            }else{
                doc.projectBidBy = CorpOrg.findOne({companyOwner: Meteor.userId()}).corpCompanyName;

            }
            return doc;
        },
        onSuccess: function(formType, result){
            sAlert.success('You have successfully made a bid to this project');
            swal('You have successfully made a bid to this project');
            //$('#createBidForm').modal('hide');
            //Modal.hide('insertBidsForm');
        },
        onError: function(formType, error) {
            console.log(error);
        }
    }
});

// mentioning of 1, 2, 3
// so peana is defined as ...
// our social meter..., what is social meter.
// cecp report.
// 2% of revenue or profit?
// what sector of corporate is avnach industry.
// the reason why they will be paying.... this include...
//competition... u didnt tell me how diff we are, what they do.
// kwame and myself are on diff position.
//spend soo much time on team

/*
* my name is blessing onomesino from peana.
* i don't know definition of csr should come from the beginning or at the end of the story.
* your tone goes down as u end a sentence.
* we do this by matching ...
* how to structure the competition page.
*
* */

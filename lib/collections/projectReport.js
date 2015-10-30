ProjectReports = new Mongo.Collection('report');
ProjectReports.attachSchema(new SimpleSchema({

    ngoName: {
        type: String,
        label: "NGO Name",
    },
    projectName: {
        type: String,
        label: "The name of the project",
        optional: true,
        autoform: {
            omit: true
        }
    },
    currentStatus: {
        type: String,
        label: "Project Status",
        max: 50
    },

    remarks: {
        type: String,
        label: "More Information",
        optional: true

    },
    budgetSpent: {
        type: String,
        label: "Money you have spent so far",
        optional: true
    },

    difficulty: {
        type: String,
        label: "Please state your past experience",
        optional: true
    },
    uploadfile: {
        type: String,
        optional: true,
        autoform: {
            afFieldInput: {
                type: "cfs-file",
                collection: "files"
            }
        },
        label: 'Upload Supprting documents'
    },
    bidOwner: {
        type: String,
        autoform: {
            omit: true
        },
        autoValue: function(){
            return Meteor.userId();
        }
    },
    createdAt: {
        type: Date,
        label: Date,
        autoform: {
            omit: true
        },
        autoValue: function() {
            if (this.isInsert) {
                return new Date();
            }
        }
    },
    projectPostedByCompany: {
        type: String,
        label: "The company that posted the project",
        optional: true,
        autoform: {
            omit: true
        }
    }
}));


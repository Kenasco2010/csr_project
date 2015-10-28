Bids = new Mongo.Collection('bids');
Bids.attachSchema(new SimpleSchema({
    budget: {
        type: String,
        label: "Project Budget",
        max: 50
    },

    skills: {
        type: String,
        label: "what skills do you possess",
        optional: true

    },
    timeLinePropose: {
        type: String,
        label: "Propose a time line for the project",
        optional: true
    },

    experience: {
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
        label: 'upload file'
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
    projectBidId: {
        type: String,
        label: "Id of the project you are bidding for",
        optional: true,
        autoform: {
            omit: true
        }
    },
    projectName: {
        type: String,
        label: "The name of the project",
        optional: true,
        autoform: {
            omit: true
        }
    },
    projectPostedByCompany: {
        type: String,
        label: "The company that posted the project",
        optional: true,
        autoform: {
            omit: true
        }
    },

    projectBidBy: {
        type: String,
        label: "The company or ngo that bidded for the project",
        optional: true,
        autoform: {
            omit: true
        }
    }
}));


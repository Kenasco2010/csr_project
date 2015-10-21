Projects = new Mongo.Collection('projects');
Projects.attachSchema(new SimpleSchema({
    projectName: {
        type: String,
        label: "Name of Project",
        max: 50
    },
    scope: {
        type: [String],
        label: "Scope of the Project",
        allowedValues: ["Education", "Health",
            "Agriculture","Technology"]
    },
    areaOfExecution: {
        type: String,
        label: "Area of Execution of Project",
        optional: true

    },
    budget: {
        type: String,
        label: "Budget for the project",
        max: 50,
        optional: true
    },

    timeLine: {
        type: String,
        label: "Project Timeline",
        optional: true
    },
    endGoal: {
        type: String,
        label: "End goal of the project",
        optional: true
    },
    influencer: {
        type: String,
        label: "Influencer of the project",
        optional: true
    },
    status: {
        type: String,
        label: "Status of the project",
        optional: true
    },
    projectBio: {
        type: String,
        label: "Brief bio about the project",
        optional: true
    },

    targetAudience: {
        type: String,
        label: "Your target Audience",
        optional: true
    },
    picture: {
        type: String,
        optional: true,
        autoform: {
            afFieldInput: {
                type: 'fileUpload',
                collection: 'Images',
                accept: 'image/*',
                label: 'Please Choose Picture'
            }
        }
    },
    companyId: {
        type: String,
        label: "company Id",
        optional: true,
        autoform: {
            omit: true
        }
    },
    companyName: {
        type: String,
        label: "Name of company",
        optional: true,
        autoform: {
            omit: true
        }
    },
    companyType: {
        type: String,
        label: "type of company",
        optional: true,
        autoform: {
            omit: true
        }
    },
    projectOwner: {
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
    }
}));


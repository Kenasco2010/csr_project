CorpOrg = new Mongo.Collection('corporateOrg');
CorpOrg.attachSchema(new SimpleSchema({

    corpCompanyName:{
		type: String,
		label: "Name of Company",
		max: 30,
		optional: true
	},
    focus: {
        type: [String],
        label: "Focus of the Ngo",
        allowedValues: ["Education", "Health",
                        "Agriculture","Technology"]
    },
	bio:{
		type: String,
		label: "Description of your company",
		optional: true
	},
	countryOfOperation:{
		type: String,
		label: "Which country are you operating in?",
		max: 100
	},
	picture: { //Business Logo if any
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

    project: {
        type: [String],
        optional: true,
        label: "Which projects are you currently involved in",
        allowedValues: ["Education", "Health",
            "Agriculture", "Technology"]
    },

    mission: {
        type: String,
        label: "Mission of the NGO",
        // max: 50,
        optional: true
    },
    vision: {
        type: String,
        label: "Vision of the NGO",
        optional: true
    },
    location: {
    	type: String,
    	optional: true,
    	label: "Where are these projects located"
    },
    companyOwner: {
        type: String,
        autoform: {
            omit: true
        },
        autoValue: function(){
            return Meteor.userId();
        }
    }
}));

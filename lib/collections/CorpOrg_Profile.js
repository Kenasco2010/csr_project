CorpOrg = new Mongo.Collection('corporateOrg');
CorpOrg.attachSchema(new SimpleSchema({

    corpCompanyName:{
		type: String,
		label: "Name of Company",
		max: 30,
		optional: true
	},
	bio:{
		type: String,
		label: "Description of your company",
		optional: true
	},
	country: {
    type: String,
    label: 'Which country are you located in',
    autoform: {
      type: 'bootstrap-countries-field'
        }
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
        label: "Mission of the Company",
        // max: 50,
        optional: true
    },
    vision: {
        type: String,
        label: "Vision of the Company",
        optional: true
    },
    location: {
    	type: String,
    	optional: true,
    	label: "Location of company"
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

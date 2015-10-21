CorpOrg = new Mongo.Collection('corporateOrg');
CorpOrg.attachSchema(new SimpleSchema({

	name:{
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
    	type: String,
    	optional: true,
    	label: "Which projects are you currently involved in",
        allowedValues: ['Education', 'Healthcare', 'Sanitation', 'Maternity HealthCare' ]
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
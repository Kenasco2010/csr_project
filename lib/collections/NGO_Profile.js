Ngo = new Mongo.Collection('clubs');
Ngo.attachSchema(new SimpleSchema({
    companyName: {
        type: String,
        label: "NGO Name",
        max: 50
    },
    focus: {
        type: String,
        label: "Focus of the Ngo"
    },
    yearOfEstablishment: {
        type: String,
        label: "Date Of Establishment",
        optional: true

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
    contact: {
        type: String,
        label: "Phone Contact",
        optional: true
    },
    founder: {
        type: String,
        label: "Founder of the NGO",
        optional: true
    },
    contactPerson: {
        type: String,
        label: "Any direct contact person in the NGO",
        optional: true
    },
    address: {
        type: String,
        label: "Address of the NGO",
        optional: true
    },
    RegistrationNo: {
        type: String,
        label: "Registration Number of the NGO",
        optional: true
    },
    bio: {
        type: String,
        label: "Please provide a bio of the company",
        optional: true
    },
    achievements: {
        type: String,
        label: "What your NGO has achieved",
        optional: true
    },
    targetAudience: {
        type: String,
        label: "Your target Audience",
        optional: true
    },
    accreditation: {
        type: String,
        label: "Any accreditation",
        optional: true
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
    ngoCompanyOwner: {
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


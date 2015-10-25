Router.configure({
    layoutTemplate: "masterLayout",
    notFoundTemplate: "404"
});

Router.route('/', function () {

        this.render("index");
    },
    {
        name: "index",


    });
Router.route('/sign-up', function () {

        this.render("signUp");
    },
    {
        name: "signUp",


    });
Router.route('/sign-in', function () {

        this.render("signIn");
    },
    {
        name: "signIn",


    });
Router.route('/signout', function(){
        this.render('signIn')
    },
    {
        name: 'signout',
        data: function(){
            return Meteor.logout();

        }
    });

Router.route('/create-ngo-profile', function () {

        this.render("createNgoProfile");
    },
    {
        name: "createNgoProfile"
});

// Router.route('/create-corporate-org-profile', function () {

//         this.render("create-corporate-org-profile");
//     },
//     {
//         name: "create-corporate-org-profile"


//     });
Router.route('/my-ngo-profile', function () {

        this.render("showNGOProfile");
    },
    {
        name: "showNGOProfile",
        data: function () {
            var id = Meteor.userId();
            return {
               myNGOProfile: Ngo.findOne({ngoCompanyOwner: id})

            }
        },
        layoutTemplate: "dashboardLayout"
    });
Router.route('/update-ngo-profile', function () {

        this.render("updateNgoProfile");
    },
    {
        name: "updateNgoProfile",
        layoutTemplate: "dashboardLayout"


    });



Router.route('/create-company-profile', function(){
    this.render('createCompanyProfile');
},{
    name: "createCompanyProfile"
})



Router.route('/my-company-profile', function(){
    this.render('showCompanyProfile');
}, {
    name: "showCompanyProfile",
    data: function(){
        var id = Meteor.userId();
        return {
            myCompanyProfile: CorpOrg.findOne({companyOwner:id})
        }
    },
    layoutTemplate: "dashboardLayout"
})

Router.route('/update-company-profile', function(){
    this.render("updateCompanyProfile");
},{
    name: "updateCompanyProfile",
    layoutTemplate: "dashboardLayout"
})

Router.route('/add-project', function () {

        this.render("createProject");
    },
    {
        name: "createProject",
        layoutTemplate: "masterLayout"


    });
Router.route('/all-projects', function () {

        this.render("projectList");
    },
    {
        name: "projectList"


    });
Router.route('/project-update', function () {

        this.render("updateProject");
    },
    {
        name: "updateProject"
    });
Router.route('/project/:_id', function () {
    this.render('/projectDetails');
},
    {
        name: 'projectDetails',
        data: function () {
            var _id = this.params._id;
            return {
                projectDetail: Projects.findOne(_id)
            }
        }
    });
Router.route('/dashboard', function () {

        this.render("dashboard");
    },
    {
        name: "dashboard",
        layoutTemplate: "dashboardLayout"
    });

Router.route('/form-wizard', function () {

        this.render("formWizard");
    },
    {
        name: "formWizard"
    });


Router.route('/company-projects', function () {

        this.render("companyProjectInterest");
    },
    {
        name: "companyProjectInterest",
        data: function(){
        var id = Meteor.userId();
        return {
            company: CorpOrg.findOne({companyOwner:id}),
            ngo: Ngo.findOne({ngoCompanyOwner:id})
            }
        },
        layoutTemplate: "dashboardLayout"
    });



Router.route('/sample-form', function () {

        this.render("sampleForm");
    },
    {
        name: "sampleForm",
        layoutTemplate: "dashboardLayout"

    });
Router.route('/dashboard-content', function () {

        this.render("dashboardContent");
    },
    {
        name: "dashboardContent",
        layoutTemplate: "dashboardLayout"
    });
Router.route('/ngo-profile-2', function () {

        this.render("ngoProfile2");
    },
    {
        name: "ngoProfile2"
    });
Router.route('/ngo-profile-3', function () {

        this.render("ngoProfile3");
    },
    {
        name: "ngoProfile3",
        data: function () {
            var id = Meteor.userId();
            return {
                myNGOProfile: Ngo.findOne({ngoCompanyOwner: id})

            }
        }
    });

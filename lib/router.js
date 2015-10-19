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
Router.route('/create-ngo-profile', function () {

        this.render("createNgoProfile");
    },
    {
        name: "createNgoProfile"


    });
Router.route('/create-corporate-org-profile', function () {

        this.render("create-corporate-org-profile");
    },
    {
        name: "create-corporate-org-profile"


    });
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
        }
    });
Router.route('/update-ngo-profile', function () {

        this.render("updateNgoProfile");
    },
    {
        name: "updateNgoProfile"


    });

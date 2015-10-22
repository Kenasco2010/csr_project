AccountsTemplates.addField({
  _id: "companyType",
  type: "select",
  required: false,
  displayName: "Type of Company",
  select: [
    {
      text: "Select Organization",
      value: "selectorganization",
    },
  {
    text: "NGO",
    value: "ngo",
  },
  {
    text: "Corporate Organization",
    value: "corporateOrganization",
  }
  ],


});

var mySubmitFunc = function(error, state){
  if (!error) {
    if (state === "signIn" && Meteor.user().profile.companyType === "ngo") {
      Router.go('/');
      swal('Welcome back!, we appreciate you');

    } else if(state === "signIn" && Meteor.user().profile.companyType === "corporateOrganization") {
      Router.go('/');
      swal('Welcome back!, we appreciate you');

    }
    if (state === "signUp" && Meteor.user().profile.companyType === "ngo") {
      Router.go('/create-ngo-profile');
      swal('Welcome to Peana!, we appreciate you');

    } else if(state === "signUp" && Meteor.user().profile.companyType === "corporateOrganization") {
      Router.go('/create-company-profile');
      swal('Welcome to Peana!, we appreciate you');

    }
  }
};

AccountsTemplates.configure({
  onSubmitHook: mySubmitFunc
});


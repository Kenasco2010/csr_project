AccountsTemplates.addField({
  _id: "companyType",
  type: "select",
  required: false,
  displayName: "Type of Company",
  select: [
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

    } else if(state === "signIn" && Meteor.user().profile.companyType === "corporateOrganization") {
      Router.go('/');
    }
    if (state === "signUp" && Meteor.user().profile.companyType === "ngo") {
      Router.go('/create-ngo-profile');

    } else if(state === "signUp" && Meteor.user().profile.companyType === "corporateOrganization") {
      Router.go('/create-company-profile');
    }
  }
};

AccountsTemplates.configure({
  onSubmitHook: mySubmitFunc
});


Accounts.createUser({email: email, password: password}, function(err) {
 if(!err){
   alert("Thank you for signing up")
 }
});



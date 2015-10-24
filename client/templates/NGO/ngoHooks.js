AutoForm.hooks({
  insertNgoForm:{
    onSuccess: function(operation, result, template){
      //sAlert.success('Thank you for creating your profile');
      Router.go('/ngo-profile-2');
    },
    onError: function(formType, error) {
      console.log(error);
    },
  }
});

AutoForm.hooks({
  insertNgoForm2:{
    onSuccess: function(operation, result, template){
      sAlert.success('Thank you for creating your profile');
      Router.go('/ngo-profile-3');
    },
    onError: function(formType, error) {
      console.log(error);
    }

  },
  updateNgoForm:{
    onSuccess: function(operation, result, template){
      sAlert.success('Thank you for updating your profile');
      Router.go('/my-ngo-profile');
    },
    onError: function(formType, error) {
      console.log(error);
    }

  },

});


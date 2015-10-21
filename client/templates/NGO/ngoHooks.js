AutoForm.hooks({
  insertNgoForm:{
    onSuccess: function(operation, result, template){
      sAlert.success('Thank you for creating your profile');
      Router.go('showNGOProfile');
    },
    onError: function(formType, error) {
      console.log(error);
    },
  },



});


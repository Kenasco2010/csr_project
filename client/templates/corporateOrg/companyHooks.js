AutoForm.hooks({
	insertCompanyForm:{
		onSuccess: function(operation, result, template){
			sAlert.success('Thank you for creating your company profile');
			Router.go('showCompanyProfile');
		},
		onError: function(formType, error){
			console.log(error);
		}
	}
})
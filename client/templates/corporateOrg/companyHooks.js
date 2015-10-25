AutoForm.hooks({
	insertCompanyForm:{
		onSuccess: function(operation, result, template){
			sAlert.success('Thank you for creating your company profile');
			Router.go('my-company-profile');
		},
		onError: function(formType, error){
			console.log(error);
		}
	},
	updateCompanyForm:{
		onSuccess: function(operation, result, template){
			sAlert.success('Thank you for updating your company profile');
			Router.go('my-company-profile');
		},
		onError: function(formType, error){
			console.log(error);
		}
	},
})

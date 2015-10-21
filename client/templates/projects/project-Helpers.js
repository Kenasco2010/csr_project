Template.projectList.helpers({
    listOfProjects: function () {
        return Projects.find({projectOwner: Meteor.userId()}).fetch()
    }
})
Template.updateProject.helpers({
    updateProject: function () {
        return Projects.findOne(Session.get("updateProject"))
    }
})
Template.projectList.helpers({
    docs: function () {
        return Projects.find();
    },
    onError: function () {
        return function (error) { alert("Sorry this action couldn't be performed!"); console.log(error); };
    },
    onSuccess: function () {
        return function (result) { alert("You have successfully deleted this project!"); console.log(result); };
    },
    beforeRemove: function () {
        return function (Projects, id) {
            var doc = Projects.findOne(id);
            if (confirm('Are you sure you  want to delete this  "' + doc.projectName + '"?')) {
                this.remove();
            }
        };
    }
});

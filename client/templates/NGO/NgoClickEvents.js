Template.showNGOProfile.events({
  'click .updateNgoProfile': function () {
    Session.set("updateNgoProfile", this._id)
  },
  "click #deleteNgoAccount":function() {
    Meteor.call('deleteNgoAccount', Meteor.userId(), function (e) {
      if (!e) {
        alert("Peana is sad to see you go...")
        return Router.go('/sign-up')
      }
      else {
        return alert("Couldn't delete account");

      }
    });
  }
})
Template.formWizard.events({
'click .btn-submit': function () {
  var formname = $(this).attr('name');
  var tabname = $(this).attr('href');

  if ($('#' + formname)[0].checkValidity()) { /* Only works in Firefox/Chrome need polyfill for IE9, Safari. http://afarkas.github.io/webshim/demos/ */
    e.preventDefault();
    $('ul.nav li a[href="' + tabname + '"]').parent().removeClass('disabled');
    $('ul.nav li a[href="' + tabname + '"]').trigger('click');
  }

},
  'click .ul.nav li': function () {
    if ($(this).hasClass('disabled')) {
      e.preventDefault();
      return false;
    }
  }

});
//$(function(){
//  $('a[title]').tooltip();
//
//  $('.btn-submit').on('click', function(e) {
//
//
//
//  });
//
//  $('ul.nav li').on('click', function(e) {
//
//  });
//});

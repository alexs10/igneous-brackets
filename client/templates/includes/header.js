Template.header.helpers({
  'isLoggedIn': function() {
    return Meteor.user();
  }
});

Template.header.helpers({
  // activeRouteClass: function(args) {
  //   //return isPageActive(args);
  // }
});

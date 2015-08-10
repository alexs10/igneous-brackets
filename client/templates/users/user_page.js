Template.userPage.helpers({
  userName: function() {
    return Meteor.user().username;
  },
  testValue: function() {
    return Meteor.user().profile.testValue;
  }
})

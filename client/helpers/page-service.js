Template.registerHelper('isPageActive', function ( /* Route Names */) {
  console.log('here');
  var args = Array.prototype.slice.call(arguments,0);
  args.pop();

  console.log(args);
  var active = _.any(args, function(name) {
    return Router.current() && Router.current().route.getName() === name;
  });

  console.log('active:')
  console.log(active && 'active');
  return active && 'active';
});

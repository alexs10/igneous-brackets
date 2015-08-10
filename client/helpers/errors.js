Errors = new Mongo.Collection(null)

throwError = function(message) {
  console.log('in throw error');
  Errors.insert({message: message});
}

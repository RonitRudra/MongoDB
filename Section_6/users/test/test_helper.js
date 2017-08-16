const mongoose = require('mongoose');

// make mongoose use ES6 promise
mongoose.Promise = global.Promise;

before((done) => {
  mongoose.connect('mongodb://localhost/users_test');
  mongoose.connection
    .once('open', () => {
      console.log('Good to go!');
      done();
    })
    .on('error', (error) => {
      console.console.warn('Warning',error);;
    });
});


beforeEach((done) => {
  mongoose.connection.collections.users.drop(() => {
    done();
 });
});

const assert  = require('assert');
const User = require('../src/user');

describe('Reading Records',() => {
  let joe;
  beforeEach((done) =>{
    // this is so that joe can be found
    // didnt use const as it makes object unavailable outside beforeEach block
    joe = new User({name: 'Joe'});
    joe.save()
      .then(() => done());
  });
  it('find all joe', (done) => {
    User.find({name: 'Joe'})
      .then((users) => {
        console.log(users[0]._id);
        console.log(joe._id);
        assert(users[0]._id.toString() === joe._id.toString());
        done();
      });
  });
});

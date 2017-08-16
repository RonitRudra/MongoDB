const assert = require('assert');
const User = require('../src/user');

describe('Creating Records', () => {
  it('saves a user',(done) => {
    const joe = new User({name:'Joe'});
    // joe.isNew is true
    // saving is a promise
    joe.save()
    //joe.isNew is false
    // then works on resolved promise
    // while catch works on rejected promise
      .then(() => {
        assert(!joe.isNew);
        done();
      });
  });
});

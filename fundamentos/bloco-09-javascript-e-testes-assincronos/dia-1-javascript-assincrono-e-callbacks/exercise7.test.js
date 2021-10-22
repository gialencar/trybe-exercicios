const uppercase = require('./exercise7');

test('if uppercase "test" returns "TEST"', (done) => {
  try {
    const callback = (str) => {
      expect(str).toBe('TEST');
      done();
    }; 
    uppercase('test', callback);
  } catch (error) {
    done(error);
  }
});

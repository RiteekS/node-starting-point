var assert = require('assert');
var Calculator = require('../src/calculator');
describe('Calculator', function() {

  describe('sum', function() {
    it('should return 2 when inputs are 1,1', function() {
      assert.equal(2, Calculator.sum(1,1));
    });
  });

  describe('div', function() {
    it('should return 0 when inputs are 0,1', function() {
      assert.equal(0, Calculator.div(0,1));
  	});
    it('should return "Not possible" when inputs are 1,0', function() {
      assert.equal("Not possible", Calculator.div(1,0));
  	});

  });
});

var assert = require('assert');
var Calculator = require('../src/calculator');
describe('Calculator', function() {

  describe('sum', function() {
    it('should return 2 when inputs are 1,1', function() {
      assert.equal(2, Calculator.sum(1,1));
    });
  });

  describe('subtract', function() {
    it('should return 0 when inputs are 1,1', function() {
      assert.equal(0, Calculator.sub(1,1));
    });
  });

  describe('mult', function() {
    it('should return 1 when inputs are 1,1', function() {
      assert.equal(1, Calculator.mult(1,1));
    });
  });

  describe('divide', function() {
    it('should return 3 when inputs are 9,3', function() {
      assert.equal(3, Calculator.div(9,3));
    });

    it('cannot perform', function() {
      assert.throws(function(){Calculator.div(1, 0)}, Error, 'Denominator can\'t be zero')
    })
  });

  describe('abs', function() {
    it('should return 1 when input is -1', function() {
      assert.equal(1, Calculator.abs(1));
    });
    it('should return 0 when input is 0', function() {
      assert.equal(0, Calculator.abs(0));
    });
    it('should return 1 when input is 1', function() {
      assert.equal(1, Calculator.abs(1));
    });
    
  });

  describe('ceil', function() {
    it('should return 1 when input is 1', function() {
      assert.equal(1, Calculator.ceil(1));
    });
    it('should return 1 when input is 0.5', function() {
      assert.equal(1, Calculator.ceil(0.5));
    });
    it('should return -1 when input is -1.5', function() {
      assert.equal(-1, Calculator.ceil(-1.5));
    });
    
  });

  describe('cos', function() {
    it('should return 1 when input is 0', function() {
      assert.equal(1, Calculator.cos(0));
    });
    it('should return -1 when input is Pi', function() {
      assert.equal(-1, Calculator.cos(Math.PI));
    });
    it('should return -1 when input is -Pi ', function() {
      assert.equal(-1, Calculator.cos(-Math.PI));
    });
   });

  describe('exp', function() {
    it('should return 1 when input is 0', function() {
      assert.equal(1, Calculator.exp(0));
    });
    it('should return 0 when input is -Infinity', function() {
      assert.equal(0, Calculator.exp(-Infinity));
    });  
  });

  describe('sqrt', function() {
    it('should return 0 when input is 0', function() {
      assert.equal(0, Calculator.sqrt(0));
    });
    it('can\'t perform on negative no.', function() {
      assert.throws(function(){return Calculator.sqrt(-4)},Error, "Invalid Input");
    });
    it('should return 2 when input is 4 ', function() {
      assert.equal(2, Calculator.sqrt(4));
    });
   });

  describe('log', function() {
    it('should return 0 when input is 1', function() {
      assert.equal(0, Calculator.log(1));
    });
    it('should return -Infinity when input is 0', function() {
      assert.equal(-Infinity, Calculator.log(0));
    });
    it('Log does not work on negative nos.', function() {
      assert.throws(()=>{return Calculator.log(-2)}, Error, "Invalid Input");
    });

   });

  describe('max', function() {
    it('should return 3 when input is 2,3', function() {
      assert.equal(3, Calculator.max(2,3));
    });
    it('should return -2 when input is -2,-3', function() {
      assert.equal(-2, Calculator.max(-2,-3));
    });
   });

  describe('cbrt', function() {
    it('should return 3 when input is 27', function() {
      assert.equal(3, Calculator.cbrt(27));
    });
    it('should return -2 when input is -8', function() {
      assert.equal(-2, Calculator.cbrt(-8));
    });
   });  

  describe('cube', function() {
    it('should return 8 when input is 2', function() {
      assert.equal(8, Calculator.cube(2));
    });
    it('should return -8 when input is -2', function() {
      assert.equal(-8, Calculator.cube(-2));
    });
   });

  describe('sqr', function() {
    it('should return 16 when input is 4', function() {
      assert.equal(16, Calculator.sqr(4));
    });
    it('should return 4 when input is -2', function() {
      assert.equal(4, Calculator.sqr(-2));
    });
   });
});
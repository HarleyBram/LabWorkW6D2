const assert = require('assert');
const PaintCan = require('../paint_can.js');

describe('PaintCan', function() {
  beforeEach(function() {
    paint_can = new PaintCan(3);
  });

  xit('should have a capacity', function() {
    const actual = paint_can.capacity
    assert.equal(actual, 3)
  });
  xit('should be able to tell if it is empty', function() {
    const actual = paint_can.hasPaint()
    assert.equal(actual, true)
  });
  it('should empty itself of paint', function() {
    paint_can.empty()
    const actual = paint_can.capacity
    assert.equal(actual, 0)
  });
});

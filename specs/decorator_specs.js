const assert = require('assert');
const Decorator = require('../decorator.js');
const PaintCan = require('../paint_can.js');
const Room = require('../room.js');


describe('Decorator', function() {
  beforeEach(function() {
    decorator = new Decorator();
    paint_can = new PaintCan(3);
    room = new Room(25, false);
  });
  it('should start with empty stock', function() {
    const actual = decorator.stock
    assert.deepEqual(actual, [])
  })
  it('should add to stock', function() {
    decorator.addToStock(paint_can)
    const actual = decorator.stock.length
    const expected = 1
    assert.equal(actual, expected)
  })
  it('should measure total paint',  function() {
    decorator.addToStock(paint_can)
    const actual = decorator.measurePaint()
    const expected = 3
    assert.equal(actual, expected)
  })
});

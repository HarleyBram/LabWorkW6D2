const assert = require('assert');
const Room = require('../room.js');

describe('Room', function() {
  beforeEach(function() {
    room = new Room(25, false);
  });
  
  it('should have an area', function() {
    const actual = room.area;
    const expected = 25;
    assert.strictEqual(actual, expected);
  })
  it('should start not painted', function() {
    const actual = room.painted
    assert.equal(actual, false)
  });
  it('should start not painted', function() {
    room.paintRoom()
    const actual = room.painted
    assert.equal(actual, true)
  });
});

const PaintCan = function(capacity){
  this.capacity = capacity
};

PaintCan.prototype.hasPaint = function () {
  if (this.capacity > 0){
    return true
  } else {
    return false}
};

PaintCan.prototype.empty = function () {
  this.capacity = 0
};

module.exports = PaintCan

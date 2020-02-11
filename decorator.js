const Decorator = function() {
  this.stock = []
};

Decorator.prototype.addToStock = function (paint_can) {
  this.stock.push(paint_can)
  return this.stock.length
};

Decorator.prototype.measurePaint = function () {
  return this.stock.length * this.paint_can.capacity
};



module.exports = Decorator

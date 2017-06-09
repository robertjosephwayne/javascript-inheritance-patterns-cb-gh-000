const app = "I don't do much.";

function Shape(sides, x, y) {
  this.sides = sides;
  this.x = x;
  this.y = y;
}

Shape.prototype.move = function(x, y) {
  this.x = x;
  this.y = y;
};

Shape.prototype.position = function() {
  return(this.x + ", " + this.y);
};

function Quadrilateral(x, y, sideOneLength, sideTwoLength, sideThreeLength, sideFourLength) {
  Shape.call(this, 4, x, y);
  this.sideOneLength = sideOneLength;
  this.sideTwoLength = sideTwoLength;
  this.sideThreeLength = sideThreeLength;
  this.sideFourLength = sideFourLength;
}

Quadrilateral.prototype = Object.create(Shape.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;

Quadrilateral.prototype.perimeter = function() {
  return this.sideOneLength + this.sideTwoLength + this.sideThreeLength + this.sideFourLength;
}

function Rectangle(x, y, width, height) {
 Quadrilateral.call(this, x, y, width, height, width, height);
  this.width = width;
  this.height = height;
}

Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function() {
  return this.width * this.height;
};

Rectangle.prototype.perimeter = function() {
  return (this.width + this.height) * 2;
};

function Square (sides, length) {
  Rectangle.call(this, x, y, length, length);
  this.length = length;
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

const rect = new Rectangle(4, 3, 2);
const square = new Square(1, 2, 3);
const shape = new Shape(3, 2, 2);

for (const prop in rect) {
  if (rect.hasOwnProperty(prop)) {
    console.log(`rect. ${prop} = ${rect[prop]}`);
  }
}

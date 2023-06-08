function RectangleArea(length, width) {
  return length * width;
}

function RectanglePerimeter(length, width) {
  return 2 * (length + width);
}

function CircleArea(radius) {
  return Math.PI * radius * radius;
}

function CirclePerimeter(radius) {
  return 2 * Math.PI * radius;
}

function TriangleArea(base, height) {
  return 0.5 * base * height;
}

function TrianglePerimeter(side1, side2, side3) {
  return side1 + side2 + side3;
}


module.exports = {
  RectangleArea,
  RectanglePerimeter,
  CircleArea,
  CirclePerimeter,
  TriangleArea,
  TrianglePerimeter
};

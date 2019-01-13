var circles = [];
var circle;
var num = 7;


function setup() {
  createCanvas(400, 400);
  background(200);
  angleMode(DEGREES);
  for (var i = 0; i < num; i++) {
    var c = color(random(10, 190), random(10, 190), random(10, 190), 200);
    var r = floor(i * 40 + random(0, 20));
    circles[i] = new Circle(200, 200, r, c);
  }
  // console.log(circles);
}

function draw() {
  background(200);
  // translate(200,200);
  for (var i = 0; i < circles.length; i++) {
    circles[i].update();
    circles[i].show();
  }
}


function Circle(x_, y_, r_, c_) {
  this.x = x_;
  this.y = y_;
  this.r = r_;
  this.c = c_;

  this.rot = floor(random(0, 360));
  this.offset = random(-1, 1) * 2;
  this.len = floor(random(90, 270));

  this.update = function() {
    this.rot += this.offset;
  }

  this.show = function() {
    push();
    translate(this.x, this.y);
    rotate(this.rot);
    noFill();
    stroke(this.c);
    strokeWeight(10);
    arc(0, 0, this.r, this.r, 0, this.len);
    pop();
  }
}

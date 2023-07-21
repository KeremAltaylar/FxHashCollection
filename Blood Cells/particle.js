function Particle(r, g, b, x, y) {
  this.xpos = x;
  this.ypos = y;
  this.pos = createVector(this.xpos, this.ypos);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.maxspeed = 4;
  this.prevPos = this.pos.copy();

  this.update = function () {
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
  };

  this.applyForce = function (force) {
    this.acc.add(force);
  };

  this.show = function () {
    this.red = r;
    this.green = g;
    this.blue = b;
    stroke(r, g, b);
    strokeWeight(0.1);
    line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
    //point(this.pos.x, this.pos.y);
    this.updatePrev();
  };
  this.updatePrev = function () {
    this.prevPos.x = this.pos.x;
    this.prevPos.y = this.pos.y;
  };
  this.edges = function () {
    if (this.pos.x > windowWidth - 30) {
      this.pos.x = 30;
      this.updatePrev();
    }
    if (this.pos.x < 30) {
      this.pos.x = windowWidth - 30;
      this.updatePrev();
    }
    if (this.pos.y > windowHeight - 30) {
      this.pos.y = 30;
      this.updatePrev();
    }
    if (this.pos.y < 30) {
      this.pos.y = windowHeight - 30;
      this.updatePrev();
    }
  };
  this.follow = function (vectors) {
    var x = floor(this.pos.x / scl);
    var y = floor(this.pos.y / scl);
    var index = x + y * cols;
    var force = vectors[index];
    this.applyForce(force);
  };
}

function Particle2() {
  this.pos = createVector(random(windowWidth), random(windowHeight));
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.maxspeed = 4;
  this.prevPos = this.pos.copy();

  this.update = function () {
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
  };

  this.applyForce = function (force) {
    this.acc.add(force);
  };

  this.show = function () {
    stroke(25, 70, 160, 240);
    strokeWeight(0.3);
    line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
    //point(this.pos.x, this.pos.y);
    this.updatePrev();
  };
  this.updatePrev = function () {
    this.prevPos.x = this.pos.x;
    this.prevPos.y = this.pos.y;
  };
  this.edges = function () {
    if (this.pos.x > width) {
      this.pos.x = 0;
      this.updatePrev();
    }
    if (this.pos.x < 0) {
      this.pos.x = width;
      this.updatePrev();
    }
    if (this.pos.y > height) {
      this.pos.y = 0;
      this.updatePrev();
    }
    if (this.pos.y < 0) {
      this.pos.y = height;
      this.updatePrev();
    }
  };
  this.follow = function (vectors) {
    var x = floor(this.pos.x / scl);
    var y = floor(this.pos.y / scl);
    var index = x + y * cols;
    var force = vectors[index];
    this.applyForce(force);
  };
}

function Particle(r, g, b, x, y, stw) {
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
    this.acc.mult(0.1);
  };

  this.applyForce = function (force) {
    this.acc.add(force);
  };

  this.show = function () {
    colorMode(HSB);
    this.red = r;
    this.green = g;
    this.blue = b;
    this.sw = stw;
    noFill();
    stroke(this.red, this.green, this.blue);
    strokeWeight(this.sw);
    //ellipse(this.pos.x, this.pos.y, this.prevPos.x / 3, this.prevPos.y / 13);
    point(this.pos.x, this.pos.y);
    point(windowWidth - this.pos.x, this.pos.y);
    point(this.pos.x, windowHeight - this.pos.y);
    point(windowWidth - this.pos.x, windowHeight - this.pos.y);
    point(this.pos.x, this.pos.y / 8);
    point(windowWidth - this.pos.x, this.pos.y / 8);
    point(this.pos.x, windowHeight - this.pos.y / 8);
    point(windowWidth - this.pos.x, windowHeight - this.pos.y / 8);
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

function Particle2(r, g, b, x, y, stw) {
  this.xpos = x;
  this.ypos = y;
  this.pos = createVector(this.xpos, this.ypos);
  this.vel = createVector(0, 20);
  this.acc = createVector(20, 0);
  this.maxspeed = 4;
  this.prevPos = this.pos.copy();

  this.update = function () {
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    this.pos.add(this.vel);
    this.acc.mult(0.1);
  };

  this.applyForce = function (force) {
    this.acc.add(force);
  };

  this.show = function () {
    this.red = r;
    this.green = g;
    this.blue = b;
    this.sw = stw;
    noFill();
    stroke(this.red);
    strokeWeight(this.sw);
    //ellipse(this.pos.x, this.pos.y, this.prevPos.x / 3, this.prevPos.y / 13);
    point(this.pos.x, this.pos.y);
    point(windowWidth - this.pos.x, this.pos.y);
    point(this.pos.x, windowHeight - this.pos.y);
    point(windowWidth - this.pos.x, windowHeight - this.pos.y);
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
function Particle3(r, g, b, x, y, stw) {
  this.xpos = x;
  this.ypos = y;
  this.pos = createVector(this.ypos, this.xpos);
  this.vel = createVector(0, 10);
  this.acc = createVector(10, 0);
  this.maxspeed = 9;
  this.prevPos = this.pos.copy();

  this.update = function () {
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    this.pos.add(this.vel);
    this.acc.mult(0.2);
  };

  this.applyForce = function (force) {
    this.acc.add(force);
  };

  this.show = function () {
    this.red = r;
    this.green = g;
    this.blue = b;
    this.sw = stw;
    noFill();
    stroke(this.red, this.green, this.blue);
    strokeWeight(this.sw);
    //ellipse(this.pos.x, this.pos.y, this.prevPos.x / 3, this.prevPos.y / 13);
    this.ww = windowWidth;
    this.wh = windowHeight;
    ellipse(this.pos.x, this.pos.y, 4, 4);
    ellipse(this.ww - this.pos.x, this.pos.y, 2, 2);
    ellipse(
      //
      this.pos.x,
      this.wh - this.pos.y,
      2,
      2
    );
    ellipse(this.ww - this.pos.x, this.wh - this.pos.y, 2, 2);
    point(this.pos.y, this.pos.x);
    point(this.ww - this.pos.y, this.pos.x);
    point(this.ww - this.pos.y, this.wh - this.pos.x);
    point(this.pos.y, this.wh - this.pos.x);
    //point(this.ww - this.pos.y, this.wh - this.pos.x);
    this.updatePrev();
  };
  this.updatePrev = function () {
    this.prevPos.x = this.pos.x;
    this.prevPos.y = this.pos.y;
  };
  this.edges = function () {
    if (this.pos.x > windowWidth - 30) {
      this.pos.y = 30;
      this.updatePrev();
    }
    if (this.pos.x < 30) {
      this.pos.y = windowWidth - 30;
      this.updatePrev();
    }
    if (this.pos.y > windowHeight - 30) {
      this.pos.x = 30;
      this.updatePrev();
    }
    if (this.pos.y < 30) {
      this.pos.x = windowHeight - 30;
      this.updatePrev();
    }
  };
  this.follow = function (vectors) {
    var x = floor(this.pos.x / scl);
    var y = floor(this.pos.y / scl);
    var index = x + y * rows;
    var force = vectors[index];
    this.applyForce(force);
  };
}

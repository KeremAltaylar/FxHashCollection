var inc = fxrandRange(0.1, 2, 0.1);
var scl = fxrandRange(15, 50, 1);
var magv = fxrandRange(0.1, 3, 0.1);
var cols, rows;
var fr;
var zoff = 0;
var particles = [];
var particles2 = [];
var flowfield;
var magv;
var cr = fxrandRange(100, 200, 1);
var cg = fxrandRange(10, 11, 1);
var cb = fxrandRange(10, 11, 1);
var dr = fxrandRange(180, 190, 1);
var dg = fxrandRange(50, 55, 1);
var db = fxrandRange(10, 15, 1);
var indexk = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);

  cols = floor(windowWidth / scl);
  rows = floor(windowHeight / scl);
  fr = createP("");
  flowfield = new Array(cols * rows);
  for (i = 0; i < 500; i++) {
    particles[i] = new Particle(
      cr,
      cg,
      cb,
      (fxrand() * i) / 10 + 30,
      (fxrand() * i) / 5 + 30,
      0.1
    );
  }
  for (i = 0; i < 500; i++) {
    particles2[i] = new Particle(
      dr,
      dg,
      db,
      (fxrand() * i) / 10 + 300,
      (fxrand() * i) / 5 + 300,
      0.1
    );
  }
  background(0);
}

function draw() {
  if (indexk > 200) {
    noLoop();
  }
  var yoff = 0;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      var index = x + y * cols;
      flowfield[index] = v;
      var angle = fxrand() * xoff;
      var v = p5.Vector.fromAngle(angle);
      v.setMag(magv);
      xoff += inc;
      // stroke(255, 130);
      // push();
      // translate(x * scl, y * scl);
      // rotate(v.heading());
      // strokeWeight(0.1);
      // line(0, 0, scl, 0);
      // pop(); //fill(r);

      //rect(scl * x, scl * y, scl, scl);
    }
    yoff += inc;
    zoff += 0.0008;
  }
  for (var i = 0; i < particles.length; i++) {
    particles[i].follow(flowfield);
    particles[i].update();
    particles[i].edges();
    particles[i].show();
  }
  for (var i = 0; i < particles2.length; i++) {
    particles2[i].follow(flowfield);
    particles2[i].update();
    particles2[i].edges();
    particles2[i].show();
  }
  push();
  rectMode(RADIUS);
  fill(50, 120, 100, 1 * sin(millis() * 1000));
  noStroke();
  rect(
    windowWidth / 2,
    windowHeight / 2,
    windowWidth / 2 - 30,
    windowHeight / 2 - 30
  );
  pop();
  indexk = indexk + 1;
  //console.log(indexk);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

  cols = floor(windowWidth / scl);
  rows = floor(windowHeight / scl);
  //fr = createP("");
  flowfield = new Array(cols * rows);

  for (i = 0; i < 500; i++) {
    particles[i] = new Particle(
      cr,
      cg,
      cb,
      (fxrand() * i) / 10 + 30,
      (fxrand() * i) / 5 + 30,
      0.1
    );
  }
  for (i = 0; i < 500; i++) {
    particles2[i] = new Particle(
      dr,
      dg,
      db,
      (fxrand() * i) / 10 + 300,
      (fxrand() * i) / 5 + 300,
      0.1
    );
  }
  push();
  noStroke();
  background(0);
  rectMode(RADIUS);
  fill(0);
  //fill(alpha(50));
  rect(
    windowWidth / 2,
    windowHeight / 2,
    windowWidth / 2 - 30,
    windowHeight / 2 - 30
  );

  rectMode(RADIUS);
  fill(50, 120, 100, 1 * sin(millis() * 1000));
  noStroke();
  rect(
    windowWidth / 2,
    windowHeight / 2,
    windowWidth / 2 - 30,
    windowHeight / 2 - 30
  );
  pop();
}

function fxrandRange(min, max, step) {
  value = Math.round((fxrand() * (max - min)) / step);
  return value * step + min;
}

window.$fxhashFeatures = {
  "Red Value1": cr,
  "Red Value2": dr,
  "Flow Magnitude": magv,
  "Flow Increase": inc,
  "Cell Scale": scl,
};

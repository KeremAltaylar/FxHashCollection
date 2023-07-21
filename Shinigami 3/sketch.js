var inc = fxrandRange(2, 30, 0.1);
var scl = fxrandRange(100, 200, 1);
var magv = fxrandRange(0.11, 2, 0.1);
var cols, rows;
var fr;
var zoff = 0;
var particles = [];
var particles2 = [];
var particles3 = [];
var flowfield;
var magv;
var cr = fxrandRange(170, 255, 1);
//var cg = random(0, 255);
var cg = fxrandRange(100, 250, 1);
var cb = fxrandRange(180, 200, 1);
var fr = fxrandRange(170, 255, 1);
//var cg = random(0, 255);
var fg = fxrandRange(10, 150, 1);
var fb = fxrandRange(10, 100, 1);
var sh = fxrandRange(10, 300, 1);
var sw = fxrandRange(10, 300, 1);
var conscol = 10;
var indexk = 0;

function setup() {
  frameRate(240);
  createCanvas(windowWidth, windowHeight);
  cols = floor(windowWidth / scl);
  rows = floor(windowHeight / scl);
  fr = createP("");
  flowfield = new Array(cols * rows);
  for (i = 0; i < 1000; i++) {
    particles[i] = new Particle(
      cr - i / conscol,
      cb - i / conscol,
      cg - i / conscol,
      fxrandRange(0, windowWidth, 10),
      fxrandRange(0, windowHeight, 10),
      0.1
    );
  }
  for (i = 0; i < 1000; i++) {
    particles3[i] = new Particle(
      cr - i / conscol,
      cb - i / conscol,
      cg - i / conscol,
      (windowWidth / 2) * fxrandRange(1, 20, 1),
      (windowHeight / 2) * fxrand(1, 20, 1),
      0.1
    );
  }
  for (i = 0; i < 1000; i++) {
    particles2[i] = new Particle2(
      fr - i / conscol,
      fb - i / conscol,
      fg - i / conscol,
      (fxrand() * windowWidth) / 10,
      (fxrand() * windowHeight) / 10,
      0.1
    );
  }
  for (i = 0; i < 1000; i++) {
    particles2[i] = new Particle2(
      fr - i / conscol,
      fb - i / conscol,
      fg - i / conscol,
      windowWidth / 2,
      windowHeight / 2,
      0.1
    );
  }
  background(255);
}

function draw() {
  if (indexk > 1800) {
    noLoop();
  }
  var yoff = 0;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      var index = x + y * cols;
      flowfield[index] = v;
      var angle = xoff * yoff;
      var v = p5.Vector.fromAngle(angle);
      v.setMag(magv);
      xoff += inc;
      stroke(0, 130);
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
  for (var i = 0; i < particles3.length; i++) {
    particles3[i].follow(flowfield);
    particles3[i].update();
    particles3[i].edges();
    particles3[i].show();
  }
  // push();
  // rectMode(RADIUS);
  // fill(255, 1 * sin(millis() * 1000));
  // noStroke();
  // rect(
  //   windowWidth / 2,
  //   windowHeight / 2,
  //   windowWidth / 2 - 30,
  //   windowHeight / 2 - 30
  // );
  // pop();
  indexk = indexk + 1;
  magv = magv - 0.01;
  scl = scl - 0.01;
  inc = inc + 0.001;
  //console.log(indexk);
  // push();
  // fill(255);
  // noStroke();
  // ellipse(windowWidth / 2, windowHeight / 2, sw, sh);
  // pop();s
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(29);
  indexk = 0;
  loop();
  cols = floor(windowWidth / scl);
  rows = floor(windowHeight / scl);
  //fr = createP("");
  flowfield = new Array(cols * rows);

  for (i = 0; i < 1000; i++) {
    particles[i] = new Particle(
      cr - i / conscol,
      cb - i / conscol,
      cg - i / conscol,
      fxrandRange(0, windowWidth, 10),
      fxrandRange(0, windowHeight, 10),
      0.1
    );
  }
  for (i = 0; i < 1000; i++) {
    particles3[i] = new Particle(
      cr - i / conscol,
      cb - i / conscol,
      cg - i / conscol,
      (windowWidth / 2) * fxrandRange(1, 20, 1),
      (windowHeight / 2) * fxrand(1, 20, 1),
      0.1
    );
  }
  for (i = 0; i < 1000; i++) {
    particles2[i] = new Particle2(
      fr - i / conscol,
      fb - i / conscol,
      fg - i / conscol,
      (fxrand() * windowWidth) / 10,
      (fxrand() * windowHeight) / 10,
      0.1
    );
  }
  for (i = 0; i < 1000; i++) {
    particles2[i] = new Particle2(
      fr - i / conscol,
      fb - i / conscol,
      fg - i / conscol,
      (fxrand() * windowWidth) / 2,
      (fxrand() * windowHeight) / 2,
      0.1
    );
  }
  push();
  noStroke();
  background(255);
  rectMode(RADIUS);
  fill(255);
  //fill(alpha(50));
  rect(
    windowWidth / 2,
    windowHeight / 2,
    windowWidth / 2 - 30,
    windowHeight / 2 - 30
  );

  rectMode(RADIUS);
  fill(255, 1 * sin(millis() * 1000));
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
  "Red Value": cr,
  "Green Value": cg,
  "Flow Magnitude": magv,
  "Blue Value": cb,
  "Flow Increase": inc,
  "Cell Scale": scl,
};

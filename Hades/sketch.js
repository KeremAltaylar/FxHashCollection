var inc = fxrandRange(1, 11, 0.1);
var scl = fxrandRange(100, 150, 1);
var magv = fxrandRange(1, 3, 0.1);
var cols, rows;
var fr;
var zoff = 10;
var particles = [];
var particles2 = [];
var particles3 = [];
var flowfield;
var magv;
var cr = fxrandRange(150, 170, 1);
var cg = fxrandRange(1, 18, 1);
var cb = fxrandRange(30, 60, 1);
var dr = fxrandRange(240, 250, 1);
var dg = fxrandRange(15, 20, 1);
var db = fxrandRange(12, 18, 1);
var indexk = 0;
var sw1 = fxrandRange(0.1, 0.2, 0.1);
var sw2 = fxrandRange(0.1, 0.2, 0.1);
var mes1a = fxrandRange(1, 8, 0.5);
var mes2a = fxrandRange(1, 8, 0.5);
var mes1b = fxrandRange(1, 8, 0.5);
var mes2b = fxrandRange(1, 8, 0.5);

function setup() {
  createCanvas(windowWidth, windowHeight);

  cols = floor(windowWidth / scl);
  rows = floor(windowHeight / scl);
  fr = createP("");
  flowfield = new Array(cols * rows);
  for (i = 0; i < 300; i++) {
    particles[i] = new Particle(
      cr,
      cg,
      cb,
      (fxrand() * i) / 2 + windowWidth / mes1a,
      fxrand() * i * 2 + windowHeight / mes1b,
      sw1,
      3
    );
  }
  for (i = 0; i < 250; i++) {
    particles3[i] = new Particle(
      0,
      0,
      0,
      (fxrand() * i) / 2 + windowWidth / 4,
      fxrand() * i * 2 + windowHeight / 2,
      1,
      3
    );
  }

  for (i = 0; i < 300; i++) {
    particles2[i] = new Particle2(
      dr,
      dg,
      db,
      fxrand() * i + windowWidth / mes2a,
      fxrand() * i + windowHeight / mes2b,
      sw2,
      3
    );
  }
  // background(235, 215, 141);
  background(0);
}

function draw() {
  if (indexk > 10) {
    noLoop();
  }
  var yoff = 0;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      var index = x + y * cols;
      flowfield[index] = v;
      var angle = zoff * xoff;
      var v = p5.Vector.fromAngle(angle);
      v.setMag(magv);
      xoff += inc;

      //rect(scl * x, scl * y, scl, scl);
    }
    yoff += inc;
    zoff += 0.003;
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
  push();
  rectMode(RADIUS);
  fill(0, 1 * sin(millis() * 1000));
  noStroke();
  rect(
    windowWidth / 2,
    windowHeight / 2,
    windowWidth / 2 - 30,
    windowHeight / 2 - 30
  );
  pop();
  stroke(0, 130);
  push();
  translate(x * scl, y * scl);
  rotate(v.heading());
  strokeWeight(0.1);
  line(0, 0, scl, 0);
  pop(); //fill(r);
  indexk = indexk + 1;
  //console.log(indexk);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  indexk = 0;
  cols = floor(windowWidth / scl);
  rows = floor(windowHeight / scl);
  //fr = createP("");
  flowfield = new Array(cols * rows);

  for (i = 0; i < 700; i++) {
    particles[i] = new Particle(
      cr,
      cg,
      cb,
      (fxrand() * i) / 2 + windowWidth / mes1a,
      fxrand() * i * 2 + windowHeight / mes1b,
      sw1,
      4
    );
  }
  for (i = 0; i < 250; i++) {
    particles3[i] = new Particle(
      0,
      0,
      0,
      (fxrand() * i) / 2 + windowWidth / 4,
      fxrand() * i * 2 + windowHeight / 2,
      1,
      6
    );
  }

  for (i = 0; i < 800; i++) {
    particles2[i] = new Particle2(
      dr,
      dg,
      db,
      fxrand() * i + windowWidth / mes2a,
      fxrand() * i + windowHeight / mes2b,
      sw2,
      8
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
  fill(0, 1 * sin(millis() * 1000));
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
  Gluttony: cr,
  Greed: db,
  Sloth: magv,
  Wrath: inc,
  Envy: scl,
};

var inc = fxrandRange(1, 30, 0.1);
var scl = fxrandRange(25, 250, 1);
var magv = fxrandRange(0.1, 20, 0.1);
var cols, rows;
var fr;
var zoff = 10;
var particles = [];
var particles2 = [];
var particles3 = [];
var flowfield;
var magv;
var cr = fxrandRange(60, 170, 1);
var cg = fxrandRange(70, 180, 1);
var cb = fxrandRange(60, 200, 1);
var dr = fxrandRange(84, 250, 1);
var dg = fxrandRange(65, 200, 1);
var db = fxrandRange(72, 180, 1);
var indexk = 0;
var sw1 = fxrandRange(0.1, 0.4, 0.1);
var sw2 = fxrandRange(0.1, 0.2, 0.1);
var mes1a = fxrandRange(0.1, 80, 0.1);
var mes2a = fxrandRange(0.1, 80, 0.1);
var mes1b = fxrandRange(2, 40, 0.1);
var mes2b = fxrandRange(2, 4, 0.1);
let size2 = fxrandRange(20, 100, 10);
let randoms = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (i = 0; i < 10; i++) {
    randoms[i] = fxrandRange(1, 8, 1);
  }
  cols = floor(windowWidth / scl);
  rows = floor(windowHeight / scl);
  fr = createP("");
  flowfield = new Array(cols * rows);
  for (i = 0; i < 150; i++) {
    particles[i] = new Particle(
      200,
      cg,
      cb,
      fxrand() * i + windowWidth / 4,
      fxrand() * i + windowHeight / 4,
      0.4
    );
  }
  for (i = 0; i < 100; i++) {
    particles2[i] = new Particle2(
      dr,
      dg,
      db,
      windowWidth / 2,
      fxrand() * i + windowHeight / 2,
      sw2
    );
  }
  // background(235, 215, 141);
  background(0);
}

function draw() {
  if (indexk > 150) {
    noLoop();
  }
  var yoff = 0;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      var index = x + y * cols;
      flowfield[index] = v;
      var angle = zoff * xoff * yoff * 100;
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
  fill(255, 1 * sin(millis() * 5000));
  noStroke();
  // rect(
  //   windowWidth / 2,
  //   windowHeight / 2,
  //   windowWidth / 2 - 30,
  //   windowHeight / 2 - 30
  // );
  pop();
  // stroke(0, 130);
  // push();
  // translate(x * scl, y * scl);
  // rotate(v.heading());
  // strokeWeight(0.1);
  // line(0, 0, scl, 0);
  // pop(); //fill(r);
  indexk = indexk + 1;
  //console.log(indexk);
  push();
  stroke(0);
  noFill();
  strokeWeight(size2);
  rect(0, 0, windowWidth, windowHeight);
  // rect(
  //   windowWidth - windowWidth / randoms[4],
  //   windowHeight - windowHeight / randoms[5],
  //   windowWidth / 2,
  //   windowHeight / 2
  // );
  // rect(
  //   windowWidth - windowWidth / 4,
  //   0,
  //   windowWidth / randoms[6],
  //   windowHeight / randoms[7]
  // );
  // rect(0, 0, windowWidth / randoms[8], windowHeight / randoms[0]);
  pop();
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  indexk = 0;
  loop();
  cols = floor(windowWidth / scl);
  rows = floor(windowHeight / scl);
  //fr = createP("");
  flowfield = new Array(cols * rows);

  for (i = 0; i < 150; i++) {
    particles[i] = new Particle(
      200,
      cg,
      cb,
      fxrand() * i + windowWidth / 4,
      fxrand() * i + windowHeight / 4,
      0.4
    );
  }
  for (i = 0; i < 100; i++) {
    particles2[i] = new Particle2(
      dr,
      dg,
      db,
      windowWidth / 2,
      fxrand() * i + windowHeight / 2,
      sw2
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
  fill(0, 4 * sin(millis() * 1000));
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
  XXM: cr,
  XYD: db,
  YZB: magv,
  ZXM: inc,
  XZT: scl,
};

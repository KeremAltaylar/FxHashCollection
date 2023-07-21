var inc = fxrandRange(10, 20, 0.1);
var scl = fxrandRange(100, 120, 1);
var magv = fxrandRange(0.1, 1, 0.1);
var cols, rows;
var fr;
var zoff = 0;
var particles = [];
var particles2 = [];
var particles3 = [];
var flowfield;
var magv;
var cr = fxrandRange(0, 200, 1);
var cg = fxrandRange(100, 110, 1);
var cb = fxrandRange(200, 250, 1);
var dr = fxrandRange(0, 100, 1);
var dg = fxrandRange(150, 200, 1);
var db = fxrandRange(10, 150, 1);
var indexk = 0;
var sw1 = fxrandRange(0.1, 0.5, 0.1);
var sw2 = fxrandRange(0.1, 0.5, 0.1);
var mes1a = fxrandRange(0.1, 4, 0.1);
var mes2a = fxrandRange(0.1, 8, 0.1);
var mes1b = fxrandRange(2, 4, 0.1);
var mes2b = fxrandRange(2, 4, 0.1);
var colback = "#172347";

function setup() {
  createCanvas(windowWidth, windowHeight);

  cols = floor(windowWidth / scl);
  rows = floor(windowHeight / scl);
  fr = createP("");
  flowfield = new Array(cols * rows);
  for (i = 0; i < 50; i++) {
    particles[i] = new Particle(
      cr,
      cg,
      cb,
      fxrand() * i + windowWidth / 2,
      fxrand() * i + windowHeight / 4,
      sw1
    );
  }
  for (i = 0; i < 100; i++) {
    particles2[i] = new Particle2(
      dr,
      dg,
      db,
      (fxrand() * i) / 10 + windowWidth / 2,
      (fxrand() * i) / 5 + windowHeight / 2,
      sw2
    );
  }
  for (i = 0; i < 100; i++) {
    particles3[i] = new Particle3(
      70,
      70,
      70,
      fxrand() * i * 5,
      fxrand() * i * 5 + windowHeight / mes2b,
      sw2,
      3
    );
  }
  // background(235, 215, 141);
  background(colback);
}

function draw() {
  if (indexk > 400) {
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
  for (var i = 0; i < particles3.length; i++) {
    particles3[i].follow(flowfield);
    particles3[i].update();
    particles3[i].edges();
    particles3[i].show();
  }
  push();
  rectMode(RADIUS);
  //fill(255, 1 * sin(millis() * 3000));
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
  indexk = 0;
  loop();
  cols = floor(windowWidth / scl);
  rows = floor(windowHeight / scl);
  //fr = createP("");
  flowfield = new Array(cols * rows);

  for (i = 0; i < 50; i++) {
    particles[i] = new Particle(
      cr,
      cg,
      cb,
      fxrand() * i + windowWidth / 2,
      fxrand() * i + windowHeight / 4,
      sw1
    );
  }
  for (i = 0; i < 100; i++) {
    particles2[i] = new Particle2(
      dr,
      dg,
      db,
      (fxrand() * i) / 10 + windowWidth / 2,
      (fxrand() * i) / 5 + windowHeight / 2,
      sw2
    );
  }
  for (i = 0; i < 100; i++) {
    particles3[i] = new Particle3(
      70,
      70,
      70,
      fxrand() * i * 5,
      fxrand() * i * 5 + windowHeight / mes2b,
      sw2,
      3
    );
  }

  push();
  noStroke();
  background(colback);
  rectMode(RADIUS);
  fill(colback);
  //fill(alpha(50));
  rect(
    windowWidth / 2,
    windowHeight / 2,
    windowWidth / 2 - 30,
    windowHeight / 2 - 30
  );

  rectMode(RADIUS);
  fill("#fbe2a3", 1 * sin(millis() * 1000));
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
  Shadow: cr,
  Self: dr,
  Destruction: magv,
  Creation: inc,
  Balance: scl,
};

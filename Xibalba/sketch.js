var inc = fxrandRange(10, 11, 0.1);
var scl = fxrandRange(40, 50, 1);
var magv = fxrandRange(3, 4, 0.1);
var cols, rows;
var fr;
var zoff = 10;
var particles = [];
var particles2 = [];
var particles3 = [];
var flowfield;
var magv;
var cr = fxrandRange(9, 10, 1);
var cg = fxrandRange(120, 180, 1);
var cb = fxrandRange(30, 60, 1);
var dr = fxrandRange(200, 250, 1);
var dg = fxrandRange(150, 200, 1);
var db = fxrandRange(120, 180, 1);
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
      (fxrand() * i) / 2 + windowWidth / 2,
      fxrand() * i * 2 + windowHeight / 2,
      sw1
    );
  }

  for (i = 0; i < 300; i++) {
    particles2[i] = new Particle2(
      dr,
      dg,
      db,
      fxrand() * i + windowWidth / 2,
      fxrand() * i + windowHeight / 2,
      sw2
    );
  }

  for (i = 0; i < 100; i++) {
    particles3[i] = new Particle3(
      202,
      dg,
      db,
      fxrand() * i + windowWidth / 4,
      fxrand() * i + windowHeight / 4,
      0.3
    );
  }

  // background(235, 215, 141);
  background(0);
}

function draw() {
  if (indexk > 100) {
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
  // pop();
  // stroke(0, 130);
  // push();
  // translate(x * scl, y * scl);
  // rotate(v.heading());
  // strokeWeight(0.1);
  // line(0, 0, scl, 0);
  // pop(); //fill(r);
  indexk = indexk + 1;
  //console.log(indexk);
  pop();
  noStroke();
  fill(0, 70);
  ellipse(
    windowWidth / 1.8 - windowWidth / 6,
    windowHeight / 1.8 - windowHeight / 20,
    windowWidth / 10,
    windowHeight / 20
  );
  ellipse(
    windowWidth - (windowWidth / 1.8 - windowWidth / 6),
    windowHeight / 1.8 - windowHeight / 20,
    windowWidth / 10,
    windowHeight / 20
  );
  push();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  loop();
  indexk = 0;
  cols = floor(windowWidth / scl);
  rows = floor(windowHeight / scl);
  //fr = createP("");
  flowfield = new Array(cols * rows);

  for (i = 0; i < 150; i++) {
    particles[i] = new Particle(
      cr,
      cg,
      cb,
      (fxrand() * i) / 2 + windowWidth / 20,
      fxrand() * i + windowHeight / 20,
      sw1
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
  Sun: cg,
  Sand: dg,
  Tree: magv,
  River: inc,
  Volcano: scl,
};

var inc = fxrandRange(1, 5, 0.1);
var scl = fxrandRange(70, 150, 1);
var magv = fxrandRange(0.5, 10, 0.1);
var cols, rows;
var fr;
var zoff = 0;
var particles = [];
var flowfield;
var magv;
var cr = fxrandRange(175, 255, 1);
//var cg = random(0, 255);
var cg = fxrandRange(10, 25, 1);
var cb = fxrandRange(10, 60, 1);
var indexk = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);

  cols = floor(windowWidth / scl);
  rows = floor(windowHeight / scl);
  fr = createP("");
  flowfield = new Array(cols * rows);
  for (i = 0; i < 1000; i++) {
    particles[i] = new Particle(cr, cg, cb, fxrand() * i, fxrand() * i);
  }
  background(255);
}

function draw() {
  if (indexk > 600) {
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
  push();
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
  indexk = indexk + 1;
  //console.log(indexk);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

  cols = floor(windowWidth / scl);
  rows = floor(windowHeight / scl);
  //fr = createP("");
  flowfield = new Array(cols * rows);

  for (i = 0; i < 1000; i++) {
    //particles[i] = new Particle(3, 0 + i * 20, 0);
    particles[i] = new Particle(
      cr,
      cg,
      cb,
      fxrand() * windowWidth,
      fxrand() * windowHeight
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

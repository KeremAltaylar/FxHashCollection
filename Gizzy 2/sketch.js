let circles = [];
let circleNumber = 100;
let circleSize = 10;
let circleCord = [];
let bg;

function preload() {
  bg = loadImage("libraries/wall.jpg");
}
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  for (i = 0; i < circleNumber; i++) {
    circleCord[i] = createVector(
      fxrandRange(
        -windowWidth / 2 + circleSize,
        windowWidth / 2 - circleSize,
        circleSize + 3
      ),
      fxrandRange(
        -windowHeight / 2 + circleSize,
        windowHeight / 2 - circleSize,
        circleSize + 3
      )
    );

    circles[i] = new Circler(circleCord[i].x, circleCord[i].y, circleSize, 200);
  }
  background(100);
  image(bg, -windowWidth / 2, -windowHeight / 2);
  console.log(circles);
  console.log(circleCord);
}
function draw() {
  for (i = 0; i < circleNumber; i++) {
    circles[i].lineshow(
      circleCord[i].x,
      circleCord[i].y,
      circleCord[i + 1].x,
      circleCord[i + 1].y,
      "gold"
    );
    circles[i].circleshow();
  }
}

class Circler {
  constructor(x, y, s, c) {
    this.x = x;
    this.y = y;
    this.s = s;
    this.colcir = c;
  }
  circleshow() {
    stroke(0);
    fill(this.colcir, 30);
    ellipse(this.x, this.y, this.s);
  }
  lineshow(p1x, p1y, p2x, p2y, col) {
    this.p1x = p1x;
    this.p1y = p1y;
    this.p2x = p2x;
    this.p2y = p2y;
    this.colline = col;
    strokeWeight(1);
    stroke(this.colline);
    line(this.p1x, this.p1y, this.p2x, this.p2y);
  }
}

function fxrandRange(min, max, step) {
  value = Math.round((fxrand() * (max - min)) / step);
  return value * step + min;
}

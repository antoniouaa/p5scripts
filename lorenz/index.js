let points = [];

let x = 0.1;
let y = 0;
let z = 0;

let sigma = 10;
let beta = 8 / 3;
let rho = 28;

let dt = 0.01;

function setup() {
  createCanvas(800, 600, WEBGL);
  colorMode(HSB);
}

function draw() {
  background(0);
  let dx = sigma * (y - x);
  let dy = x * (rho - z) - y;
  let dz = x * y - beta * z;

  x += dx * dt;
  y += dy * dt;
  z += dz * dt;

  points.push(new p5.Vector(x, y, z));
  if (points.length > 5000) {
    points.shift();
  }
  scale(7);
  stroke(255);
  noFill();
  translate(-20, 0, -10);

  rotateY(millis() / 20000);

  let h = 0;
  strokeWeight(5);
  beginShape();
  for (let p of points) {
    stroke(h, 255, 255);
    point(p.x, p.y, p.z);
    h += 0.1;
    if (h > 255) {
      h = 0;
    }
  }
  endShape();
}

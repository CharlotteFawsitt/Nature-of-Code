var mover;

function setup() {
  createCanvas(640, 640);
  mover = new Mover(Math.floor(random(5, 60)));

}

function draw() {
  background(255);
  ;

  var wind = createVector(0.1, 0);
  var gravity = createVector(0, 0.1 * mover.mass);

  var c = 0.5;
  var normal = 1;
  var frictionMag = c * normal;
  var friction = p5.Vector.mult(mover.velocity, -1);
  friction.normalize();
  friction.mult(frictionMag);

  mover.applyForce(friction);
  mover.applyForce(wind);
  mover.applyForce(gravity);

  mover.checkEdges();
  mover.update();
  mover.render();

}

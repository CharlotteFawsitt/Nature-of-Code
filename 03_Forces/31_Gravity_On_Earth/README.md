# Gravity on earth

Objects with different mass will all be affected by Gravity in the same way. What makes objects fall at different rates is other forces i.e. wind and wind resistance.
If we drop a ball and a piece of timber the same mass as the ball, the ball will more likely hit the ground first as it has less surface area then the other object.

For this next example we will create an array of movers and drop them all at the same time. The smaller objects will be pushed further out by the wind but they will all fall at the same rate.
```js
var movers = [];

function setup() {
  createCanvas(640, 640);
  for (var i = 0; i < 20; i++) {
    movers[i] = new Mover(Math.floor(random(5, 60)));
  }

}

function draw() {
    background(255);
  for (var i = 0; i < 20; i++) {
    var m = movers[i].mass;

    var wind = createVector(0.1, 0);
    var gravity = createVector(0, 0.01 * m);


    movers[i].applyForce(wind);
    movers[i].applyForce(gravity);

    movers[i].checkEdges();
    movers[i].update();
    movers[i].render();
  }
}
```

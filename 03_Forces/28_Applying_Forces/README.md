# Applying forces

For this example we are applying a force to the mover. WE do this by declaring a force variable in the sketch javascript. For this example we have declared wind as the force.
```js
var wind = createVector(0.1, 0.01);
```

After this we use the force apply function to appkly force to the mover.
```js
mover.applyForce(wind);
```

In the mover class we take in the force that was passed in through calling the function and let the acceleration equal the force.
```js
this.applyForce = function(force) {
  this.acceleration = force;
}
```

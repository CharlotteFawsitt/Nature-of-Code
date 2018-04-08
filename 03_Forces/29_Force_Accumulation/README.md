# Accumulating Forces

If we were to apply two forces like gravity and wind the code would just reset the force each time it was called. So to correct this we use change applyforce function to this.
```js
this.applyForce = function(force) {
  this.acceleration.add(force);
}
```
This allows the force to be added to the acceleration property instead of assigning the value. This allows you to call it multiple times.
After each update we need to reset acceleration to 0 to allow for changes in the forces.
```js
this.acceleration.mult(0);
```

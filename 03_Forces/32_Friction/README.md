# Friction

To apply friction we need to use the formula for friction which is as follows
```
Friction
= − µN^v
```

Using this formula in the code we can apply friction to an object.
```js
var c = 0.5;
var normal = 1;
var frictionMag = c * normal;
var friction = p5.Vector.mult(mover.velocity, -1);
friction.normalize();
friction.mult(frictionMag);

mover.applyForce(friction);
```

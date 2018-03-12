# Acceleration
There are two additions to this example. The first is a acceleration vector.
```js
this.acceleration = createVector(0.03, 0.04);
```

And the other addition is in the update function. We add the acceleration to the velocity each time update is called and we set a limit to the velocity so it doesn't become too fast.
```js
this.velocity.add(this.acceleration);
this.velocity.limit(10);
```

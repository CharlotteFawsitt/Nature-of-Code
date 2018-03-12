# Random acceleration
In this example we use a random2D function to get back a random value for the acceleration velocity and multiply it by 2. This way the acceleration can vary and not be constant.
```js
this.acceleration = p5.Vector.random2D();
this.acceleration.mult(0.02);
```

# Mass

Objects with different mass will be affected by forces differently. A light object will move much more with wind than a heavy object.

For this we need to modify the class to take in a parameter.
```js
function Mover(m){}
```

We will also assign the parameter m to a variable that can be used.
```js
this.mass = m;
```

To show a heavier object we will set the diameter of the circle to be the mass. Therefore a heavier object will be bigger in appearance.
```js
ellipse(this.location.x, this.location.y, this.mass, this.mass);
```

Finally we will modify the applyForce function. This will allow us to apply the force to the mass of the object.
```js
this.applyForce = function(force) {
  var f = p5.Vector.div(force, this.mass);
  this.acceleration.add(f);
}
```

By using a variable we can use a static function so as not to change the value of force. We divide force by the mass. Then add this to the acceleration.

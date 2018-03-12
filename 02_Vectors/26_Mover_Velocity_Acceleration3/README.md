# Acceleration towards the mouse
For this example we are back to creating a vector for the mouse location. This time however we are using a static method so as not to change the value of mouse and change the value of accleration instead.
By doing this we are able to move the ball towards the mouse.
```js
var mouse = createVector(mouseX, mouseY);

this.acceleration = p5.Vector.sub(mouse, this.location);
this.acceleration.setMag(0.2);
```

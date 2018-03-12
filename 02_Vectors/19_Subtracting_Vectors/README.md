# Subtracting vectors
For this one we are drawing lines instead of moving a ball.
```js
var mouse = createVector(mouseX, mouseY);
```
This line of code creates a vector using the mouse's x and y location.
```js


var center = createVector(width / 2, height / 2);
```
This line creates a vector at the center of the canvas.


```js
//create a vector line by subtracting the center vector from the mouse vector
var vectorLine = mouse.sub(center);
```
This creates a vector line from by subtracting the center vector from the mouse vector.

```js
translate(width / 2, height / 2);
strokeWeight(2);
stroke(255);
line(0, 0, vectorLine.x, vectorLine.y);
```
This translates to the center of the page and draws the line using the new vector.

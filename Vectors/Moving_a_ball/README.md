# Using Vectors

This exmaple shows the use of a simple vector to move a ball from left to right on the page.
By declaring variables for x, y and the x speed we can control where the ball starts and where it moves to on the x axis.
We start by adding the xspeed to the x position and this starts the ball moving. Then we check to see if the ball leaves the canvas.
If it does then turn it back around. We then draw a circle at the x position and redraw it everytime the draw function is called. This 
moves the ball from left to right on the page and bouncing off the edges.
```js
var x = 320;
var y = 180;
var xSpeed = 2;

function setup() {
    createCanvas(640, 360);
}

function draw() {
    background(51);

    //Add the current speed to the position
    x = x + xSpeed;

    //Check to see if the position is off the canvas
    if ((x + 24 > width || x - 24 < 0)) {
        xSpeed = xSpeed * -1;
    }

    //Display a circle at the x position
    stroke(0);
    strokeWeight(2);
    fill(127);
    ellipse(x, 180, 48, 48);
}
````
By adding half the diameter to the x and checking it is less than the width we can make the edge of the ball bounce off the edge instead of the center.

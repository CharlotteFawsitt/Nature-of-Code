# Gaussian distribution on the X axis

In this example the randomgaussian function is used to pick a number that fits into a normal distribution. The randomgaussian function
takes two parameters, the mean and the standard deviation. If no parameters are given like in this example then the mean is 0 and the sd is 1.
So the function should return a number between -3 and 3. We then set the sd for our animation and the mean as the center of the canvas. 
We position the ball to be the xloc times the sd, then add the mean. This ensures that the mean is the center and whatever the result of the 
xloc times the sd it will be either side of the mean. This results with the majority of balls appearing within 1 standard deviation of the mean.
The next sd will have less balls and the third will only have the odd ball appear.
```js
var xloc = randomGaussian();
    console.log(xloc);

    var sd = 60;
    var mean = width / 2;
    xloc = (xloc * sd) + mean;

    fill(0, 10);
    noStroke();
    ellipse(xloc, height / 2, 16, 16);
```

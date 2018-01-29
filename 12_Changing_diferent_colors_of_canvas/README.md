# Using the pixel array to change colors of the canvas

By changing the first and third value of the array to the x and y values we can create an image with different colours on the canvas. This 
changes the red and blue value of each pixel to the value of x and y.
```js
pixels[index + 0] = x;
            pixels[index + 1] = 0;
            pixels[index + 2] = y;
            pixels[index + 3] = 255;
```

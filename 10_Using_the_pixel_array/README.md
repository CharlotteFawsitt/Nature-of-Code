# Using the pixel array

This example loads the pixel array. After that we multiply the y value by the width, add the x value. Because each RGBA value takes up an 
array index we multiply that result by 4 to get the red value of each pixel. Then we set the red and alpha index of that pixel to 255. This
results in a solid red pixel up at the top of the canvas. Updatepixels then sets the values for each pixel to what you have set them as. 
```js
loadPixels();
    var index = (2 + 2 * 5) * 4;
    pixels[index + 0] = 255;
    pixels[index + 1] = 0;
    pixels[index + 2] = 0;
    pixels[index + 3] = 255;

    updatePixels();
```

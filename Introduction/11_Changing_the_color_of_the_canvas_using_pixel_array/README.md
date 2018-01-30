# Using the pixel array to change the entire canvas to one olor

This is much the same as the last one except that we create a nested for loop to changed the value in every pixel on the canvas.
This changes every pixel on the canvas to red.
```js
loadPixels();
    for (var y = 0; y < height; y++) {
        for (var x = 0; x < width; x++) {
            var index = (x + y * width) * 4;
            pixels[index + 0] = 255;
            pixels[index + 1] = 0;
            pixels[index + 2] = 0;
            pixels[index + 3] = 255;
        }
    }

    updatePixels();
```

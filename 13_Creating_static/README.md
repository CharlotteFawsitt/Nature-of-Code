# Using the pixels array to create staic

By introducing a new variable bright and setting it to a random number between 0 and 255, then setting the RGB value to this variable
the result is each pixel will be some form of grey. By refreshing the page this creates a static effect. 
```js
var bright = random(255);
            pixels[index + 0] = bright;
            pixels[index + 1] = bright;
            pixels[index + 2] = bright;
            pixels[index + 3] = 255;
```
